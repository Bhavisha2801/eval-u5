import React, { useEffect } from "react";

const Home = () => {

    const [home , setHome] = React.useState([])
    


  useEffect(() => {
    fetch(`https://masai-api-mocker.herokuapp.com/user/<username>`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .then((res) => setHome(res))
  })





    return (
        <div>
            {home.name}
            home
        </div>
    )
}

export { Home }