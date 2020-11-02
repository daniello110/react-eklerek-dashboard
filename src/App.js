import './reset.css'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DessertGenerator from './components/DessertGenerator'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import Stopwatch from './components/Stopwatch'
import Login from './components/Login'
import Main from './components/Main'

function App() {
  return (
    <main>
      <div >
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Main} />
              <PrivateRoute path="/dessert" component={DessertGenerator} />
              <PrivateRoute path='/stopwatch' component={Stopwatch} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </main>
  );
}

export default App;
