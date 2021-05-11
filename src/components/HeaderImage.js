import React from "react";
import Date from "./Date";
import Progress from "./Progress";
import AddNewTodo from "./AddNewTodo";
import sun from "../sunandclouds.jpeg";

class HeaderImage extends React.Component {
  render() {
    let items = this.props.items;
    return (
      <div
        className="container"
        style={{
          backgroundImage: `url(${sun})`,
          height: "10em",
        }}
      >
        <AddNewTodo
          formDisplay={this.props.formDisplay}
          toggleForm={this.props.toggleForm}
          addTodo={this.props.addTodo}
        />
        <Progress items={items} />
        <Date />
      </div>
    );
  }
}

export default HeaderImage;
