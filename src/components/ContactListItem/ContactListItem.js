import i from "./ContactListItem.module.css";
// import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDeleteContactMutation, useGetContactsQuery } from "..//../redux/api/contactsApi";
import { Button, ListItem } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import { useEffect } from "react";


import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors, changeFilter } from '../../redux/contacts';


function Item(state) {
// const token = useSelector((state) => state.token);

//   const filter = useSelector((state) => state.filter);
//   const [deleteContact] = useDeleteContactMutation();
//   const { data: contacts, refetch } = useGetContactsQuery();

// console.log(contacts)

//   useEffect(() => {
//     refetch();
//   }, [state]);

//   async function handleSubmit(id) {
//     await deleteContact(id);
//     await refetch();
//   }

// return (
//   <>
//     {contacts &&
//       contacts
//         .filter((option) => option.name.toLowerCase().includes(filter.toLowerCase()))
//         .map((contact) => (
//           <ListItem key={contact.name} className={i.item} data-id={contact.name}>
//             <NavLink to={`/contacts/${contact.id}`} className={i.link}>
//               <p>name: {contact.name}:</p>
//               <p>number: {contact.number}</p>
//             </NavLink>
//             <Button type="button" onClick={() => handleSubmit(contact.id)} className={i.btn} variant="outlined" color="error" size="large">
//               <DeleteForever />
//             </Button>
//           </ListItem>
//         ))}
//   </>
// );

const dispatch = useDispatch();
const contacts = useSelector(state=>state.contacts.items);
console.log('contacts', contacts)

const filter = useSelector((state) => state.filter);
console.log(filter)

  return (
    <>
      {contacts &&
        contacts
          .filter((option) => option.name.toLowerCase().includes(filter.toLowerCase()))
          .map((contact) => (
            <ListItem key={contact.name} className={i.item} data-id={contact.name}>
              <NavLink to={`/contacts/${contact.id}`} className={i.link}>
                <p>name: {contact.name}:</p>
                <p>number: {contact.number}</p>
              </NavLink>
              <Button type="button" onClick={e => dispatch(changeFilter(e.target.value))} className={i.btn} variant="outlined" color="error" size="large">
                <DeleteForever />
              </Button>
            </ListItem>
          ))}
    </>
  );
}

export default Item;
