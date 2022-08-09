import logo from './logo.svg';
import './styles/App.css';
import VerifyForm from './components/VerifyForm';


function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
      </header>
      <body>
        <VerifyForm>
        </VerifyForm>
      </body>
      <footer />
    </div>
  );
}

export default App;
