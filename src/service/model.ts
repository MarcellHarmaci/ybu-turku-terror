export type FirestoreDataType =
  | boolean
  | number
  | string
  | string[]
  | object
  | object[];

export interface FirestoreOperation {
  loading: boolean;
  success: boolean;
  error: unknown;
}
