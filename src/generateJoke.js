// const generateJoke = () => {
//     return "I don't trust stairs. They're always up to something."
// }
////////////////////////////////////////
import axios from 'axios'

const generateJoke = () => {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    axios.get('https://icanhazdadjoke.com', config)
                .then(res => {
                    // console.log(res.data)
                    document.getElementById('joke').innerHTML = res.data.joke
                })
}

export default generateJoke