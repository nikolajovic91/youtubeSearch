import axios from 'axios'


const KEY = 'AIzaSyCUQm8joPUfDZU2Vfhj12GmlerZkSrdlQ0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }

})