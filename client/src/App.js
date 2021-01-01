import './App.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Fib from './Fib'
import OtherPage from './OtherPage'

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/otherpage">Other Page</Link>
      <BrowserRouter>
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </BrowserRouter>
    </div>
  )
}

export default App
