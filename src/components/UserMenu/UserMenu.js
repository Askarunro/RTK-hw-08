import { Button, Grid } from "@mui/material";
import { useGetUsersQuery, useLogoutUserMutation } from "..//../redux/api/usersApi";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import l from "../Layout/Layout.module.css";



import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';


function UserMenu() {
  // const [logoutUser] = useLogoutUserMutation();
  // const { data: user } = useGetUsersQuery();
  // let navigate = useNavigate();

  // const logoutClick = async () => {
  //   const res = await logoutUser();
  //   // await navigate("/users/login", { replace: true });
  //   try {
  //   return 

  //   } catch {}
  // };

  // const handleClick = (e) => {
  //   localStorage.setItem("token", JSON.stringify(""));
  //   logoutClick();
  //   navigate("/", { replace: true });
  // };

  // return (
  //   <Grid container direction="row" justifyContent="space-between" alignItems="center" gap={4}>
  //     {user && <h3>{user.email}</h3>}
  //     <Button onClick={handleClick} variant="contained" color="success" className={l.nav}>
  //       <Logout />
  //       LogOut
  //     </Button>
  //   </Grid>
  // );

  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" gap={4}>
      {name && <h3>{name}</h3>}
      <Button onClick={() => dispatch(authOperations.logOut())} variant="contained" color="success" className={l.nav}>
        <Logout />
        LogOut
      </Button>
    </Grid>
  );
}

export default UserMenu;
