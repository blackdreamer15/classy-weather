import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "Accra",
      isLoading: false,
      displayLocation: "",
      weather: {},
    };

    this.fetchWeather = this.fetchWeather.bind(this);
  }


  async fetchWeather() {
    try {
      this.setState({ isLoading: true });
      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      );
      const geoData = await geoRes.json();
      console.log(geoData);

      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);
      // console.log(`${name} ${this.convertToFlag(country_code)}`);

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      console.log(weatherData.daily);
    }
    catch (err) {
      console.error(err);
    }
    finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div c lassName="app">
        <h1>Classy weather</h1>

        <div>
          <input
            type="text"
            placeholder="Search from location..."
            value={this.state.location}
            onChange={e => this.setState({ location: e.target.value })}
          />
        </div>

        <button onClick={this.fetchWeather}>Get weather</button>

        {this.state.isLoading && (
          <p className="loader">Loading...</p>
        )}
      </div>
    );
  }
}


export default App;