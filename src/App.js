import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { location: "Accra" };
  }

  render() {
    return (
      <div className="app">
        <h1>Classy weather</h1>

        <div>
          <input type="text" placeholder="Search from location..." />
        </div>

        <button>Get weather</button>
      </div>
    );
  }
}


export default App;