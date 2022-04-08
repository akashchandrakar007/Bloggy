import React,{useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './components/pages/single/Single';
import Write from './components/pages/write/Write';
import Settings from './components/pages/settings/Settings';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import {Context} from './components/context/Context';



const App=()=>{
  const {user}=useContext(Context);
  return (
    <Router>
       <TopBar />
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/register" component={user?Home:Register}/>
          <Route exact path="/login" component={user?Home:Login}/>
          <Route exact path="/write" component={user?Write:Register}/>
          <Route exact path="/settings" component={user?Settings:Register}/>
          <Route exact path="/post/:postId" component={Single}/>
       </Switch>
    </Router>
  );
}

export default App;
