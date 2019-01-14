import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './assets/animate.css'

export default class index extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount = () => {
    
  }

  // index 会渐现
  render = () => {
    return (
      <div className='animate-appear'>index</div>
    )
  }
}