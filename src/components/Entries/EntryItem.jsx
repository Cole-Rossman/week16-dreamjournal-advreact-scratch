import { Link } from "react-router-dom";

export default function EntryItem({ entry }) {
    const { id, date, created_at } = entry;
    const entryDate = new Date(created_at);

  return (
    <li>
        <span>Journal entry created at: {entryDate.toLocaleDateString()}</span>
        <div>
        Dream from {date}
        {/* below i am passing my entry state through the link so that the detail page has access to it */}
        <div>
        <Link to={{
          pathname: `/journalentries/${id}`,
          state: {entry}
        }}>
           <button>Dream Details</button>
        </Link>
        </div>
        </div>
    </li>
  );
}
