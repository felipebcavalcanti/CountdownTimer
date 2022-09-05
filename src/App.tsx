import { GlobalStyles } from "../global";
import { Router } from "./Routes";
import { BrowserRouter} from "react-router-dom"

  

function App() {
 

  return (
    <>
     
      <BrowserRouter>
        <Router />
      </BrowserRouter>
       
    <GlobalStyles />
       
    </>

  );
};

export default App
