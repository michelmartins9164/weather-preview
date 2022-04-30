import React, {useEffect, useState, Fragment} from 'react'

function App() {

  useEffect(() => {
    fetch('https://enigmatic-garden-34822.herokuapp.com/http://apiadvisor.climatempo.com.br/api/v1/climate/rain/locale/3477?token=01c61743ca218f8a07f65a3b36d5578d')
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    })
  },[])

  return (
    <div>
      Rodando 
    </div>
    )
}

export default App