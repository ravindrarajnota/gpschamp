// export default handleClick(event){
//   var apiBaseUrl = "http://localhost:4000/api/";
//   var self = this;
//   var payload={
//   "email":this.state.username,
//   "password":this.state.password
//   }
//   alert(payload.email);
//   alert(payload.password);
  // axios.post(apiBaseUrl+'login', payload)
  // .then(function (response) {
  // console.log(response);
  // if(response.data.code == 200){
  // console.log("Login successfull");
  // var uploadScreen=[];
  // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
  // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
  // }
  // else if(response.data.code == 204){
  // console.log("Username password do not match");
  // alert("username password do not match")
  // }
  // else{
  // console.log("Username does not exists");
  // alert("Username does not exist");
  // }
  // })
  // .catch(function (error) {
  // console.log(error);
  // });
// }
 