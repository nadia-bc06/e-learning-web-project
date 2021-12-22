import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/config-store';
// import {BrowserRouter as Router , Routes , Route , Navigate, Link , Outlet, useParams, NavLink} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    {/* <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/myapps" element={<Navigate replace to="/learn"/>}>

      </Route>
      <Route path="/learn" element={<Learn/>}>
        <Route path="courses" element={<Courses/>}>
          <Route path=":courseid" element={<CourseId/>}/>
        </Route>
        <Route path="bundles" element={<Bundles/>}/>

      </Route>
      <Route path="/about" element={<About/>}/>


    </Routes>

    </Router> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// function Home() {
//   return (
//     <div>
//       <h1>This is home</h1>
//     </div>
//   )
// }

// function Learn() {
//   return (
//     <div>
//       <h1>This is Learn </h1>
//       <h3>All courses are listed here</h3>
//       <Link className='btn btn-success mr-2' to="/learn/courses">Courses</Link> 
//       <Link className='btn btn-primary' to="/learn/bundles">Bundles</Link>
//       <Outlet/>
//     </div>
//   )
// }

// function About() {
//   return (
//     <div>
//       <h1>This is About </h1>
//       <h3>Get to know more about us</h3>
//     </div>
//   )
// }

// function Courses() {
//   const coursesList = ['React', 'Angular', 'Vue', 'Node JS'];
//   const randomCourseName = coursesList[Math.floor(Math.random()*coursesList.length)];
//   return (
//     <div>
//       <h1>Courses List </h1>
//       <h3>Courses Card</h3>
//       <p>More test</p>
//       <NavLink style={({isActive})=>{
//         return{
//           backgroundColor: isActive ? "violet" : ""
//         }
//       }} to={`/learn/courses/${randomCourseName}`}>{randomCourseName}</NavLink>
//       <Outlet/>
//     </div>
//   )
// }

// function CourseId() {
//   const {courseid} = useParams();
//   return (
//     <div>
//       <h1>URL Params is: {courseid} </h1>
     
//     </div>
//   )
// }

// function Bundles() {
//   return (
//     <div>
//       <h1>Bundle List </h1>
//       <h3>Bundle Card</h3>
//     </div>
//   )
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
