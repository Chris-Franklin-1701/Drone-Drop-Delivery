import './styles/App.css';
import AddressForm from './components/AddressFrom';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className='logo'>Drone Drop Delivery Service</h1>
      </header>
      <AddressForm />
      <Footer />
    </div>
  );
}

export default App;
