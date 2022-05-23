import { Link, useParams, useHistory } from "react-router-dom";
import { useEntries, useEntry } from "../../hooks/entries";
import EntriesForm from '../../components/Form/EntriesForm';

export default function CopyEntry() {
    const history = useHistory();
    const { id } = useParams();
    const { entry } = useEntry(id);
    const { addEntry } = useEntries;

    if (!entry) return null;

    const handleSubmit = async (copied) => {
        await addEntry(copied);
        history.replace('/journalentries');
    };

  return (
    <div>
        <Link to="/journalentries">
            View journal entries
        </Link>

        <EntriesForm
        label="New Entry"
        entry={entry}
        onSubmit={handleSubmit}
        />
    </div>
  );
}
