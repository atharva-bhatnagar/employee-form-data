
import "./App.css"

function App() {
  
  
  return (
    <div className="App">
      <form>
        <h1>Login</h1>
        <label>
          Name:
          <input type="text"/>
        </label>
      
        <label>
          Email:
          <input type="email"/>
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
