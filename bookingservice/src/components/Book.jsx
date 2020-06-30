import React from "react";
import Button from "../App.style";

class Book extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="book">
        <p>
          <Button>Book</Button>
        </p>
      </div>
    );
  }
}

export default Book;
