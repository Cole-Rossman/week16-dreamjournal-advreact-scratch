import { useHistory, Link } from "react-router-dom";
import { useEntries } from "../../hooks/entries";
import EntriesForm from "../../components/Form/EntriesForm";

export default function AddEntry() {
    const { addEntry } = useEntries();
    const history = useHistory();

    const handleSubmit = async entry => {
        await addEntry(entry);
        history.replace('/journalentries');
    }
  return (
    <div>
        <h1>Add a new dream!</h1>
        <EntriesForm onSubmit={handleSubmit} />
    </div>
  );
}
