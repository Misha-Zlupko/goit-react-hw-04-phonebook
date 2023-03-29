import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  // this.props.onSubmmit

  state = {
    name: '',
    number: '',
  };

  hendlesubmit = ivent => {
    ivent.preventDefault();
    this.props.onSubmmit(this.state);
    console.log(this.props.onSubmmit(this.state));
  };

  hendleChenge = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <p>Name</p>
        <form onSubmit={this.hendlesubmit}>
          <input
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.hendleChenge}
          />
          <p>Number</p>
          <input
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.hendleChenge}
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
ContactForm.propTypes = {
  onSubmmit: PropTypes.string.isRequired,
};
