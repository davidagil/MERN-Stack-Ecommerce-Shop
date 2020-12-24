import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';
import UserListPage from './pages/UserListPage';
import UserEditPage from './pages/UserEditPage';
import ProductListPage from './pages/ProductListPage';
import ProductEditPage from './pages/ProductEditPage';
import OrderListPage from './pages/OrderListPage';

const App = () => {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={Homepage}/>
          <Route path='/search/:keyword' component={Homepage}/>
          <Route exact path='/page/:pageNumber' component={Homepage}/>
          <Route exact path='/search/:keyword/page/:pageNumber' component={Homepage}/>
          <Route path='/product/:id' component={ProductPage}/>
          <Route path='/cart/:id?' component={CartPage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/register' component={RegisterPage}/>
          <Route path='/profile' component={ProfilePage}/>
          <Route path='/shipping' component={ShippingPage}/>
          <Route path='/payment' component={PaymentPage}/>
          <Route path='/placeorder' component={PlaceOrderPage}/>
          <Route path='/order/:id' component={OrderPage}/>
          <Route path='/admin/userlist' component={UserListPage}/>
          <Route path='/admin/user/:id/edit' component={UserEditPage}/>
          <Route exact path='/admin/productlist' component={ProductListPage}/>
          <Route exact path='/admin/productlist/:pageNumber' component={ProductListPage}/>
          <Route path='/admin/product/:id/edit' component={ProductEditPage}/>
          <Route path='/admin/orderlist' component={OrderListPage} />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
