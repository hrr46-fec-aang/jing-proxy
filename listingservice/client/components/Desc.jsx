import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const DesWrapper = styled.div`
  margin-bottom: 40px;
  font-size: 1.4rem;
  box-sizing: border-box;
  display: block;
`;

const Info = styled.div`
  box-sizing: border-box;
  display: block;
  line-height: 1.42;
`;

const ReadMore = styled.a`
  font-weight: bold;
`;

class Desc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      read: false,
      overview: this.props.info.site.desc,
    };
  }

  clickHandler(e) {
    this.setState({ read: true });
    this.setState({ overview: this.props.info.site.desc });
  }

  render() {
    if (this.state.read) {
      return (
        <DesWrapper>
          <Info key={this.props.info.site._id}>
            {this.state.overview.split('\n').map((para) => (
              <p key={this.props.info.site.desc.indexOf(para)}>{para}</p>
            ))}
          </Info>
        </DesWrapper>
      );
    } else {
      return (
        <DesWrapper key={this.props.info.site._id}>
          {this.state.overview.slice(0, 300)}
          <ReadMore onClick={(e) => this.clickHandler(e)}>
            {' '}
            Read more...
          </ReadMore>
        </DesWrapper>
      );
    }
  }
}

export default Desc;
