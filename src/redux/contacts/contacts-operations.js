import axios from "axios";
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  patchContactsRequest,
  patchContactsSuccess,
  patchContactsError,
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

const addContacts = (values) => async (dispatch) => {
  dispatch(addContactsRequest());
  axios
    .post("/contacts", values)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch((error) => dispatch(addContactsError(error.message)));
};

const updateContacts =
  ({ name, number, id }) =>
  async (dispatch) => {
    const contact = { name, number };
    dispatch(patchContactsRequest());
    axios
      .patch(`/contacts/${id}`, contact)
      .then(({ data }) => dispatch(patchContactsSuccess(data)))
      .catch((error) => dispatch(patchContactsError(error.message)));
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
  updateContacts,
  deleteContacts,
};
export default contactsOperations;
