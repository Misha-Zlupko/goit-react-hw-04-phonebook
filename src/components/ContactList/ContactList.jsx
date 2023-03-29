import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeliteTodo }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ name, number }) => (
          <li key={name}>
            <p>
              {name}: {number}
            </p>
            <button onClick={() => onDeliteTodo(name)}>Delite</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeliteTodo: PropTypes.string.isRequired,
};
