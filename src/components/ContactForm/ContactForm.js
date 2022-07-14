import f from "./ContactForm.module.css";
import { useState } from "react";
import { useGetContactsQuery } from "..//../redux/api/contactsApi";
import contactsOperations from '../../redux/contacts/contacts-operations'
import { getContacts } from '../../redux/contacts/contacts-selectors';

// function Form() {

//   return (
//     <></>
//   );
// }


function Form({ btnTitle, contName = "", contNumber = "", addContact, id , updateList}) {
  const [name, setName] = useState(contName);
  const [number, setNumber] = useState(contNumber);
  const { data: contacts } = useGetContactsQuery();

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

  const formSubmitHandler = async (values) => {
    let exist = false;
    if (contacts.length >= 0) {
      contacts.forEach((contact) => {
        if (contact.name.toLowerCase() === values.name.toLowerCase()) {
          exist = true;
        }
      });
    }
    if (!exist) {
      return await addContact(values);
    }
    if (exist && id) {
      return await addContact(values);
    } else alert(`${values.name} is already i contacts`);
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    formSubmitHandler({ name, number, id });
    updateList()
    reset();
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

      <button type="submit">{btnTitle}</button>
    </form>
  );
}

export default Form;
