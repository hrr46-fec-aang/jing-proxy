import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ContactDiv = styled.div`
  margin-top: 10px;
  font-size: 1.4rem;
`;

const Question = styled.strong`
  font-weight: 500;
`;

const Contact = styled.a`
  color: #40d9ac;
`;

const ContactHost = function (props) {
  return (
    <ContactDiv>
      <Question>Have a question?</Question>
      <Contact> Send {props.info.host.name} a message!</Contact>
    </ContactDiv>
  );
};

export default ContactHost;
