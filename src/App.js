import React from 'react'

const ajust = e => {
  fetch('http://localhost:8080/change', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8080'
    },
    body: JSON.stringify({
      name: 'Hubot',
      login: 'hubot',
    })
  }).catch(err => console.log(err))
}

export default React.createClass({
  render() {
    return <div>
      <h2>Welcome to React</h2>
      <input class="colorRange" type="range" onChange={ajust} min="0" max="255" />
    </div>
  }
})
