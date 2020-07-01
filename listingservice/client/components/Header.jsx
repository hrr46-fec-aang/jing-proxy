import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileUpload,
  faCamera,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div``;
const Loc = styled.p``;
const Title = styled.h1``;
const Action = styled.div``;
const ActionLeft = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-top: 20px;
  float: left;
  width: 50%;
`;
const ActionRight = styled.div`
  font-weight: 500;
  display: flex;
  margin-top: 20px;
  width: 50%;
`;

const Thumb = styled.div`
  float: left;
  color: #40d9ac;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 7px;
`;

const Photo = styled.div`
  border: 1px solid #ebebeb;
  height: 48px;
  display: flex;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  justify-content: center;
`;

const Save = styled.div`
  border: 1px solid #ebebeb;
  color: #ec6e67;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

const Share = styled.div`
  border: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  font-size: 1.2rem;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

const Header = function (props) {
  return (
    <Wrapper>
      <Loc>
        United States, {props.info.state}, {props.info.site}
      </Loc>
      <Title>{props.info.prop}</Title>
      <Action>
        <ActionLeft>
          <Thumb>
            {' '}
            <FontAwesomeIcon icon={faThumbsUp} />
            100%
          </Thumb>
          Recommend
        </ActionLeft>
        <ActionRight>
          <Photo>
            {' '}
            <FontAwesomeIcon icon={faCamera} />
            Upload
          </Photo>
          <Save>Save to List</Save>
          <Share>
            <FontAwesomeIcon icon={faFileUpload} />
          </Share>
        </ActionRight>
      </Action>
    </Wrapper>
  );
};

export default Header;
