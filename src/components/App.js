import { h } from 'preact'
import Router from 'preact-router'

import Home from '../routes/Home'
import User from '../routes/User'

const App = () =>
    <Router>
        <Home path="/" />
        <User path="/user" />
        <User path="/user/:name" />

        <div default>Sorry Mate , this page does not exist</div>
    </Router>

export default App
