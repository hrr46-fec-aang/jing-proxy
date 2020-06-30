import React from 'react';
import ImageSlide from './ImageSlide.jsx';
import Info from './info.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Main = styled.div`
  overflow: hidden;
  display: grid;
  position: fixed;
  z-index: 3; /* Sit on top */
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  grid-template-rows: 120px auto 50px;
  grid-template-columns: 50px auto 50px;
  grid-template-areas:
    'num header close'
    'previous carousel next'
    '. description .';
`;

const Num = styled.div`
  grid-area: num;
  color: #8e9490;
  padding-top: 10px;
  padding-left: 10px;
`;

const Header = styled.div`
  grid-area: header;
  color: white;
`;

const CloseButton = styled.div`
  grid-area: close;
  cursor: pointer;
  color: #8e9490;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #f1f1f1;
  font-size: 25px;
  transition: 0.3s;
`;

const LeftArrow = styled.div`
  cursor: pointer;
  grid-area: previous;
  color: #8e9490;
  align-self: center;
  justify-self: start;
  padding-left: 10px;
  &:hover {
    font-size: 120%;
  }
`;

const RightArrow = styled.div`
  cursor: pointer;
  grid-area: next;
  color: #8e9490;
  align-self: center;
  justify-self: end;
  padding-right: 10px;
  &:hover {
    font-size: 120%;
  }
`;
const PhotoCarousel = styled.div`
  grid-area: carousel;
  justify-self: center;
  align-self: center;
  height: 650px;
`;

const Desc = styled.div`
  grid-area: description;
  color: white;
  justify-self: center;
  align-self: center;
  padding-top: 10px;
  padding-bottom: 30px;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: undefined,
    };
  }

  componentDidMount() {
    this.setState({
      currentIndex: this.props.currentIndex,
    });
  }

  previous() {
    var photoCount = this.props.photos.length;
    var previousIndex = Number(this.state.currentIndex) - 1;
    previousIndex =
      previousIndex < 0 ? photoCount + previousIndex : previousIndex;
    this.setState({
      currentIndex: previousIndex,
    });
  }

  next() {
    var photoCount = this.props.photos.length;
    var nextIndex = Number(this.state.currentIndex) + 1;
    nextIndex = nextIndex >= photoCount ? nextIndex - photoCount : nextIndex;
    this.setState({
      currentIndex: nextIndex,
    });
  }

  render() {
    const { currentIndex } = this.state;
    const { photos, location } = this.props;

    var length = photos.length;
    var index = Number(currentIndex) + 1;
    const photo =
      currentIndex === undefined
        ? photos[this.props.currentIndex]
        : photos[currentIndex];
    return (
      <Main>
        <Num>{`${index}/${length}`}</Num>
        <Header>
          <Info photo={photo} location={location} />
        </Header>
        <CloseButton>
          <FontAwesomeIcon icon={faTimes} onClick={this.props.handleClose} />
        </CloseButton>

        <LeftArrow>
          <FontAwesomeIcon
            icon={faAngleLeft}
            size="3x"
            color="#8e9490"
            onClick={this.previous.bind(this)}
          />
        </LeftArrow>
        <PhotoCarousel>
          <ImageSlide photo={photo} />
        </PhotoCarousel>
        <RightArrow>
          <FontAwesomeIcon
            icon={faAngleRight}
            size="3x"
            onClick={this.next.bind(this)}
          />
        </RightArrow>
        <Desc>{photo.description}</Desc>
      </Main>
    );
  }
}

export default Carousel;
