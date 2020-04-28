import React, { Component } from "react";

// Usealternative as below
// import Cards from "./components/Cards/Cards";
// import CountryPicker from "./components/CountryPicker/CountryPicker";
// import Charts from "./components/Charts/Charts";

import { Cards, CountryPicker, Charts } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

export class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData,
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data}></Cards>
        <CountryPicker></CountryPicker>
        <Charts></Charts>
      </div>
    );
  }
}

export default App;
