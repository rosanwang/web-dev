import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter/";
import ExploreComponent from "./components/tuiter/ExploreScreen/ExploreComponent";
import HomeScreen from "./components/tuiter/home-screen"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
// no .js extension needed

function App() {

  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello"
                         exact={true}
                         element={<HelloWorld/>}/>
                  <Route path="/"
                         exact={true}
                         element={<Labs/>}/>
                  <Route path="/tuiter"
                         exact={true}
                         element={<Tuiter/>}>
                      <Route index element={<HomeScreen/>}/>
                      <Route path="explore" element={<ExploreComponent/>}/>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}


export default App;
