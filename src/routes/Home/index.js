import { h } from 'preact'
import { Link } from 'preact-router/match'

const Home = () =>
    <div>
        welcome my friends to preact, next lesson we shall make some routes
        <Link href="/user">Go to user</Link>
        <Link href="/user/john">Go to John</Link>
    </div>

export default Home
