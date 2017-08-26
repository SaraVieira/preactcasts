import { h } from 'preact'

const FavoriteAction = ({
    favorites,
    character,
    addFavorite,
    removeFavorite
}) =>
    <div>
        {favorites && favorites.indexOf(character) === -1
            ? <button onClick={addFavorite}>Favorite</button>
            : <button onClick={removeFavorite}>Remove Favorite</button>}
    </div>

export default FavoriteAction
