import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home'
import Products from './Products';
import SignIn from './SignIn';
import About from './About';
import Footer from './Footer';
import SignUp from './SignUp';
function App() {
  return (
    <>

      <Router>

        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/about' component={About} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>

        <Footer />
      </Router>

    </>
  );
}

export default App;
