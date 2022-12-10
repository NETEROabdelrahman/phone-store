import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './Cart/Cart';

import Default from './components/Default';
import Details from './components/Details';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
const App = () => {
  return ( 
    <Router>
      <Navbar />
      
      <Switch>
        <Route exact path='/'>
      <ProductList />
        </Route >
        <Route path='/details'>
      <Details />
        </Route>
        <Route path='/cart'>
      <Cart/>
        </Route>
        <Route path='*'>
      <Default/>
        </Route>
      </Switch>
      <Modal/>
    </Router>
   );
}
 
export default App;