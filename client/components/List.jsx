import React from 'react';
import ListEntry from './ListEntry.jsx';
import AddToList from './AddToList.jsx';

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [1]
    }
  }

  onSubmitHandler(newListItem) {
    this.setState({
      list: [...this.state.list, newListItem]
    })
  }

  render() {
    return (
    <div>
      <AddToList onSubmitHandler={this.onSubmitHandler.bind(this)}/>
      <ul>
        {this.state.list.map((listItem) => {
          return (<ListEntry listItem={listItem} />);
      })}
      </ul>
    </div>
    )
  }
}

export default List;