import React, {Component} from 'react';
import './Welcome.css';
class Welcome extends Component {
render() {
return (
<div className="row " id="Body">
<div className="medium-12 columns">
<h2 id="welcomeText">Interview - 2020/12/30</h2>
<a href="/login" className="button">Login</a>
</div>
</div>
);
}
}
export default Welcome;