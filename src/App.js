import './styles/App.css';
import VerifyForm from './components/VerifyForm';
import Footer from './components/Footer';
import drone from './assets/images/drone.jpg';


function App() {
  return (
    <div className="App">
      <header className="header">
        <p className="container m-0 text-left">
          Drone Drop Delivery Service
        </p>
        <img src={drone} className="logo" alt='logo'/>
      </header>
      <VerifyForm>
      </VerifyForm>
      <Footer />
    </div>
  );
}

export default App;
