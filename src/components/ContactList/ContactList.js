import Item from "../ContactListItem";
import l from "./ContactList.module.css";


import { useSelector } from 'react-redux';


// function List({ state }) {
//   return (
//     <ul className={l.list}>
//       <Item state={state} />
//     </ul>
//   );
// }

function List() {
  const filters = useSelector(state =>state.filter);
  const contacts = useSelector(state=>state.contacts.items);
  const normalizeFilter = filters.toLowerCase();
const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
console.log(contacts)
  return (
    <ul className={l.list}>
      <Item />
    </ul>
  );
}

export default List;
