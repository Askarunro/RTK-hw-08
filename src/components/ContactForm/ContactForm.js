// import f from "./ContactForm.module.css";
// import { useState } from "react";
// // import { useGetContactsQuery } from "..//../redux/api/contactsApi";
// import contactsOperations from '../../redux/contacts/contacts-operations'
// import { getContacts } from '../../redux/contacts/contacts-selectors';


// import { useSelector, useDispatch } from 'react-redux';



import f from "./ContactForm.module.css";
// import { useGetContactsQuery } from "..//../redux/api/contactsApi";

import { useState, useEffect } from "react";
import { getContacts } from '../../redux/contacts/contacts-selectors';

import { useSelector, useDispatch } from 'react-redux';

import { contactsOperations, contactsSelectors, changeFilter, fetchContactsSuccess } from '../../redux/contacts';

import { useParams } from "react-router";

import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';






function FormContact({ btnTitle, contName = "", contNumber = "", id}) {
  // const {id}  = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addContact(values){
    dispatch(contactsOperations.addContacts(values))
}
  
  function updateContacts(values){
    dispatch(contactsOperations.updateContacts(values))
  }

  const [name, setName] = useState(contName);
  const [number, setNumber] = useState(contNumber);

  const contacts = useSelector(getContacts);
  // const { data: contacts } = useGetContactsQuery();

  const onChangeInput = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
        default: return;
    }
  };

  const formSubmitHandler = (values) => {
    let exist = false;

    if (contacts.length >= 0) {
      contacts.forEach((contact) => {
        if (contact.name.toLowerCase() === values.name.toLowerCase()) {
          exist = true;
        }
      });
    }
    if (!exist && !id) {
      return addContact(values);
    }
    if (!exist && id) {
      return updateContacts(values);
    } else alert(`${values.name} is already i contacts`);
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    formSubmitHandler({ name, number, id });
    reset();
    if(id){
      navigate("/contacts", { replace: true });
    }
  };

  return (

    <form onSubmit={onSubmitForm} className={f.form}>
      <label className={f.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeInput}
        />
      </label>
      <label className={f.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInput}
        />
      </label>

      <button type="submit" className={f.btn}>{btnTitle}</button>
    </form>
  );
}

export default FormContact;




// function Form({ btnTitle, contName = "", contNumber = "", addContact, id , updateList}) {
//   const [name, setName] = useState(contName);
//   const [number, setNumber] = useState(contNumber);

//   const contacts = useSelector(state=>state.contacts.items);
//   console.log('contacts', contacts)


//   // const { data: contacts } = useGetContactsQuery();

//   const onChangeInput = (e) => {
//     const { name, value } = e.currentTarget;

//     switch (name) {
//       case "name":
//         setName(value);
//         break;
//       case "number":
//         setNumber(value);
//         break;
//         default: return;
//     }
//   };

//   const formSubmitHandler = async (values) => {
//     let exist = false;
//     if (contacts.length >= 0) {
//       contacts.forEach((contact) => {
//         if (contact.name.toLowerCase() === values.name.toLowerCase()) {
//           exist = true;
//         }
//       });
//     }
//     if (!exist) {
//       return await addContact(values);
//     }
//     if (exist && id) {
//       return await addContact(values);
//     } else alert(`${values.name} is already i contacts`);
//   };

//   const reset = () => {
//     setName("");
//     setNumber("");
//   };

//   const onSubmitForm = (e) => {
//     e.preventDefault();
//     formSubmitHandler({ name, number, id });
//     updateList()
//     reset();
//   };

//   return (
//     <form onSubmit={onSubmitForm} className={f.form}>
//       <label className={f.label}>
//         Name
//         <input
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={onChangeInput}
//         />
//       </label>
//       <label className={f.label}>
//         Number
//         <input
//           type="tel"
//           name="number"
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={onChangeInput}
//         />
//       </label>

//       <button type="submit">{btnTitle}</button>
//     </form>
//   );
// }

// export default Form;
