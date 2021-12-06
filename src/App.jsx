import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
// when using Switch, received an error that switch is not exported from react router, and error pointed to use Routes instead
import Home from './views/Home/Home'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <header>
          Oh gosh - so many books!
          <NavLink to="/" className="App-link" exact>
            Home
          </NavLink>
          <NavLink to="/books" className="App-link" exact>
            Books
          </NavLink>
        </header>
        <Switch>
          <Route path="/books/:id" exact component={BookDetail} />
          <Route path="/books" exact component={BookList} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
