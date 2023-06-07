import "./App.css";
import HandleUseEffect from "./Component/ReactHooks/HandleUseEffect/HandleUseEffect";
import Usememo from "./Component/ReactHooks/HandleUseMemo/Usememo";
import UseReducerThree from "./Component/ReactHooks/HandleUsereducer/UseReducerThree";
import Home from "./Component/reduxStore/Home";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      {/* <Provider>
        <Home />
      </Provider> */}
      <HandleUseEffect/>
    </div>
  );
}

export default App;
