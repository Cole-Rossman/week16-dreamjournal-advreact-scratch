import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/user";


export default function EntryItem({ entry }) {
    const { user } = useAuth();
    const isCreator = user.id === entry.user_id;
    const { id, date, created_at } = entry;
    const entryDate = new Date(created_at);

  return (
    <li>
        <span>Journal entry created at: {entryDate.toLocaleDateString()}</span>

        <Link to={`/journalentries/${id}`}>
            {date}
        </Link>

        <span>
            {isCreator &&
            <Link to={`/journalentries/${id}/edit`}>
                Edit journal entry
            </Link>
            }
        </span>
    </li>
  );
}
