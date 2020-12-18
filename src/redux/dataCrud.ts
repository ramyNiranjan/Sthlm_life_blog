import axios from 'axios'
const DATA_URL = 'https://jsonplaceholder.typicode.com/todos/'
export function getData() {
  return axios.get(DATA_URL)
}
