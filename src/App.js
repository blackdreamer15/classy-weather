import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { location: "Accra" };
  }


  fetchWeather() {

  }

  render() {
    return (
      <div className="app">
        <h1>Classy weather</h1>

        <div>
          <input
            type="text"
            placeholder="Search from location..."
            value={this.state.location}
            onChange={e => this.setState.location({ location: e.target.value })}
          />
        </div>

        <button onClick={this.fetchWeather}>Get weather</button>
      </div>
    );
  }
}


export default App;