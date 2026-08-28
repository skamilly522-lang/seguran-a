# Security Specification: SafetyHub Guarabira Firestore Security

## 1. Data Invariants
1. **Safety Evaluations (`/evaluations/{evaluationId}`)**:
   - Must have a valid string ID matching `^[a-zA-Z0-9_-]+$`.
   - Must contain valid `gabaritoType` ('GSD' | 'GSA' | 'GSP'), non-empty `unit`, `date`, `evaluator`, and a numeric `score` (0-100).
   - Only authenticated users can read and write evaluations.

2. **Action Plans (`/actionPlans/{actionPlanId}`)**:
   - Must reference a valid `evaluationId`.
   - `status` must be one of 'Pendente', 'Em Andamento', 'Concluido', 'Atrasado'.
   - `deadline`, `actionRequired`, and `responsible` must be non-empty strings.

3. **Employees / Collaborators (`/employees/{employeeId}`)**:
   - Must contain valid employee fields (`name`, `role`, `unit`, `hireDate`, `type`, `gabaritoType`, `periodicityStatus`).
   - Only authenticated users can create, update, or remove employees.

4. **User Profiles (`/users/{userId}`)**:
   - Users can only read and write their own profile document (`request.auth.uid == userId`).
   - Admins can manage roles.

## 2. The Dirty Dozen Payloads (Rejection Matrix)
1. **Unauthenticated Read on Evaluations**: `GET /evaluations/eval1` with `request.auth == null` -> DENIED.
2. **Unauthenticated Write on Evaluations**: `POST /evaluations/eval1` with `request.auth == null` -> DENIED.
3. **Evaluation with Invalid Gabarito Type**: `POST /evaluations/eval1` with `{ gabaritoType: "INVALID" }` -> DENIED.
4. **Evaluation with Negative Score**: `POST /evaluations/eval1` with `{ score: -10 }` -> DENIED.
5. **Evaluation with Oversized ID**: `POST /evaluations/` with 2000-char ID -> DENIED.
6. **Action Plan with Invalid Status**: `POST /actionPlans/plan1` with `{ status: "DONE" }` -> DENIED.
7. **Action Plan with Missing evaluationId**: `POST /actionPlans/plan1` with `{ evaluationId: "" }` -> DENIED.
8. **Employee with Missing Name**: `POST /employees/emp1` with `{ name: "" }` -> DENIED.
9. **Employee with Invalid Periodicity Status**: `POST /employees/emp1` with `{ periodicityStatus: "UNKNOWN" }` -> DENIED.
10. **Spoofing User Profile**: `POST /users/otherUserId` with `request.auth.uid != otherUserId` -> DENIED.
11. **Injecting Arbitrary Top-Level Collection**: `POST /untrackedCollection/doc1` -> DENIED by default catch-all rule.
12. **Malicious JSON Array Overflow**: `POST /evaluations/eval1` with 10,000 junk elements -> DENIED.
