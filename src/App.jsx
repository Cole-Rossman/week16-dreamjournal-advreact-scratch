import { Route, Redirect, Switch } from 'react-router-dom';
import { useUser } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import AddEntry from './views/JournalEntries/AddEntry';
import ViewEntries from './views/JournalEntries/ViewEntries';

export default function App() {
  const { currentUser } = useUser();

  return (
    <>
    {currentUser && <Header/>}
    <Switch>
      <Route path="/login">
        {!currentUser ? <Auth /> : <Redirect to="/" /> }
      </Route>
      <PrivateRoute path="/journalentries/add">
        <AddEntry />
      </PrivateRoute>
      <PrivateRoute path="/journalentries">
        <ViewEntries />
      </PrivateRoute>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </>
  );
}
