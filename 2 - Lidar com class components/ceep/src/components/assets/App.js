import React, { Component } from 'react';
import FormularioCadastro from '../FormularioCadastro/';
import ListaDeNotas from '../ListaDeNotas/';
import './app.css'

class App extends Component {

  constructor() {
    super();
    this.notes = [];
    this.state = {
      notes:[]
    };
  }

  createNote(title, body) {
    const newNote = {title, body};
    const newStateArray = [...this.state.notes, newNote]
    const newState = {
      notes:newStateArray
    }
    this.setState(newState);
  }

  showNote(title, body) {

  }

  render() {
    return (
      <section>
        <h1 className = "app-name">.ander_notas 0.1</h1>
        <div className="content">
          <FormularioCadastro createNote = {this.createNote.bind(this)}/>
          <ListaDeNotas notes = {this.state.notes}/>
        </div>
      </section>
    );
  }
}

export default App;
