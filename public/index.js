import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './navbar';
import Home from './home';
import CreateAccount from './createaccount';
import Login from './login';
import Deposit from './deposit';
import Balance from './balance';
import Withdraw from './withdaw';
import AllData from './alldata';
import { UserContext } from './context';
import {Routes, Route, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const root = ReactDOM.createRoot(document.getElementById('root'));


export function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/createaccount" element={<CreateAccount/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/deposit" element={<Deposit/>} />
            <Route path="/withdraw" element={<Withdraw/>} />
            <Route path="/balance" element={<Balance/>} />
            <Route path="/alldata" element={<AllData/>} />
            <Route exact path="/" element ={<Home/>}/>
          </Routes>
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

console.log(Spa);
root.render(
  <Spa/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
