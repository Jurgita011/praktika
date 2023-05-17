import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import './buttons.scss';
import './App.scss';
import ListAccounts from './components/ListAccounts';
import NewAccounts from './components/NewAccounts';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NewAccounts/>
       <ListAccounts>/</ListAccounts>
     
      </header>
    </div>
  );
}

export default App;
