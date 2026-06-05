import { doc, getDoc, type DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useConverter } from "./useConverter";

export interface ServiceHookConfig {
  skip: boolean;
}

/**
 * While `loading`, `data` will be undefined.
 * When `loading` turns `false`, `data` will be the requested document of type `T`
 * or `null` if the document does not exist or an error occurs.
 * @param collection
 * @param docId
 * @returns
 */
export const useDocument = <T extends DocumentData>(
  collection: string,
  docId: string,
  config?: ServiceHookConfig
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>();
  const [error, setError] = useState();
  const [refetchTrigger, setRefetchTrigger] = useState(0);

  const document = doc(db, collection, docId).withConverter(useConverter<T>());

  useEffect(() => {
    if (config?.skip) return;

    setLoading(true);

    getDoc(document).then(
      (value) => {
        setLoading(false);
        setData(value.data());
      },
      (reason) => {
        setLoading(false);
        setError(reason);
        setData(null);
      }
    );
  }, [refetchTrigger, config]);

  const refetch = () => setRefetchTrigger((prev) => prev + 1);

  return { loading, success: !!data, data, error, refetch };
};
