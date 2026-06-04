import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";
import type { FirestoreDataType } from "./model";

export const useAddArrayItem = (
  collection: string,
  docId: string,
  fieldName: string
) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState();

  const document = doc(db, collection, docId);

  const insert = (newItem: FirestoreDataType) => {
    setLoading(true);

    const update = {
      [fieldName]: arrayUnion(newItem),
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

  return { insert, loading, success, error };
};
