import { collection, getDocs, type DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useConverter } from "./useConverter";

export const useDocumentsWithId = <T extends DocumentData>(
  collectionName: string
) => {
  const [loading, setLoading] = useState(true);
  const [valuesByIds, setValues] = useState<{ [id: string]: T }>({});
  const [error, setError] = useState();
  const [refetchTrigger, setRefetchTrigger] = useState(0);

  const converter = useConverter<T>();
  const collectionRef = collection(db, collectionName).withConverter(converter);

  useEffect(() => {
    setLoading(true);

    getDocs(collectionRef).then(
      (value) => {
        setLoading(false);
        value.docs.forEach((item) =>
          setValues((prev) => ({
            ...prev,
            [item.id]: item.data(),
          }))
        );
      },
      (reason) => {
        setLoading(false);
        setError(reason);
        setValues({});
      }
    );
  }, [refetchTrigger]);

  const refetch = () => setRefetchTrigger((prev) => prev + 1);

  return {
    loading,
    success: Object.keys(valuesByIds).length == 0,
    valuesByIds,
    error,
    refetch,
  };
};
