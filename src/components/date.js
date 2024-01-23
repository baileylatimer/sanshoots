import React from 'react';

class Timezone extends React.Component {

  state={
    curTime : new Date().toLocaleTimeString(['en-GB'], { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit' }),
  }
  render(){
    return (
        <span>San Diego {this.state.curTime}</span>
    );
  }
}


export default Timezone;
