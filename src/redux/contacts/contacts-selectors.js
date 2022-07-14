export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getVisibleContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
};

const contactsSelectors = {
  getContacts,
  getFilter,
  getVisibleContacts,
};
export default contactsSelectors;
