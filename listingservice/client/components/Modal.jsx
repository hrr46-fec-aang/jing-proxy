import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CampCard from './CampCard.jsx';
import EssCard from './EssCard.jsx';
import AmntCard from './AmntCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faCampground,
  faFaucet,
  faShower,
  faUtensils,
  faWifi,
  faTrashAlt,
  faBed,
  faFire,
  faToiletPaper,
  faDog,
  faMapMarkerAlt,
  faParking,
  faWheelchair,
} from '@fortawesome/free-solid-svg-icons';

const ModalDiv = styled.div`
  width: 430px;
  position: relative;
  margin-top: 30px;
  margin-right: auto;
  margin-bottom: 30px;
  margin-left: auto;
`;

const ModalBox = styled.div`
  padding: 25px;
  border: 1px solid #ebebeb;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 0px;
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  outline: 0;
`;

const ModalHeader = styled.div`
  padding-bottom: 0;
  height: auto;
  border-bottom: none;
  padding: 15px;
`;

const ModalButton = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  opacity: 1;
  float: none;
  z-index: 1;
  margin-top: -2px;
  cursor: pointer;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  overflow: visible;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
`;

const XButton = styled.span``;

const HeaderTitle = styled.h4`
  font-weight: 500;
  font-size: 1.5rem;
  text-align: left;
  margin-left: 0px;
  margin-bottom: 15px;
  margin-top: 1px;
  line-height: 1.42;
  display: block;
`;

const ModalBody = styled.div`
  position: relative;
  padding: 15px;
  max-height: calc(100vh - 210px);
  overflow-y: auto;
`;

const ModalItem = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid #ebebeb;
  margin-bottom: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08) !important;
`;

const VertIcon = styled.div``;

const Icon = styled.div`
  position: relative;
  margin-right: 10px;
`;

const IconInfo = styled.span`
  font-size: 1.2rem;
  content: '\f139';
  display: inline-block;
  font-family: 'hc-awesome';
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  line-height: 1;
  text-decoration: inherit;
  text-rendering: optimizeLegibility;
  text-transform: none;
`;

const CardText = styled.div`
  font-size: 1.2rem;
  font-weight 500;
`;

// object with all the icons
var img = {
  lodge: faCampground,
  sites: faMapMarkerAlt,
  guests: faUser,
  parking: faParking,
  ada: faWheelchair,
  fire: faFire,
  toilet: faToiletPaper,
  pets: faDog,
  water: faFaucet,
  picnic: faBed,
  kitchen: faUtensils,
  shower: faShower,
  wifi: faWifi,
  trash: faTrashAlt,
};

const Modal = ({ handleClose, disp, cardInfo, name }) => {
  const showHideClassName = disp ? 'modal display-block' : 'modal display-none';
  var arr = Object.keys(cardInfo);

  return (
    <div className={showHideClassName}>
      <ModalDiv>
        <ModalBox>
          <ModalHeader>
            <ModalButton onClick={handleClose}>
              <XButton>X</XButton>
            </ModalButton>
            <HeaderTitle>{name}</HeaderTitle>
          </ModalHeader>
          <ModalBody>
            {arr.map((item) => (
              <ModalItem key={arr.indexOf(item)}>
                <VertIcon>
                  <Icon>
                    <IconInfo>
                      <FontAwesomeIcon icon={img[item]} />
                    </IconInfo>
                  </Icon>
                </VertIcon>
                <CardText> {cardInfo[item]}</CardText>
              </ModalItem>
            ))}
          </ModalBody>
        </ModalBox>
      </ModalDiv>
    </div>
  );
};

export default Modal;
