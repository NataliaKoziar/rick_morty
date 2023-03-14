import {Routes, Route} from "react-router-dom"
import './App.css';
import { CharactersPage } from "./components/CharactersPage/CharacterPage";
import { HomePage } from "./components/home_page/HomePage";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path={"/"}  element = {<HomePage/>}/>
      <Route path={"/characters/:id"}  element = {<CharactersPage/>}/>
     </Routes>
    </div>
  );
}

export default App;


