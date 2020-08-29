import React from 'react';
import ToyCard from './ToyCard'
import ToyForm from './ToyForm'


class ToyContainer extends React.Component {

  constructor() {
    super()

    this.state = {
      isLoading:true,
      display: false
    }
  }


  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }


  mapToys = () => {
    return (this.state.toys.map(toy => {
        return (
          <ToyCard key={toy.id} toy={toy} deleteToy={this.deleteToy} incrementLikes={this.incrementLikes}/>
        )
      })
    )
  }

  createToy = ({name,image}) => {
    const toy = {
      id : this.state.toys.length + 1,
      name : name,
      image : image,
      likes : 0 
    }
    this.setState({toys: [...this.state.toys,toy]})
  }

  deleteToy = (event) => {
    const reducedArray = this.state.toys.filter(toy => {
      return(toy.id !== parseInt(event.target.id))
    })

    this.setState({toys:reducedArray})
  }

  incrementLikes = (event) => {
    this.state.toys.find(toy => {
      return(toy.id === parseInt(event.target.id))
    }).likes++

    this.setState({toys:this.state.toys})
  }

  componentDidMount () {
    fetch('http://localhost:3000/toys')
      .then(response => response.json())
      .then(toys => {
        this.setState({
          isLoading:false,
          toys: toys
        })
      })
  }

  render () {
    return(
      <div>
        { this.state.display
          ?
        <ToyForm createToy={this.createToy}/>
          :
        null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <div id="toy-collection">
          {this.state.isLoading === false ? this.mapToys() : console.log("Loading")}
        </div>
      </div>
    )
  }
}

export default ToyContainer;
