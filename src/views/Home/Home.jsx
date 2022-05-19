import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/user";

export default function Home() {
  const { isLoggedIn } = useAuth();
  
  return (
    <>
    <h1>Welcome to your personal dream journal!</h1>
    <p>
      Dreams can be full of wonder, fright and everything in between. Taking note of your dreams can help reduce stress, remember amazing ideas, solve problems and learn from your mistakes. 
    </p>
    <p>To start logging your dreams, please create an account below or login. If you already logged in, you'll be redirected to your journal entries.</p>
    {isLoggedIn ? (
      <Link to="/journalentries">Journal entries</Link>
    ) : (
      <Link to="/login">Sign in</Link>
    )}
    </>
  )
}
