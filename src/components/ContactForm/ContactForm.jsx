import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {FormContainer, FormLabel, FormInput, Button, FormText} from './ContactForm.styled'

class ContactForm extends Component {
  state = {
    name: '',
    number:'',
  };
  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget
    this.setState({
      [name]: value
    })
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();

  }

  reset = () => {
    this.setState({ name: '', number: '' })
  };

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <FormText>Phonebook</FormText>
        <FormLabel htmlFor={this.nameInputId}>
          Name
          <FormInput
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputId}

          />
        </FormLabel>
        <FormLabel htmlFor={this.numberInputId}>
          Number
          <FormInput
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberInputId}
          />
        </FormLabel>
        <Button type='submit'>Add contact</Button>
      </FormContainer>
    )
  };
}


export default ContactForm
