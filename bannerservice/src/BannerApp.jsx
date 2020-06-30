import React from "react";
import ReactDOM from "react-dom";
import Banner from 'react-banner'
import "./App.css";

class BannerApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="banner">
      <Banner
          logo= 'campaang'
          url={ window.location.pathname }
          items={[
              { "content": "Near me", "url": "/example" },
              { "content": "About", "url": "/another" },
              { "content": "Login", "url": "/another" },
              { "content": "Sign up", "url": "/another" },
              { "content": "Start hosting", "url": "/children"},
              {
                "title": "hello",
                "url": 'https://github.com'
            }
          ]} /></div>
  )
  }
}

ReactDOM.render(<BannerApp />, document.getElementById("banner"));
