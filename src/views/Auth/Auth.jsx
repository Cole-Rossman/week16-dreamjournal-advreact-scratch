import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/user';
import authStyle from './Auth.css'

export default function Auth() {

  const { login, signUp, email, setEmail, password, setPassword, error, setError, type, setType } = useAuth();

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      if (type === 'sign-in') {
        event.preventDefault();
        await login(email, password);
        // not setting user here because login function sets user in context
        history.replace('/journalentries');
      } else {
        event.preventDefault();
        await signUp(email, password);

        history.replace('/journalentries');
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
    <h1>
      <span className={type === 'sign-in' ? authStyle.active : ''} onClick={() => setType('sign-in')}>
        Sign In
      </span>
      <span className={type === 'sign-up' ? authStyle.active : ''} onClick={() => setType('sign-up')}>
        Sign Up
      </span>
    </h1>
    <form className={authStyle.form} onSubmit={handleSubmit}>
      <label>
        Email:
        <input
        placeholder="Email address"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
        placeholder='Password'
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button className={authStyle.button}
      type='submit'>{type}</button>
    </form>
    <p>{error}</p>
    </>
  );
}
