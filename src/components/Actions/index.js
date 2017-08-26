import { h } from 'preact'

const Actions = ({ favorites, character, addCharacter, removeCharacter }) =>
    <div>
        {favorites && favorites.indexOf(character) === -1
            ? <button onClick={addCharacter}>Add favorite</button>
            : <button onClick={removeCharacter}>Remove favorite</button>}
    </div>

export default Actions
