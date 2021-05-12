import React from "react";
import Date from "./Date";
import Progress from "./Progress";
import AddNewTodo from "./AddNewTodo";
import weather01 from "../images/weather-01.jpeg";
import weather02 from "../images/weather-02.jpg";
import weather03 from "../images/weather-03.jpg";
import weather04 from "../images/weather-04.jpg";
import weather05 from "../images/weather-05.jpg";

class HeaderImage extends React.Component {
  render() {
    let items = this.props.items;
    let doneCount = 0;
    let donePercent = 0;
    let imgSrc = "";

    items.map((item) => {
      if (item.done === true) {
        doneCount += 1;
      }
      return doneCount;
    });

    donePercent = (doneCount / this.props.items.length) * 100;
    donePercent = Math.round((donePercent + Number.EPSILON) * 100) / 100;

    if (donePercent < 20) {
      imgSrc = weather01;
    } else if (donePercent === 20 || donePercent < 40) {
      imgSrc = weather02;
    } else if (donePercent === 40 || donePercent < 60) {
      imgSrc = weather03;
    } else if (donePercent === 60 || donePercent < 80) {
      imgSrc = weather04;
    } else {
      imgSrc = weather05;
    }
    

    return (
      <div
        className="header-image"
      >
        <img className="background-image" src={imgSrc} alt="weather" />
        <div className="dark-shade">

        <AddNewTodo
          formDisplay={this.props.formDisplay}
          toggleForm={this.props.toggleForm}
          addTodo={this.props.addTodo}
        />
        <Progress donePercent={donePercent} />
        <Date />
        </div>
      </div>
    );
  }
}

export default HeaderImage;
