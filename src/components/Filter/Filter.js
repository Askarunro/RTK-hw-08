import l from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { searchContact } from "..//../redux/reduce/filter";

function Filter() {
  const dispatch = useDispatch();
  const onChangeInputFind = (e) => {
    dispatch(searchContact(e.currentTarget.value));
  };
  return (
    <label className={l.label}>
      Find contacts by name
      <input type="text" onChange={onChangeInputFind} />
    </label>
  );
}

export default Filter;
