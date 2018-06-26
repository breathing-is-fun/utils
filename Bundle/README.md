# Bundle  
和react-router结合使用，用于按需加载
    
# 用法
``` javascript
import React, { Component } from 'react'
import { Route, HashRouter } from 'react-router-dom'

import Bundle from '../../util/Bundle'

const Popup = props => (
    <Bundle load={ () => import('../modules/Popup/Popup') }>
        { Popup => <Popup {...props}/> }
    </Bundle>
)

const Charts = props => (
    <Bundle load={ () => import('../modules/Charts/Charts') }>
        { Charts => <Charts {...props}/> }
    </Bundle>
)

export default class Router extends Component {
    render = () => {
        return (
            <HashRouter>
                <div>
                    <Route path='/' exact component={ Popup } />
                    <Route path='/charts' component={ Charts } />
                </div>
            </HashRouter>
        )
    }
}
```