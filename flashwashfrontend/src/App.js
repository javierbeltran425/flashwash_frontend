
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home'

import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider, QueryClient } from 'react-query'

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
