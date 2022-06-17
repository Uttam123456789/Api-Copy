import React, { useState, useEffect } from 'react';


const ViewPhoto = () => {
    const [photo, setPhoto] = useState([]);


    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
            .then((response) => response.json())
            .then((json) => {
                setPhoto(json)
            })
    }
   

    useEffect(() => {
        fetchData();
    }, [])

  return (
    <div>
        <img src={photo.url} alt="" />
    </div>
  )
}

export default ViewPhoto;