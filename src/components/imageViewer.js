import React, { Component } from "react";
import "../styles/app.css";
class Image extends Component {
  state = {
    imageUrl: [
      "../image/img1.jpg",
      "../image/img2.jpg",
      "../image/img3.jpg",
      "../image/img4.jpg",
    ],
    index: 0,
  };

  // Slide to next image
  next = () => {
    let { index, imageUrl } = this.state;
    if (index < imageUrl.length - 1) {
      this.setState({ index: index + 1 });
    }
  };

  // Slide to previous image
  prev = () => {
    let { index } = this.state;
    if (index > 0) {
      this.setState({ index: index - 1 });
    }
  };

  render() {
    return (
      <div className="main-container">
        <img src={this.state.imageUrl[this.state.index]} alt="slider" />
        <button className="next-btn" onClick={this.next}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <button className="prev-btn" onClick={this.prev}>
          <i className="fas fa-chevron-left"></i>
        </button>
      </div>
    );
  }
}
export default Image;
