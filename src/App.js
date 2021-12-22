import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route , useParams } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Courses from "./pages/Courses/Courses";



function App() {
  return (
    <Router>
      <GlobalStyles>
      <div className="App">
        <Header/>
      
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/courses" element={<Courses/>}>
                <Route path=":maDanhMuc" element={<CourseId/>} />
            </Route>
            <Route path="/sign-in" element={<SignIn/>}></Route>
            <Route path="/sign-up" element={<SignUp/>} ></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
          <Footer/>
      </div>
    </GlobalStyles>
  </Router> 
  );  
 
}

function CourseId() {
  const {maDanhMuc} = useParams();
  return (
    <div>This is course : {maDanhMuc} </div>
  ) 
}

export default App;
