import { Component } from 'react';
import s from './ContactForm.module.css';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.handleOnFormSubmit({ name, number });

    this.inputReset();
  };
  inputReset = () => this.setState({ name: '', number: '' });

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.border} onSubmit={this.handleOnSubmit}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
