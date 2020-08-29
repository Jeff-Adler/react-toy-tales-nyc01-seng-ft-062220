import React, { Component } from 'react';

class ToyCard extends Component {

  deleteHandler = (event) => {
    this.props.deleteToy(event)
  }

  likeHandler = (event) => {
    this.props.incrementLikes(event)
  }

  render() {
    return (
      <div id={this.props.toy.id} className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button id={this.props.toy.id} className="like-btn" onClick={event => this.likeHandler(event)}>Like {'<3'}</button>
        <button id={this.props.toy.id} className="del-btn" onClick={event => this.deleteHandler(event)}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
