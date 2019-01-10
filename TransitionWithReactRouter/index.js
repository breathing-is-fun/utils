import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { AnimationWrapper } from './AnimationWrapper';

import 'animate.css/animate.min.css';
import '../assets/router.css';

import XcIns from '../modules/xc';
import XcDetailIns from '../modules/xc-detail';
const Xc = AnimationWrapper(XcIns);
const XcDetail = AnimationWrapper(XcDetailIns);

export default class Entry extends Component {
  render = () => {
    return (
      <Router>
        <div className="router4-transition">
          <Route
            path="/a"
            children={props => <Xc {...props} />}
          />
          <Route
            path="/b"
            children={props => <XcDetail {...props} />}
          />
        </div>
      </Router>
    );
  };
}