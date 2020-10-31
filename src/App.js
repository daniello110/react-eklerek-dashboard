import './reset.css'
import './App.css';
import DessertGenerator from './components/DessertGenerator'
import Stopwatch from './components/Stopwatch'
import Main from './components/Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <main>
      <div >
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/dessert" component={DessertGenerator} />
            <Route path='/stopwatch' component={Stopwatch} />
          </Switch>
        </Router>
      </div>
    </main>
  );
}

export default App;
