import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/user";

export default function EntryItem({ entry }) {
    const { user } = useAuth();
    const { id, date, created_at, user_id } = entry;
    const isCreator = user.id === user_id;
    const entryDate = new Date(created_at);
    const action = isCreator ? 'edit' : 'copy';
    const fromUser = isCreator ? user.email : 'Other community member';
  return (
    <li>
      <span>Journal entry created at: {entryDate.toLocaleDateString()}</span>
      <div>
        <span>From: {fromUser}</span>
      </div>
      <div>
        <span>Dream from: {date}</span>
        {/* below i am passing my entry state through the link so that the detail page has access to it */}
        <div>
        <Link to={{
          pathname: `/journalentries/${id}`,
          state: {entry}
        }}>
           <button>Dream Details</button>
        </Link>
        </div>
        <div>
        <Link to={`/journalentries/${id}/${action}`}>
          {action}
        </Link>
        </div>
      </div>
    </li>
  );
}
