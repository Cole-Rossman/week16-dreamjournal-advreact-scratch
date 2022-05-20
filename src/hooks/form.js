import { useContext } from "react";
import { EntriesContext } from "../context/EntriesContext";

export default function useForm() {
  const context = useContext(EntriesContext);

  if (context === undefined) {
    throw new Error('useEntries must be used within a EntriesContext');
}

  const { } = context;

  

  return {};
}
