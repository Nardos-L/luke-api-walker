import React, { useEffect, useState } from "react";
import axios from 'axios';

const People = (props) => {
    const [people, setPeople] = useState([]);
    const { id } = props;
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                setPeople(response.data)
                setData("")
            })
            .catch(() =>
                setData("https://im-01.forfun.com/fetch/w295-ch400-preview/ab/ab4d164a4fc0fbe885783d977abc4899.jpeg"))
    }, [id]);

    if (data) {
        return (
            <div>
                <p>This are not the droids you are looking for!</p>
                <img src={data} />
            </div>
        )
    } else {
        return (
            <div>
                <h1>{people.name}</h1>
                <p>Height: {people.height}</p>
                <p>Mass: {people.mass}</p>
                <p>Hair Color: {people.hair_color}</p>
                <p>Skin color: {people.skin_color}</p>
            </div>
        )
    }
}

export default People;