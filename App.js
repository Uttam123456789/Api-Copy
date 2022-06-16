
import Main from './component/Main';
import './App.css';
import AddTodo from './component/AddTodo';
// import Photo from './component/Photo';
// import Album from './component/Album';
import LogIn from './component/LogIn';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './component/User';
import Error from './component/Error';
import GlobalLogIn from './component/GlobalLogIn';
import Protected from './component/Protected';
import NavBar from './component/NavBar';
import Photo from './component/Photo';
import ViewPhoto from './component/ViewPhoto';



function App() {

  localStorage.setItem('isLogin', JSON.stringify([]));

  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<NavBar />} >
            <Route path="/AllUser" element={<AddTodo />} />
            <Route path="/login/:id" element={<LogIn />} />
            <Route path="/login" element={<GlobalLogIn />} />
            <Route path="/Dashboard/:id" element={<User />} />
            {/* <Route path="/Photo/:id" element={<Photo />} />  */}
            <Route path="/Photo/:id" element={<Protected photo={"photo"}/>} />


            <Route path="/Dashboard" element={<Protected dash={"dashboard"}/>} />
          </Route>
          {/* <Route path="/Photo/:name" element={<ViewPhoto />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
