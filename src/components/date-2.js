import React from 'react';

class Timezone2 extends React.Component {

  state={

    curTime : new Date().toLocaleTimeString(['en-GB'], { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit' }),

  }

  render(){

    return (



        <span className='ml-4'>Barcelona {this.state.curTime}</span>



    );

  }

}


export default Timezone2;
