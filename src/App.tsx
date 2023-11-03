import { BrowserRouter } from "react-router-dom";
import RoutesContainer from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <RoutesContainer />
    </BrowserRouter>
  );
}

export default App;
