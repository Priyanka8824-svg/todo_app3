import './App.css';

import Todo from "./compoent/Todo"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <div className="App">
      
      <h1 style={{color:'yellowgreen', textAlign:'center', textDecoration:'underline'}}>Todo App In React</h1>

      <Todo/>

    </div>
  );
}

export default App;
