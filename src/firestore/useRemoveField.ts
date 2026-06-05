import { deleteField, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

export const useRemoveField = (collection: string, docId: string) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState();

  const document = doc(db, collection, docId);

  const removeField = (fieldName: string) => {
    setLoading(true);

    const update = {
      [fieldName]: deleteField(),
    };
    updateDoc(document, update).then(
      () => {
        setLoading(false);
        setSuccess(true);
      },
      (reason) => {
        setLoading(false);
        setError(reason);
      }
    );
  };

  return { removeField, loading, success, error };
};
