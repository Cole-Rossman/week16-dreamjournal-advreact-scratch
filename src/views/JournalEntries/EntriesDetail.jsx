import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth } from '../../hooks/user';


export default function EntriesDetail() {
    // location will give me access to the entry state passed from entryItem.jsx. then const entry will allow me to grab the needed state from location to use in the file.
    let location = useLocation();
    
    const entry = location.state.entry;
    
    
    const { user } = useAuth();
    const { id, date, description, dream_significance, nightmare } = entry;
    const isCreator = user.id === entry.user_id;
  return (
    <div>
         <span>
            {isCreator &&
            <Link to={`/journalentries/${id}/edit`}>
                <button>Edit</button>
            </Link>
            }
        </span>
    </div>
  )
}
