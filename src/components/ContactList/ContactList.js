import Item from "../ContactListItem";
import l from "./ContactList.module.css";

// function List({ state }) {
//   return (
//     <ul className={l.list}>
//       <Item state={state} />
//     </ul>
//   );
// }

function List() {

  return (
    <ul className={l.list}>
      <Item />
    </ul>
  );
}

export default List;
