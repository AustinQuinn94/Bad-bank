function CreateAccount() {
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);
  var [namestatus, setNamestatus] = React.useState('');
  var [emailstatus, setEmailstatus] = React.useState('');
  var [passwordstatus, setPasswordstatus] = React.useState('');

  //const firebaseConfig = {
  // apiKey: "AIzaSyBFRDNKaN1rPy5ieBXY-PWu7kOzY8RxjKk",
  //authDomain: "badbank-fe189.firebaseapp.com",
  // projectId: "badbank-fe189",
  //storageBucket: "badbank-fe189.appspot.com",
  //messagingSenderId: "436410500469",
  //appId: "1:436410500469:web:21a547c60da10c0b007f3c",
  //measurementId: "G-YKSB6CYY2Y"
  //};
  //if (firebase.apps.length === 0) {
  //firebase.initializeApp(firebaseConfig)
  //}


  function handle() {
    event.preventDefault();

    console.log(name, email, password);
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
      var res = await fetch(url);
      
      var data = await res.json();
      console.log(data);

      if(typeof data.success !== "undefined" && data.success === false) {
        setPasswordstatus(data.error.message)
      } else {
        ctx.currentuser = {"name": name, "email": email};
        console.log(ctx);

        
        clearForm();
        window.alert("Account created. Click ok to create another account");
      }
    })();
 
  };

  function validate(field) {
    if (!field) {
      //setStatus('Error: ' + label);
      //setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  };

  function checkValid() {
    //console.log(name, email, password);
    if (checkName() && checkEmail() && checkPassword()) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setButtonDisabled(true);
  };

  useEffect(() => {
    checkValid();
    checkName();
    checkEmail();
    checkPassword();
  }, [name, email, password]);

  function checkName() {
    if (validate(name)) {
      setNamestatus("");
      return true;
    } else {
      setNamestatus('Please input a valid name');
      return false;
    }
  };

  function checkEmail() {
    if (validate(email)) {
      setEmailstatus('');
      return true;
    } else {
      setEmailstatus('Please input a valid email');
      return false;
    }
  };


  function checkPassword() {
    if (password.length < 8) {
      setPasswordstatus('Please input a valid password of 8 characters or longer')
      return false;
    } else {
      setPasswordstatus("Password accepted")
      return true;
    }
  };

  return (
    <Card
      txtcolor="black"
      header="Create your account"
      body={!ctx.currentuser?(
        <div>
          <form>
            <div class="form-group">
              <label for="enter username">Enter Username</label>
              <input type="username" class="form-control" id="name" aria-describedby="usernameHelp" placeholder="Enter username" value={name} onChange={e => { setName(e.target.value) }} />
              <small id="usernameHelp" class="form-text text-muted">{namestatus}</small>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={e => { setEmail(e.target.value) }} />
              <small id="emailHelp" class="form-text text-muted">{emailstatus}</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={e => { setPassword(e.target.value) }} />
              <small id="passwordHelp" class="form-text text-muted">{passwordstatus}</small>
            </div>
            <button type="submit" class="btn btn-primary" disabled={buttonDisabled} onClick={e => handle()}>Create Account</button>
          </form>
        </div>
      ):<div>
        <label>There is currently a logged in user! Please log out to create new accounts.</label>
      </div>
    }
    />
  )
}