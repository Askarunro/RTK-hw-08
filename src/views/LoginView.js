import { useState, useEffect } from "react";
import { useLoginUserMutation } from "..//redux/api/usersApi";
import { TextField, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { myToken } from "..//redux/reduce/filter";



import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';


const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

export default function LoginView() {

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [loginUser] = useLoginUserMutation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [token, setToken] = useState("");

//   useEffect(() => {
//     localStorage.setItem("token", JSON.stringify(token));
//     if(token && token!==''){
//       dispatch(myToken(token));
//       navigate("/contacts", { replace: true });
//     }
//   }, [token]);

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case "email":
//         return setEmail(value);
//       case "password":
//         return setPassword(value);
//       default:
//         return;
//     }
//   };

//   const formSubmitHandler = async (values) => {
//     const res = await loginUser(values);
//     if(res){
//       setToken(res.data.token);
// // console.log('ggdsgdsgsd')
// //       console.log(token)
//       // navigate("../login", { replace: true });
//     }
     
//     try {
    
//       // if (res.data.token) {
//       //   await setToken(res.data.token);
//       //   navigate("/contacts", { replace: true });
//       // }
//       // alert(`Error status ${res.error}, message: not found email or password`);
//     } catch {
//       // alert(`Error status ${res.error}, message: not found email or password`);
//       alert('gsdgdsgsdgs')
//     }
//   };

//   const reset = () => {
//     setEmail("");
//     setPassword("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     formSubmitHandler({ email, password });
//     reset();
//   };






const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };



  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <Grid container direction="column" justifyContent="space-between" alignItems="center" gap={4}>
          <h1>Login page</h1>
          <TextField required label="Email" type="email" name="email" value={email} onChange={handleChange} />
          <TextField required label="Password" type="password" name="password" value={password} onChange={handleChange} />
          <Button type="submit" variant="outlined" color="success" size="large">
            Ok
          </Button>
        </Grid>
      </form>
    </div>
  );
}
