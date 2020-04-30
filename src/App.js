import React, { Component } from "react";

// Usealternative as below
// import Cards from "./components/Cards/Cards";
// import CountryPicker from "./components/CountryPicker/CountryPicker";
// import Charts from "./components/Charts/Charts";

import { Cards, CountryPicker, Charts } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";

export class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData,
    });
  }

  handleCountryChange = async (countryVal) => {
    const fetchedData2 = await fetchData(countryVal);
    this.setState({
      data: fetchedData2,
      country: countryVal,
    });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="corona Title" />
        <Cards data={data}></Cards>
        <CountryPicker
          handleCountryChange={this.handleCountryChange}
        ></CountryPicker>
        <Charts data={data} country={country}></Charts>
      </div>
    );
  }
}

export default App;
