//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Create2 from './Create2';
import Slide from './Slide';
import Coupon from './Coupon';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Slide />
      <h1 className='toppics'>Top Picks For You</h1>
      <Create2 />
      <Coupon />
      <Footer />
    </div>

  );
}

export default App;
