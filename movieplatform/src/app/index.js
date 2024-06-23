import {BrowserRouter,Route, Routes} from "react-router-dom";

//import NavBar from "../component/shared/navbar/Index.js";
import Main from "../layouts/Main";
import Home from "../pages/home";
import Video from "../pages/video";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Main />} >
          <Route path="/" element={<Home />} />
          <Route path ="/video" element={<Video />} />
      </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;