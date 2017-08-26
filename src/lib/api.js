import axios from 'axios'

export const getAllPeople = () =>
    axios
        .get(
            'https://gateway.marvel.com/v1/public/characters?apikey=5ac6aacdd81045292c9e381f8614c1dd'
        )
        .then(rsp => rsp.data.data.results)
        .catch(rsp => console.error(rsp))