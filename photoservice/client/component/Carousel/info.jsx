import React from 'react';
import moment from 'moment';
import axios from 'axios';
// import {
//   Header,
//   LeftSection,
//   RightSection,
//   Avatar,
//   Username,
//   Time,
//   Location,
//   LikeButton,
// } from './styled.info.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const Header = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
`;

const LeftSection = styled.div`
  grid-column: 1;
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  grid-template-columns: 4fr 1fr 6fr;
  grid-template-areas:
    '. avatar username'
    '. avatar time'
    '. location location';
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 55px;
  width: 55px;
  grid-area: avatar;
  border-radius: 100%;
  justify-self: start;
  padding-top: 10px;
`;

const Username = styled.div`
  font-size: 1.25rem;
  grid-area: username;
  padding-top: 15px;
  justify-self: start;
`;

const Time = styled.div`
  font-size: 0.85rem;
  grid-area: time;
  align-self: start;
  padding-left: 5px;
  padding-top: 0px;
  color: gray;
`;

const Location = styled.div`
  font-size: 0.85rem;
  grid-area: location;
  height: 100%;
  justify-self: left;
  padding-top: 5px;
`;

const RightSection = styled.div`
  grid-column: 2;
  align-self: center;
`;

const LikeButton = styled.button`
  cursor: pointer;
  width: 120px;
  padding: 12px 0;
  font-weight: 700;
  font-size: 1.1rem;
  text-align: center;
  border: 1px solid transparent;
  background-color: ${(props) => (props.isClicked === 1 ? 'gray' : '#40d9ac')};
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: -1,
      thumbs: 0,
    };
  }

  componentDidMount() {
    var photoid = this.props.photo._id;
    const url = window.location.pathname;
    const id = url.slice(1, url.length - 1);
    axios
      .get(`http://localhost:2333/site/${id}/${photoid}/thumbs`)
      .then((res) => this.setState({ thumbs: res.data }))
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    var photoid = this.props.photo._id;
    const url = window.location.pathname;
    const id = url.slice(1, url.length - 1);
    if (prevProps.photo !== this.props.photo) {
      this.setState({ thumbs: this.props.photo.thumbs, clicked: -1 });
    }
  }

  helpfulHandle() {
    var photoid = this.props.photo._id;
    const url = window.location.pathname;
    const id = url.slice(1, url.length - 1);
    const flag = this.state.clicked * -1;
    axios
      .put(`http://localhost:2333/site/${id}/${photoid}/${flag}`)
      .then((res) => this.setState({ clicked: flag, thumbs: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    const { photo, location } = this.props;
    return (
      <Header>
        <LeftSection>
          <Avatar src={photo.user.profile_pic_url}></Avatar>
          <Username>{photo.user.username}</Username>
          <Time>{moment(photo.date).fromNow()}</Time>
          <Location>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {` ${location}`}
          </Location>
        </LeftSection>
        <RightSection>
          <LikeButton
            isClicked={this.state.clicked}
            onClick={this.helpfulHandle.bind(this)}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            {` Helpful   ${this.state.thumbs}`}
          </LikeButton>
        </RightSection>
      </Header>
    );
  }
}

export default Info;
