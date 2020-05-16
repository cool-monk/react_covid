import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";
import { connect } from "react-redux";
import cx from "classnames";

const CountryPicker = ({ handleCountryChange, isDark }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountryAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchCountryAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl
      className={
        isDark
          ? cx(styles.darkSelector, styles.formControl)
          : styles.formControl
      }
    >
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

const mapStateToProps = (state) => {
  return {
    isDark: state.theme.isDark,
  };
};

export default connect(mapStateToProps)(CountryPicker);
