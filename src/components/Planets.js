import React, { useEffect, useState } from "react";
import axios from 'axios';

const Planets = (props) => {
    const [planets, setPlanets] = useState([]);
    const { id } = props;
    const [data, setData] = useState();


    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                setPlanets(response.data)
                console.log(planets);
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
                <h1>{planets.name}</h1>
                <p>Climate: {planets.climate}</p>
                <p>Pupulation: {planets.population}</p>
                <p>Gravity: {planets.gravity}</p>
                <p>Terrain: {planets.terrain}</p>
            </div>)
    }

}

export default Planets;