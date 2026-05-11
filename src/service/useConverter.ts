import type {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

export const useConverter = <T extends DocumentData>() => ({
  toFirestore(data: T): DocumentData {
    return data;
  },

  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): T {
    return snapshot.data(options) as T;
  },
});
