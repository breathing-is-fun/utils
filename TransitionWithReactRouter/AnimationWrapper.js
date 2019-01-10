import React, { Component } from 'react';

import { CSSTransition } from 'react-transition-group';

export const AnimationWrapper = TargetComponent => class extends Component {
  static displayName = 'AnimationWrapper';

  render() {
    return (
      <CSSTransition
        in={!!this.props.match}
        classNames={{
          enter: 'animated router',
          enterActive: 'slideInRight faster',
          exit: 'animated router',
          exitActive: 'slideOutLeft faster'
        }}
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        <TargetComponent {...this.props} />
      </CSSTransition>
    );
  }
};