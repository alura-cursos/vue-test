import axios from 'axios'

export function getLeiloes () {
  return axios.get('http://localhost:3000/leiloes')
    .then(response => {
      return response.data
    })
}

export function getLeilao (id) {
  return axios.get(`http://localhost:3000/leiloes/${id}`)
    .then(response => {
      return response.data
    })
}

export function getLances (id) {
  return axios.get('http://localhost:3000/lances/', { params: { leilao_id: id } })
    .then(response => {
      return response.data.map(
        l => {
          l.data = new Date(l.data)
          return l
        }
      )
    })
}

export function createLance (lance) {
  return axios.post('http://localhost:3000/lances', lance)
    .then(response => {
      return response.data.id
    })
}

export function createLeilao (leilao) {
  return axios.post('http://localhost:3000/leiloes', leilao)
}
