import { h } from 'preact'

const Character = ({ character }) =>
    <div>
        <img
            width="60"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        />
        <p>
            {character.name}
        </p>
    </div>

export default Character
