import './App.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Fib from './Fib'
import OtherPage from './OtherPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </BrowserRouter>
  )
}

export default App
