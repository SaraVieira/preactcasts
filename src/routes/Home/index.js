import { h, Component } from 'preact'
import { getAllPeople } from '../../lib/api'
import Character from '../../components/Character'
import Actions from '../../components/Actions'

class Home extends Component {
    state = {
        characters: [],
        favorites: []
    }

    componentDidMount() {
        getAllPeople().then(characters =>
            this.setState({
                characters
            })
        )
    }

    addFavorite(character) {
        this.setState({
            favorites: this.state.favorites.concat(character)
        })
    }

    removeFavorite(character) {
        const index = this.state.favorites.indexOf(character)
        this.setState({
            favorites: this.state.favorites.filter((_, i) => i !== index)
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
                    : 'Add Favorites'}
                {characters && characters.length
                    ? <div>
                        <h1>Characters</h1>
                        <ul>
                            {characters.map(character =>
                                <li>
                                    <Character character={character} />
                                    <Actions 
                                        favorites={favorites} 
                                        character={character} 
                                        addCharacter={() =>
                                            this.addFavorite(character)}                                                    removeCharacter={() =>
                                            this.removeFavorite(
                                                character
                                            )}
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
