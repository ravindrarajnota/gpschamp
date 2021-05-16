import React, { Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();
import './App.css';
import Loginscreen from './containers/LoginScreen';
import { SUBDOMAIN } from './constants/index'
import Header from './Components/Header'
import { getSubDomain } from './utils/others';

// import background from './images/photo-1603638725135-928baf863eff.jpg'
// import {
//   useParams
// } from "react-router-dom";
import qs from 'query-string';

const CONFIG = {
  [SUBDOMAIN.TEST]: {
    PHONE: '9828544446',
    EMAIL: 'ravindra@mailinator.com',
    BACKGROUND_COLOR: '#fff',
    LOGO_IMAGE: './images/login-background.jpg',
    BACKGROUND_IMAGE: './images/login-background.jpg'
  },
  [SUBDOMAIN.NEW]: {
    PHONE: '8585747475',
    EMAIL: 'new@mailinator.com',
    BACKGROUND_COLOR: '#000',
    LOGO_IMAGE: './images/photo-1603638725135-928baf863eff.jpg',
    BACKGROUND_IMAGE: './images/photo-1603638725135-928baf863eff.jpg',
  }
}
// alert(background);
class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[],
      SUBDOMAIN_DATA: CONFIG[SUBDOMAIN.NEW]
    }
  }

  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Header parentContext={this}/>);
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })

        // var queryParams = qs.parse(window?.location?.search);
        // console.log(queryParams);
        // alert(queryParams?.id)
    const queryParams = qs.parse(window?.location?.search);
    // alert(queryParams?.id)
    const initSubDomain = getSubDomain(queryParams?.id);
    // alert(initSubDomain);
    this.setState({
      SUBDOMAIN_DATA:CONFIG[initSubDomain]
    })
    // const [subdomain, setSubDomain] = useState(initSubDomain);
        
                                  
  }
  render() {

    return (
      <div className="App"  style={{ backgroundImage: `url(${this.state.SUBDOMAIN_DATA.BACKGROUND_IMAGE})` }}>
        {this.state.Header}
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default App;