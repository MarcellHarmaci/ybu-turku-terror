import { collection, getDocs, type DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useConverter } from "./useConverter";

export const useDocuments = <T extends DocumentData>(
  collectionName: string
) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<T[]>([]);
  const [error, setError] = useState();
  const [refetchTrigger, setRefetchTrigger] = useState(0);

  const converter = useConverter<T>();
  const collectionRef = collection(db, collectionName).withConverter(converter);

  useEffect(() => {
    setLoading(true);

    getDocs(collectionRef).then(
      (value) => {
        setLoading(false);
        setList(value.docs.map((item) => item.data()));
      },
      (reason) => {
        setLoading(false);
        setError(reason);
        setList([]);
      }
    );
  }, [refetchTrigger]);

  const refetch = () => setRefetchTrigger((prev) => prev + 1);

  return { loading, success: list !== undefined, list, error, refetch };
};
