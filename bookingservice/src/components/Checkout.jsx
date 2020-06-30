import React from "react";
import DatePicker from "react-datepicker";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }
  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }
  render() {
    return (
      <div className="checkout" onClick={() => this.checkOutToggle()}>
        Check out
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange.bind(this)}
          dateFormat="yyyy MMMM dd"
        />
      </div>
    );
  }
}

export default Checkout;
