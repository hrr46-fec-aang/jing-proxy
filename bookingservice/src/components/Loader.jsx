import React from "react";
import {BeatLoader} from 'react-spinners';

class Loader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="loader">
        <BeatLoader size={10} loading/>
      </div>
    );
  }
}

export default Loader;