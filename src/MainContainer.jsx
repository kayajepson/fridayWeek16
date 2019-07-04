import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
// import Grid from 'react-css-grid'

function MainContainer() {
  var myMainContainerStyles = {
    display: 'grid',
    gridTemplateColumns: '3fr 2fr',
    gridTemplateArea: 'left right',
    backgroundColor: '#dadada',
    paddingRight: '5%',
    paddingLeft: '2%',
    paddingTop: '2%',
    height: '100vh',
  }

  return (
      <div style={myMainContainerStyles}>
        <LeftSide className='left'/>
        <RightSide className='right'/>
      </div>
  )
}

export default MainContainer;
