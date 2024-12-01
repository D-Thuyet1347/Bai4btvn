import React from "react";

export const ContentCourse = (props) => {
  return (
    <div className="box">
    <span className="amount">$59.99</span>
    <img src="../images/course-1.svg" alt="" />
    <div className="stars">
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="far fa-star" />
    </div>
    <h3>front end development</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ullam omnis odit accusamus doloremque? Cum aliquid unde nulla. Vitae, adipisci?</p>
    <a href="#" className="btn">learn more</a>
    <div className="icons">
      <p> <i className="far fa-clock" /> 2 hours </p>
      <p> <i className="far fa-calendar" /> 6 months </p>
      <p> <i className="fas fa-book" /> 12 modules </p>
    </div>
  </div>
  
  );
};
