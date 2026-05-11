import { doc, setDoc, type DocumentData } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

export const useSave = <T extends DocumentData>() => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState();

  const save = (collection: string, docId: string, data: T) => {
    const document = doc(db, collection, docId);

    setLoading(true);

    setDoc(document, data).then(
      () => {
        setLoading(false);
        setSuccess(true);
      },
      (reason) => {
        console.error("Could not save data!", reason);
        setLoading(false);
        setError(reason);
      }
    );
  };

  return { save, loading, success, error };
};
