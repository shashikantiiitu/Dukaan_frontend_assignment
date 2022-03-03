import { Component } from 'react';
import FSmaker from './FSmaker/FSmaker';
import Guide from './Guide/Guide';
import Trialitems from './Trailitems/Trialitems';


class Body extends Component{
  render() {
    return (
      <div className="App">
        <FSmaker />
        <Guide /> 
        <Trialitems />
      </div>
    );
  }
}

  export default Body;