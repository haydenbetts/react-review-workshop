import React from 'react';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <List />
      </div>
    )
  }
}

export default App;