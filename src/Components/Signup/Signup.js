import React,{ useState , useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';

export default function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const {firebase} = useContext(FirebaseContext)

  const history = useHistory();

  const handleSubmit = (e)=>{

    e.preventDefault();
  
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((response) =>{

        console.log(response);
        
        response.user.updateProfile({ displayName : name })
          .then((a) => {
          
            console.log(a);
            firebase.firestore().collection('users').add({

              id : response.user.uid,
              name , phone

            })
              .then((b)=>{

                console.log("reached redirect");
                history.push('/login')


            })
            
              .catch((err) => {

                console.error(err);
                alert(err.message);


              })

        })

          .catch((err) => {

              console.error(err);
              alert(err.message);


          })

    })
      .catch((err) => {

        console.error(err);
        alert(err.message);


      })

  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit= { handleSubmit } >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={name}
            onChange ={ (e) => { setName(e.target.value) } }
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={ (e)=>{ setEmail(e.target.value) } }
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={ (e)=>{ setPhone(e.target.value) } }
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={ (e)=>{ setPassword(e.target.value) } }
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
