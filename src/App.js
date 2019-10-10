import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature } from './actions';

const App = props => {
  

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };


  // The better way to do this will be to add connect and get the state needed in each component in that respective component rather than getting state in App.js and passing it to the child component. Example header, AddedFeatures and Total component. 

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={props.addFeature} />
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log('State passed to mapStateToProps', state);
  return {
    additionalFeatures: state.additionalFeatures,
  }
}

export default connect(mapStateToProps, { addFeature })(App);
