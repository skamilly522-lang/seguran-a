import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  doc, 
  getDocFromServer, 
  collection, 
  getDocs, 
  setDoc, 
  deleteDoc, 
  onSnapshot, 
  query 
} from 'firebase/firestore';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged, 
  User 
} from 'firebase/auth';
import firebaseConfig from '../firebase-applet-config.json';
import { EvaluationRecord, ActionPlan, Employee } from './types';

// Initialize Firebase SDK
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Error Handling Standard Definition
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Connection check
export async function testConnection(): Promise<boolean> {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    return true;
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn("Firestore client is currently offline. Local cache will be used.");
    }
    return false;
  }
}

// Test connection on boot
testConnection();

// Authentication Helpers
export async function signInWithGoogle(): Promise<User | null> {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google sign-in error:", error);
    return null;
  }
}

export async function logoutUser(): Promise<void> {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error:", error);
  }
}

// Data Sync Helpers
export async function saveEvaluationToFirestore(evaluation: EvaluationRecord): Promise<void> {
  const path = `evaluations/${evaluation.id}`;
  try {
    await setDoc(doc(db, 'evaluations', evaluation.id), evaluation);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function deleteEvaluationFromFirestore(id: string): Promise<void> {
  const path = `evaluations/${id}`;
  try {
    await deleteDoc(doc(db, 'evaluations', id));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export async function saveActionPlanToFirestore(plan: ActionPlan): Promise<void> {
  const path = `actionPlans/${plan.id}`;
  try {
    await setDoc(doc(db, 'actionPlans', plan.id), plan);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function deleteActionPlanFromFirestore(id: string): Promise<void> {
  const path = `actionPlans/${id}`;
  try {
    await deleteDoc(doc(db, 'actionPlans', id));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export async function saveEmployeeToFirestore(employee: Employee): Promise<void> {
  const path = `employees/${employee.id}`;
  try {
    await setDoc(doc(db, 'employees', employee.id), employee);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function deleteEmployeeFromFirestore(id: string): Promise<void> {
  const path = `employees/${id}`;
  try {
    await deleteDoc(doc(db, 'employees', id));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export async function bulkSyncToFirestore(
  evaluations: EvaluationRecord[],
  actionPlans: ActionPlan[],
  employees: Employee[]
): Promise<void> {
  const promises: Promise<void>[] = [];
  
  for (const ev of evaluations) {
    promises.push(setDoc(doc(db, 'evaluations', ev.id), ev));
  }
  for (const ap of actionPlans) {
    promises.push(setDoc(doc(db, 'actionPlans', ap.id), ap));
  }
  for (const emp of employees) {
    promises.push(setDoc(doc(db, 'employees', emp.id), emp));
  }

  try {
    await Promise.all(promises);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, 'bulkSync');
  }
}
