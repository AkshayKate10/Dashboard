import "./App.css";
import { Provider } from "react-redux";
import { reduxstore } from "./Store/Store";
import Main from "./Components/Main";

function App() {
  return (
    <Provider store={reduxstore}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
