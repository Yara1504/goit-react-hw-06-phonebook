import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => (state.filter ? state.filteredContacts : state.contacts));

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <div className={css.div}>
            <div>
              <p className={css.name}>{name}: </p>
            </div>
            <div>
              <p className={css.name}>{number}</p>
            </div>
            <button type="button" onClick={() => dispatch(deleteContact(id))} className={css.button}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
