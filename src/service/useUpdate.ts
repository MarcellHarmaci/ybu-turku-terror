import { doc, FieldValue, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";
import type { FirestoreDataType, FirestoreOperation } from "./model";

export type UpdateOperation<Update extends FirestoreDataType> = {
  updateDocument: (newValue: Update) => void;
} & FirestoreOperation;

export const useUpdate = <Update extends FirestoreDataType>(
  collection: string,
  docId: string,
  fieldName: string
) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState();

  const document = doc(db, collection, docId);

  const updateDocument = (newValue: Update | FieldValue) => {
    setLoading(true);

    const update = {
      [fieldName]: newValue,
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

  return { updateDocument, loading, success, error };
};
