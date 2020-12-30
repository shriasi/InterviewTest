import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
import {PostData} from '../../services/PostData';
import UserFeed from "../UserFeed/UserFeed";
import '../../styles/react-confirm-alert.css';

class Home extends Component {

//constructor
constructor(props) {
super(props);

this.state = {
data:[],
userFeed: '',
redirectToReferrer: false,
name:'',
};

this.getUserFeed = this.getUserFeed.bind(this);
this.onChange = this.onChange.bind(this);
this.logout = this.logout.bind(this);
}

componentWillMount() {

if(sessionStorage.getItem("userData")){
this.getUserFeed();
}

else{
this.setState({redirectToReferrer: true});
}

}

// function to retrieve the user details as a feed
getUserFeed() {

let data = JSON.parse(sessionStorage.getItem("userData"));
this.setState({name:data.userData.name});
let postData = { id: data.userData.id};

if (data) {
PostData('feed', postData).then((result) => {
let responseJson = result;
if(responseJson.feedData){
this.setState({data: responseJson.feedData});
console.log(this.state);
}
});
}

}

//session management
onChange(e){
this.setState({userFeed:e.target.value});
}
logout(){
sessionStorage.setItem("userData",'');
sessionStorage.clear();
this.setState({redirectToReferrer: true});
}

render() {
if (this.state.redirectToReferrer) {
return (<Redirect to={'/login'}/>)
}

return (
<div className="row" id="Body">
<div className="medium-12 columns">
<a href="#" onClick={this.logout} className="logout">Logout</a>
<form onSubmit={this.feedUpdate} method="post">
<input name="userFeed" onChange={this.onChange} value={this.state.userFeed} type="text" placeholder="Write your feed here..."/>
<input
type="submit"
value="Post"
className="button"
onClick={this.feedUpdate}/>
</form>

</div>
<UserFeed feedData = {this.state.data} deleteFeed = {this.deleteFeed} name={this.state.name}/>

</div>
);
}
}

export default Home;