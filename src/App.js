import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div >
        <Head />
        <Body />
        {/* * Header
      * Body
         -Side bar
         - Menu Items
      * Main Container
         - Button list
         - Video Container(Video card)
      * */}

      </div>
    </Provider>
  );
}

export default App;
