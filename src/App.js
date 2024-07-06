
import './App.css';
import Employee  from './components/employee';
function App() {
  console.log("we are about to display the employees");
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees?<Employee/>:<p>"No Employees to display"</p>}
      <header className="App-header">
       
        <p>
        Hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
