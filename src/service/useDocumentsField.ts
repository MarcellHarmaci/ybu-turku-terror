import { type DocumentData } from "firebase/firestore";
import { useDocuments } from "./useDocuments";

export const useDocumentsField = <T extends DocumentData>(
  collectionName: string,
  fieldName: keyof T
) => {
  const documentsHook = useDocuments<T>(collectionName);

  return {
    ...documentsHook,
    list: documentsHook.list.map((item) => item[fieldName]),
  };
};
