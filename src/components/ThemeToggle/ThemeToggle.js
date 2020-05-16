import React from "react";
import "./ThemeToggle.css";
import { connect } from "react-redux";
import { toggleTheme } from "../../redux";

function ThemeToggle(props) {
  return (
    <>
      <div className="wrapper">
        <input type="checkbox" id="hide-checkbox"></input>
        <label
          for="hide-checkbox"
          className="toggle"
          onClick={props.toggleTheme}
        >
          <span className="toggle-button">
            <span className="crater crater-1"></span>
            <span className="crater crater-2"></span>
            <span className="crater crater-3"></span>
            <span className="crater crater-4"></span>
            <span className="crater crater-5"></span>
            <span className="crater crater-6"></span>
            <span className="crater crater-7"></span>
          </span>
          <span className="star star-1"></span>
          <span className="star star-2"></span>
          <span className="star star-3"></span>
          <span className="star star-4"></span>
          <span className="star star-5"></span>
          <span className="star star-6"></span>
          <span className="star star-7"></span>
          <span className="star star-8"></span>
        </label>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTheme: () => {
      dispatch(toggleTheme());
    },
  };
};

export default connect(null, mapDispatchToProps)(ThemeToggle);
