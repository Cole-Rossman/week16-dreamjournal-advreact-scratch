import { useEntries } from "../../hooks/entries";
import { useAuth } from "../../hooks/user";

export default function Header() {
  const { currentUser, logout, user } = useAuth();
  const { entries } = useEntries();

  if (!entries) return null;

  const handleSubmit = () => {
    logout();
  };
  

  return (
    <>
    <h2>Welcome</h2>
    <p>User: {currentUser.email}</p>
    <p>Your dream community has {entries.length} journal entries</p>
    <button
    type="submit"
    onClick={handleSubmit}
    >Logout</button>
    </>
  )
}
