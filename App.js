
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



function App() {
    localStorage.setItem('check', false);
    
    localStorage.setItem('isLogin',null);
      
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<AddTodo />} />
          <Route path="/login/:id" element={<LogIn />} />
          <Route path="/login" element={<GlobalLogIn />} />
          <Route path="/Dashboard" element={ <User/>}/>
          {/* <Route path="/Dashboard" element={ <Protected Component={User} />}/> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
