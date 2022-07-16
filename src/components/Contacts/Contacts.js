import c from "./Contacts.module.css";
import { useAddContactMutation } from "..//..//redux/api/contactsApi";
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList/";
import { Grid, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

function Contacts() {
  useEffect(()=>{
    
  },[])
  

  // const contacts = useSelector(state=>console.log(state));
  
  const filter = useSelector((state) => state.filter);

  // const [state, setState] = useState(false);
  // const [addContact] = useAddContactMutation();

  // const updateList = () => {
  //   setState(!state);
  // };

  // return (
  //   <Container>
  //     <h1>Phonebook</h1>
  //     <Grid container direction="row" justifyContent="start" alignItems="start" gap={12}>
  //       <Grid>
  //         <h2>Contacts list</h2>
  //         <Filter />
  //         {/* <ContactList state={state} /> */}
  //         <ContactList/>
  //       </Grid>
  //       <Grid>
  //         <h2 className={c.title}>New contact</h2>
  //         <ContactForm btnTitle={`Add contact`} addContact={addContact} updateList={updateList} />
  //       </Grid>
  //     </Grid>
  //   </Container>
  // );


  return (
    <Container>
      <h1>Phonebook</h1>
      <Grid container direction="column" justifyContent="center" alignItems="center" gap={12}>
          <h2 className={c.title}>New contact</h2>
          <ContactForm btnTitle={`Add contact`}/>
        </Grid>
      <Grid container direction="column" justifyContent="center" alignItems="center" gap={12}>
        <Grid>
          <Filter />
          <h2>Contacts list</h2>
          {/* <ContactList state={state} /> */}
          <ContactList/>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Contacts;
