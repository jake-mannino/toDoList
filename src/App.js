import shrecc512A from './shrecc512A.svg';
import './App.css';
import ToDoList from './components/toDoList';
export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={shrecc512A} className="App-logo" alt="logo" />
        <br>
        </br>
        <div>
          <ToDoList/>
        </div>
      </header>
    </div>
  );
}

export default App;
