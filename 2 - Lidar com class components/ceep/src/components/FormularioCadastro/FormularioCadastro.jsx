import React, { Component } from "react";
import './styles.css';

class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.title = "";
    this.body = "";
  }

  _handleChangeTitle(event) {
    this.title = event.target.value;
  }

  _handleChangeBody(event) {
    this.body = event.target.value;
  }

  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.body);
  }

  render() {
    return (
    <form className = "form"
      onSubmit= {this._createCard.bind(this)}
    >

      <input 
        type="text"
        placeholder="Título" 
        className = "form_body"
        onChange = {this._handleChangeTitle.bind(this)}
      />

      <textarea
        rows = {15}
        placeholder="Escreva sua nota"
        className = "form_body"
        onChange = {this._handleChangeBody.bind(this)}
      />

      <button
        className = "form_button">
          Criar nota
      </button>

    </form>
    );
  }
}

export default FormularioCadastro;