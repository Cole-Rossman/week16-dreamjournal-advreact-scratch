import { Link } from "react-router-dom";
import { useEntries } from "../../hooks/entries";
import EntryList from "../../components/Entries/EntryList";


export default function ViewEntries() {
  const { entries } = useEntries();

  return (
    <div>
      <h1>Dream Journal Entries 🌙 </h1>

      <Link to="/journalentries/add">
        <button>Add a new Dream</button>
      </Link>

      <EntryList entries={entries} />
    </div>
  );
}
