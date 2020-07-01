import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const HostWrapper = styled.div`
  float: left;
  position: relative;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
`;

const ListedBy = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.2;
  padding-right: 15px;
  position: relative;
  width: 66.66666667%;
`;

const Avatar = styled.img`
  margin-right: 15px;
  height: 90px;
  width: 90px;
  border: 2px solid #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  background-color: #ebebeb;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  vertical-align: middle;
  line-height: 1.2;
`;

const HostInfo = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-weight: 400;
  line-height: 1.2;
`;

const HostBy = styled.span`
  font-weight: 500 !important;
  font-size: 12px;
  line-height: 1.2;
`;

const HostName = styled.div`
  line-height: 1.2;
  font-weight: 400;
  font-size: 1.4rem;
  color: inherit;
  background-color: transparent;
`;

const Host = function (props) {
  var overview = props.info.site.desc.slice(0, 300);

  var clickHandler = function () {
    overview = props.info.site.desc;
    return overview;
  };

  return (
    <HostWrapper>
      <ListedBy>
        <Avatar src={props.info.host.image}></Avatar>
        {/* <span>
          <HostStatus>
            <FontAwesomeIcon icon={faStar}/>
          </HostStatus>
        </span> */}
        <HostInfo>
          <HostBy>Hosted by</HostBy>
          <HostName>{props.info.host.name}</HostName>
        </HostInfo>
      </ListedBy>
    </HostWrapper>
  );
};

export default Host;
