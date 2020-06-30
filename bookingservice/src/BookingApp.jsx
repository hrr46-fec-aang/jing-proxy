import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Button from "./App.style";
import moment from "moment";
import faker from "faker";
import "./App.css";
import Loader from './components/Loader.jsx';
import $ from 'jquery';

class BookingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInToggle: false,
      checkOutToggle: false,
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      data: "",
      subtotal: 0,
      price: 0,
      takenDates: [],
      maxDate: [],
      guests: 1,
      maxGuest: 0,
      loading: true
    };
    this.handleCheckinChange=this.handleCheckinChange.bind(this)
  }
  componentDidMount() {
    var id = window.location.pathname;
    if (id === "/") {
      console.log("Welcome!");
    } else {
      axios
        .get(`http://localhost:3030/booking${id}`)
        .then((data) => {
          var daylist = [];
          var result = [];
          var getDaysArray = function (start, end) {
            for (
              var arr = [], dt = new Date(start);
              dt <= end;
              dt.setDate(dt.getDate() + 1)
            ) {
              arr.push(new Date(dt));
            }
            return arr;
          };
          for (var i = 0; i < data.data.length; i++) {
            daylist = getDaysArray(
              new Date(data.data[i].arrive),
              new Date(data.data[i].depart)
            );
            for (var date in daylist) {
              result.push(daylist[date]);
            }
          }
          result.sort(function (a, b) {
            var c = new Date(a);
            var d = new Date(b);
            return c - d;
          });
          this.setState({
            data: data.data,
            price: data.data[0].price,
            maxGuest: data.data[0].maximum,
            takenDates: result,
          });
        })
        .then(setTimeout(() => {
          this.handleMaxDate(this.state.startDate);
          var a = moment(this.state.startDate).format();
          var b = moment(this.state.endDate);
          var c = this.state.price * b.diff(a, "days") * this.state.guests;
          this.setState({
            subtotal: c,
            loading: false
          });
        }, 500));
    }
  }

  handleMaxDate(date) {
    var max = "";
    for (var i in this.state.takenDates) {
      if (date < this.state.takenDates[i]) {
        max = this.state.takenDates[i];
        this.setState({
          maxDate: max,
        });
        return;
      }
    }
    this.setState({
      maxDate: "",
      loading: true
    });
  }
  handleCheckinChange(date) {
    this.handleMaxDate(date);
    document.getElementsByClassName('react-datepicker-ignore-onclickoutside')[0].className='';
    $('.react-datepicker__tab-loop').empty();
    this.setState({
      startDate: date,
      endDate: addDays(date, 1),
      loading: true
    });
    setTimeout(() => {
      var a = moment(this.state.startDate).format();
      var b = moment(this.state.endDate);
      var c = this.state.price * b.diff(a, "days") * this.state.guests;
      this.setState({
        subtotal: c,
        loading: false
      });
    }, 500);
  }
  handleCheckoutChange(date) {
    document.getElementsByClassName('react-datepicker-ignore-onclickoutside')[0].className='';
    $('.react-datepicker__tab-loop').empty();
    this.setState({
      endDate: date,
      loading: true
    });
    setTimeout(() => {
      var a = moment(this.state.startDate).format();
      var b = moment(this.state.endDate);
      var c = this.state.price * b.diff(a, "days") * this.state.guests;

      this.setState({
        subtotal: c,
        loading: false
      });
    }, 500);
  }

  handleGuestChange(e) {
    this.setState({
      guests: e.target.value,
      loading: true
    });
    setTimeout(() => {
      var a = moment(this.state.startDate).format();
      var b = moment(this.state.endDate);
      var c = this.state.price * b.diff(a, "days") * this.state.guests;

      this.setState({
        subtotal: c,
        loading: false
      });
    }, 500);
  }

  handleBooking() {
    document.getElementById("checkin").style.background = "white";
    document.getElementById("checkinCalendar").style.background = "white";
    document.getElementById("checkout").style.background = "white";
    document.getElementById("checkoutCalendar").style.background = "white";
    document.getElementById("guest").style.background = "white";
    document.getElementById("guestCount").style.background = "white";
    var id = window.location.pathname;
    var bookingName = `${faker.name.firstName() + " " + faker.name.lastName()}`;
    var arrive = this.state.startDate;
    var depart = this.state.endDate;
    var groupsize = this.state.guests;
    var subtotal = this.state.subtotal;
    var booking = {
      bookingName: bookingName,
      arrive: arrive,
      depart: depart,
      groupsize: groupsize,
      subtotal: subtotal,
    };
    if (id === "/") {
      console.log("Welcome!");
    } else {
      axios
        .post(`http://localhost:3030/booking${id}`, booking)
        .then((res) => {
          console.log(res.data);
        })
        .then(
          setTimeout(() => {
            this.componentDidMount();
          }, 500)
        );
    }
  }

  changeCheckinColor() {
    document.getElementById("checkin").style.background = "#f3f3f3";
    document.getElementById("checkinCalendar").click();
    document.getElementById("checkinCalendar").style.background = "#f3f3f3";
    document.getElementById("checkout").style.background = "white";
    document.getElementById("checkoutCalendar").style.background = "white";
    document.getElementById("guest").style.background = "white";
    document.getElementById("guestCount").style.background = "white";
  }

  changeCheckoutColor() {
    document.getElementById("checkout").style.background = "#f3f3f3";
    document.getElementById("checkoutCalendar").click();
    document.getElementById("checkoutCalendar").style.background = "#f3f3f3";
    document.getElementById("checkin").style.background = "white";
    document.getElementById("checkinCalendar").style.background = "white";
    document.getElementById("guest").style.background = "white";
    document.getElementById("guestCount").style.background = "white";
  }

  changeGuestColor() {
    document.getElementById("guest").style.background = "#f3f3f3";
    document.getElementById("guestCount").click();
    document.getElementById("guestCount").style.background = "#f3f3f3";
    document.getElementById("checkin").style.background = "white";
    document.getElementById("checkinCalendar").style.background = "white";
    document.getElementById("checkout").style.background = "white";
    document.getElementById("checkoutCalendar").style.background = "white";
  }

  render() {
    return (
      <div className="container">
        <div className="booking">
          <div>
            <h2>${this.state.price}</h2>
            <div id="pernight">per night</div>
          </div>
          <div className="grid-container">
            <div
              onClick={this.changeCheckinColor.bind(this)}
              id="checkin"
              className="checkin"
            ><div className="checkintxt">
              Check in</div>
              <div onClick={()=>{console.log('hi');$('#checkin').click();}}><DatePicker
                id="checkinCalendar"
                selectsStart
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                minDate={moment().toDate()}
                excludeDates={this.state.takenDates}
                selected={this.state.startDate}
                onChange={date => this.handleCheckinChange(date)}
                dateFormat="yyyy/MM/dd"
                shouldCloseOnSelect={true}
              /></div>
            </div>
            <div
              onClick={this.changeCheckoutColor.bind(this)}
              id="checkout"
              className="checkout"
            ><div className="checkouttxt">
              Check out</div>
              <DatePicker
                id="checkoutCalendar"
                startDate={addDays(this.state.startDate, 1)}
                endDate={this.state.endDate}
                minDate={addDays(this.state.startDate, 1)}
                maxDate={this.state.maxDate}
                excludeDates={this.state.takenDates}
                selected={this.state.endDate}
                onChange={date => this.handleCheckoutChange(date)}
                dateFormat="yyyy/MM/dd"
                shouldCloseOnSelect={true}
              />
            </div>
            <div onClick={this.changeGuestColor} id="guest" className="guest">
              Guests
              <input
                id="guestCount"
                type="number"
                min="1"
                max={this.state.maxGuest}
                step="1"
                placeholder="1"
                onChange={this.handleGuestChange.bind(this)}
              ></input>
              <div className="input-group"></div>
            </div>
          </div>
          {this.state.loading ? <Loader /> :
          <div className="subtotal">Subtotal: ${this.state.subtotal}</div>}
          <div className="book">
            <p>
              <Button onClick={this.handleBooking.bind(this)}>Book</Button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BookingApp />, document.getElementById("booking"));
