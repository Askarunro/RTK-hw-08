import axios from "axios";
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./contacts-actions";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContacts = (name, number) => async (dispatch) => {
  const contact = { name, number };

  dispatch(addContactsRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch((error) => dispatch(addContactsError(error.message)));
};

const deleteContacts = (contactId) => async (dispatch) => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactsSuccess(contactId)))
    .catch((error) => dispatch(deleteContactsError(error.message)));
};

const contactsOperations = {
  fetchContacts,
  addContacts,
  deleteContacts,
};
export default contactsOperations;
