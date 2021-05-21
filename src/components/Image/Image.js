import React from "react";
import weather01 from "../../images/weather-01.jpeg";
import weather02 from "../../images/weather-02.jpg";
import weather03 from "../../images/weather-03.jpg";
import weather04 from "../../images/weather-04.jpg";
import weather05 from "../../images/weather-05.jpg";

// class Image extends React.Component {
//   render() {
//     let donePercent = this.props.donePercent;
//     let imgSrc = "";

//     if (donePercent < 20) {
//       imgSrc = weather01;
//     } else if (donePercent === 20 || donePercent < 40) {
//       imgSrc = weather02;
//     } else if (donePercent === 40 || donePercent < 70) {
//       imgSrc = weather03;
//     } else if (donePercent === 70 || donePercent < 95) {
//       imgSrc = weather04;
//     } else {
//       imgSrc = weather05;
//     }

//     return <img className="background-image" src={imgSrc} alt="weather" />;
//   }
// }

function Image(props) {
  const donePercent = props.donePercent;
  let imgSrc = "";

  if (donePercent < 20) {
    imgSrc = weather01;
  } else if (donePercent === 20 || donePercent < 40) {
    imgSrc = weather02;
  } else if (donePercent === 40 || donePercent < 70) {
    imgSrc = weather03;
  } else if (donePercent === 70 || donePercent < 95) {
    imgSrc = weather04;
  } else {
    imgSrc = weather05;
  }

  return <img className="background-image" src={imgSrc} alt="weather" />;
}

export default Image;
