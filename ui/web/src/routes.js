import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';
import Login from '././components/Login/Login';
import NotFound from '././components/NotFound/NotFound';

//routes
const Routes = () => (
<BrowserRouter >
<Switch>
<Route exact path="/" component={Welcome}/>
<Route path="/home" component={Home}/>
<Route path="/login" component={Login}/>
<Route path="*" component={NotFound}/>
</Switch>
</BrowserRouter>
);
export default Routes;


export function PostData(type, userData) {
    
//base URL
let BaseURL = 'http://localhost/bizlogic/api/index.php';
return new Promise((resolve, reject) =>{

fetch(BaseURL+'?tp='+type,
{

method: 'POST', //sends data
headers:
{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body:JSON.stringify(userData)
    })
    .then((response) => response.json()
    .then((res) => {
    resolve(res);
    }))
    .catch((error) => {
    reject(error);
    });
    });
}