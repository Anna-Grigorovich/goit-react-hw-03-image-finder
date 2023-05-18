import React, { Component } from 'react';
import { toast } from 'react-toastify';
import c from './Searchbar.module.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    input: '',
  };
  handleChange = e => {
    const input = e.target.value;
    this.setState({ input });
  };

  handleSubmit = e => {
    const { formSubmit } = this.props;
    e.preventDefault();
    if (this.state.input.trim() === '') {
      toast.warning('Строка пуста, не балуйся');
      return;
    }
    formSubmit(this.state.input.trim().toLowerCase());
  };
  render() {
    return (
      <header className={c.searchbar}>
        <form className={c.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={c.button}>
            <span className={c.label}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className={c.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};
