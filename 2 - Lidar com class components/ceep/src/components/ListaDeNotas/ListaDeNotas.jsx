import React, { Component } from "react";
import CardNota from "../CardNota/";
import './styles.css';

class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notes.map((note, index) => {
          return (
            <div className="lista-notas_item" key={index}>
              {/* <div>{categoria}</div> */}
              <CardNota title = {note.title} body = {note.body}/>
            </div>
          );
        })}
      </ul>
    );
  }

}

export default ListaDeNotas;