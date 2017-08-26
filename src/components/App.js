import { h } from 'preact'
import Router from 'preact-router'

import Home from '../routes/Home'
import Person from '../routes/Person'

const App = () =>
    <Router>
        <Home path="/" />
        <Person path="/person/:id" />
        <div default>Sorry Mate , this page does not exist</div>
    </Router>

export default App
