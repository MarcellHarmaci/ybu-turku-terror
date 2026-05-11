import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export const useFirebaseDocument = <DocType>(
  collection: string,
  documentId: string
) => {
  const [data, setData] = useState<DocType | null | undefined>(undefined);
  const [refetchTrigger, setRefetchTrigger] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, collection, documentId),
      (snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.data() as DocType);
        }
      },
      (error) => {
        console.error("Firestore onSnapshot error:", error);
      }
    );

    return unsubscribe;
  }, [collection, documentId, refetchTrigger]);

  const refetch = () => setRefetchTrigger((prev) => prev + 1);

  return { isLoading: data === undefined, refetch, data };
};
