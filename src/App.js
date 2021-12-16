
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Viewdoctor from './Pages/Doctordetails/Viewdoctor/Viewdoctor';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Notfound from './Pages/Notfound/Notfound';
import AuthProvider from './Context/AuthProvider';

import Headerone from './Pages/Share/Headerone/Headerone';




function App() {
  return (
    <div className="App">      
      <AuthProvider>
      <Router>
       <Headerone></Headerone>
        <Switch>
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <Route path='/home'>
              <Home></Home>
          </Route>
          <Route path='/login'>
              <Login></Login>
          </Route>
          <Route path='/servics/:doctorview'>
              <Viewdoctor></Viewdoctor>
          </Route>
          <Route path='*'>
              <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
