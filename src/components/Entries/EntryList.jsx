import EntryItem from "./EntryItem";


export default function EntryList({ entries }) {

    if (!entries) return null;


  return (
    <ul>
        {entries.map((entry) => {
          return (
           <EntryItem
              key={entry.id}
              entry={entry}
              />
           );
        })}
    </ul>
  );
}
