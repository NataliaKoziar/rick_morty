import {Routes, Route} from "react-router-dom"
import './App.css';
import { CharactersPage } from "./components/CharactersPage/CharacterPage";
import { HomePage } from "./components/home_page/HomePage";
import { LoginComponent } from "./components/signIn/LoginComponent";
import { SignUpComponent } from "./components/signUp/SignUpComponent";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path={"/"}  element = {<HomePage/>}/>
      <Route path={"/characters/:id"}  element = {<CharactersPage/>}/>
      <Route path={"/login"} element={<LoginComponent/>}/>
      <Route path={"/signup"} element={<SignUpComponent/>}/>
     </Routes>
    </div>
  );
}

export default App;


