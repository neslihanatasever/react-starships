import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface CharacterData {
    manufacturer: string;
    name: string;
    starship_class: string;
}

function HomePage() {
    const [starships, setStarships] = useState<CharacterData[]>([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/')
            .then((response) => {
                setStarships(response.data.results);
            })
            .catch((error) => {
                console.error('SWAPI isteği başarısız: ', error);
            });
    }, []);

    console.log(starships);

    return (
        <div>
            {starships.map((starship, index) => (
                <Link key={index} to="/detail-page">
                <Card sx={{ width: 600, height: 350, background: 'bisque', borderRadius: 10, pt: 5, marginBottom: 10 }}>
                    <CardContent sx={{ display: "flex" }}>
                        <Typography>
                            Name :  {starship.name}
                        </Typography>
                        <Typography component="div">
                            Starship Class : {starship.starship_class}
                        </Typography>
                        <Typography>
                            Birthday Year : {starship.manufacturer}
                        </Typography>
                    </CardContent>
                </Card>
                </Link>
            ))}
        </div>
    )
}

export default HomePage;
