import React from 'react';

class AddToList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: ''
    }
    this.handleNewItemChange = this.handleNewItemChange.bind(this);
  }

  handleNewItemChange(e) {
    this.setState({
      newItem: e.target.value
    }, () => {
      console.log(this.state.newItem)
    })
  }

  render() {

    return (
    <div>
      <input type="text" value={this.state.newItem} onChange={this.handleNewItemChange}></input>
      <button onClick={() => this.props.onSubmitHandler(this.state.newItem)}>Add To List</button>
    </div>
    )
  }
}

export default AddToList;