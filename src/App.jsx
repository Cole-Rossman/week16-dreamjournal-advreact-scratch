import { Route, Redirect, Switch } from 'react-router-dom';
import { useAuth } from './hooks/user';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import AddEntry from './views/JournalEntries/AddEntry';
import ViewEntries from './views/JournalEntries/ViewEntries';

export default function App() {
  const { currentUser } = useAuth();

  return (
    <>
    {currentUser && <Header/>}
    <Switch>
      <Route path="/login">
        {!currentUser ? <Auth /> : <Redirect to="/journalentries" /> }
      </Route>
      <PrivateRoute path="/journalentries/add">
        <AddEntry />
      </PrivateRoute>
      <PrivateRoute path="/journalentries">
        <ViewEntries />
      </PrivateRoute>
      <Route path="/home">
        <Home />
      </Route>
      {/* lines 30-31 make it so our page will default to the /home since the redirect will bring us to /home from http default of / */}
      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
    </>
  );
}
