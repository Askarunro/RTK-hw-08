import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ContactForm from "../components/ContactForm";
import { useUpdateMaterialMutation, useGetContactsQuery } from "..//redux/api/contactsApi";

import { useSelector, useDispatch } from 'react-redux';



export default function ContactView() {
  // const { id } = useParams();
  // const [cont, setCont] = useState();
  // const [contacts] = useUpdateMaterialMutation();
  // const { data: allContacts } = useGetContactsQuery();

  // useEffect(() => {
  //   if (allContacts) {
  //     allContacts.find((contact) => {
  //       if (contact.id === id) {
  //         setCont(contact);
  //       }
  //     });
  //   }
  // }, [allContacts]);

  // return <div>{cont && <ContactForm btnTitle={`Update Contact`} contName={cont.name} contNumber={cont.number} addContact={contacts} id={id} />}</div>;




  
return <></>
}
