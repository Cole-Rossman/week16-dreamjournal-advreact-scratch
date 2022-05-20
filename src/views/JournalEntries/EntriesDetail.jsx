import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth } from '../../hooks/user';
import { useEntry } from '../../hooks/entries';

export default function EntriesDetail() {
    // location will give me access to the entry state passed from entryItem.jsx. then const entry will allow me to grab the needed state from location to use in the file.

    const history = useHistory();
    
    let location = useLocation();
    
    const entry = location.state.entry;
    
    const { user } = useAuth();
    const { id, date, description, dream_significance, nightmare } = entry;
    const isCreator = user.id === entry.user_id;

    const { removeEntry } = useEntry(id);

    const handleSubmit = async () => {
        await removeEntry(id);
        history.replace('/journalentries');
    };

  return (
    <div>
        <h1>Your Dream Journal</h1>
        <h3>Dream from the night of: {date}</h3>
        <p>Dream description: {description}</p>
        <p>What does this dream mean: {dream_significance}</p>
        <p>Was this dream a nightmare: {nightmare}</p>
         <div>
            {isCreator &&
            <Link to={`/journalentries/${id}/edit`}>
                <button>Edit</button>
            </Link>
            }
        </div>
        <div>
            <Link to="/journalentries/">
                <button>Back to entries</button>
            </Link>
        </div>
        <div>
            <button
            type='submit'
            onClick={handleSubmit}
            >Delete Dream</button>
        </div>
    </div>
  )
}
