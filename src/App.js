import React from "react";
import { BrowserRouter as Router, Switch, Route , Redirect } from "react-router-dom";
import { auth , createUserProfileDoc } from "./firebase/firebase";
import {connect} from "react-redux";
import setCurrentUser from "./redux/user/user-action"
import Homepage from "./page/homepage/homepage";
import Shop from "../src/page/shop/shop.component";
import Header from "../src/page/header/header.component";
import SignInSignUp from "../src/page/sign-in-sign-up/sign-in-sign-up.component";
import "./App.css";

class App extends React.Component {
  unsubsribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubsribeFromAuth = auth.onAuthStateChanged( async userAuth=> {
      if(userAuth){
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            id : snapShot.id,
            ...snapShot.data()
          });
        });
      };
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }
  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact component={Homepage} path="/" />
          <Route exact component={Shop} path="/shop" />
          <Route exact render={()=> this.props.currentUser? (<Redirect to="/"/>) : (<SignInSignUp/>) } path="/sign-in"  />
        </Switch>
      </Router>
    );
  }
};
const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
