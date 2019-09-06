import React, { Component, Suspense, lazy } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { AnimationWrapper } from './AnimationWrapper';

import 'animate.css/animate.min.css';
import '../assets/router.css';

import XcIns from '../modules/xc';
import XcDetailIns from '../modules/xc-detail';
const Xc = AnimationWrapper(XcIns);
const XcDetail = AnimationWrapper(XcDetailIns);

class EntryWithoutLazy extends Component {
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

// 能分隔代码，但切换到 b 模块时，a 离场动画会加载，但 b 不会加载入场动画，只会加载 加载中...
const Xc = AnimationWrapper(lazy(() => import('../modules/xc')));
const XcDetail = AnimationWrapper(lazy(() => import('../modules/xc-detail')));

class EntryWithLazy extends Component {
  render = () => {
    return (
      <Router>
        <Suspense fallback={<div>加载中...</div>}>
          <Route
            path="/a"
            children={props => <Xc {...props} />}
          />
          <Route
            path="/b"
            children={props => <XcDetail {...props} />}
          />
        </Suspense>
      </Router>
    );
  };
}