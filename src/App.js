import './App.css';
import { Table } from './components/Table';

localStorage.setItem('role', "viewer");

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
