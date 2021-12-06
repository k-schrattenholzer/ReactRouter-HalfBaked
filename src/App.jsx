import Router from 'react-router'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <header>Library Catalog</header>
        <BookList />
      </Router>
    </main>
  )
}

export default App
