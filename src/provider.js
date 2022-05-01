import React, { createContext, useEffect, useState } from 'react'

function Fprovider() {
    const [api, setApi] = useState();
    useEffect(() => {
        fetch('https://enigmatic-garden-34822.herokuapp.com/https://api.hgbrasil.com/weather?key=6fe9f995&user_ip=remote')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            const rr = json.results.city;
            setApi(rr);
        })

    },[])

  return (
    <div>{api}</div>
  )
}

export default Fprovider