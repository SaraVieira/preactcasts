import { h, Component } from 'preact'
import { getAllPeople } from '../../lib/api'
import Character from '../../components/charecter'
import FavoriteAction from '../../components/favoriteActions'

class Home extends Component {
    state = {
        characters: [],
        favorites: []
    }

    componentDidMount() {
        getAllPeople().then(characters => this.setState({ characters }))
    }

    addFavorite(character) {
        this.setState({
            favorites: this.state.favorites.concat(character)
        })
    }

    removeFavorite(character) {
        const index = this.state.favorites.indexOf(character)

        this.setState({
            favorites: this.state.favorites.filter((c, i) => i !== index)
        })
    }

    render({}, { characters, favorites }) {
        return (
            <section>
                <h1>Favorites</h1>
                {favorites && favorites.length
                    ? <ul>
                        {favorites.map(favorite =>
                            <li>
                                <Character character={favorite} />
                            </li>
                        )}
                    </ul>
                    : 'Add You Favorites'}

                {characters && characters.length
                    ? <div>
                        <h1> Characters </h1>
                        <ul>
                            {characters.map(character =>
                                <li>
                                    <Character character={character} />
                                    <FavoriteAction 
                                        character={character}
                                        favorites={favorites} 
                                        addFavorite={() => this.addFavorite(character)} 
                                        removeFavorite={() => this.removeFavorite(character)} 
                                    />
                                </li>
                            )}
                        </ul>
                    </div>
                    : 'Loading'}
            </section>
        )
    }
}

export default Home
