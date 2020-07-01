import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaucet,
  faShower,
  faUtensils,
  faWifi,
  faTrashAlt,
  faBed,
} from '@fortawesome/free-solid-svg-icons';

const CardDiv = styled.div`
  margin: 0 10px 20px 10px;
  position: relative;
  background-color: #fff;
  border: 1px solid #ebebeb;
  padding: 15px 5px 15px 15px;
  flex-wrap: wrap;
  line-height: 1.4;
  width: 220px;
  height: 340px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08) !important;
`;

const CardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
  margin-left: 4px;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  position: relative;
`;

const VertIcon = styled.div``;

const Icon = styled.div`
  position: relative;
  margin-right: 10px;
`;

const IconInfo = styled.span`
  font-size: 1.2rem;
`;

const CardText = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;
`;

const MoreInfo = styled.div`
  position: absolute;
  bottom: 15px;
  left: 18px;
  color: #40d9ac;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.4;
`;

const MoreInfoText = styled.a`
  cursor: pointer;
  color: #40d9ac;
  font-weight: 500;
  font-size: 1.4rem;
`;

const AmntCard = function (props) {
  return (
    <CardDiv>
      <CardTitle>{props.name}</CardTitle>
      <Info>
        <VertIcon>
          <Icon>
            <IconInfo>
              <FontAwesomeIcon icon={faFaucet} />
            </IconInfo>
          </Icon>
        </VertIcon>
        <CardText>{props.cardInfo.water}</CardText>
      </Info>
      <Info>
        <VertIcon>
          <Icon>
            <IconInfo>
              <FontAwesomeIcon icon={faBed} />
            </IconInfo>
          </Icon>
        </VertIcon>
        <CardText>{props.cardInfo.picnic}</CardText>
      </Info>
      <Info>
        <VertIcon>
          <Icon>
            <IconInfo>
              <FontAwesomeIcon icon={faUtensils} />
            </IconInfo>
          </Icon>
        </VertIcon>
        <CardText>{props.cardInfo.kitchen}</CardText>
      </Info>
      <Info>
        <VertIcon>
          <Icon>
            <IconInfo>
              <FontAwesomeIcon icon={faShower} />
            </IconInfo>
          </Icon>
        </VertIcon>
        <CardText>{props.cardInfo.shower}</CardText>
      </Info>
      <Info>
        <VertIcon>
          <Icon>
            <IconInfo>
              <FontAwesomeIcon icon={faWifi} />
            </IconInfo>
          </Icon>
        </VertIcon>
        <CardText>{props.cardInfo.wifi}</CardText>
      </Info>
      <Info>
        <VertIcon>
          <Icon>
            <IconInfo>
              <FontAwesomeIcon icon={faTrashAlt} />
            </IconInfo>
          </Icon>
        </VertIcon>
        <CardText>{props.cardInfo.trash}</CardText>
      </Info>
      <MoreInfo>
        <MoreInfoText
          onClick={(e, name, cardInfo) =>
            props.handleClick(e, props.name, props.cardInfo)
          }
        >
          More details
        </MoreInfoText>
      </MoreInfo>
    </CardDiv>
  );
};

export default AmntCard;
