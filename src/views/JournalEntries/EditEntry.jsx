import { useParams, useHistory } from "react-router-dom";
import { useEntry } from "../../hooks/entries";
import EntriesForm from "../../components/Form/EntriesForm";

export default function EditEntry() {
    const history = useHistory();
    const { id } = useParams();
    const { entry, updateEntry } = useEntry(id);

    if(!entry) return null;

    const handleSubmit = async (edited) => {
        await updateEntry(edited);
        history.replace('/journalentries');
    };
  
  return (
    <div>
        <EntriesForm 
        label="Edit journal entry"
        entry={entry}
        onSubmit={handleSubmit}
        />
    </div>
  );
}
