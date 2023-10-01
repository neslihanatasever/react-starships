import { Card, CardContent, Typography } from '@mui/material'
import axios from 'axios';
import { useEffect, useState } from 'react';

interface CharacterData {
    manufacturer: string;
    name: string;
    starship_class: string;
}

function HomePage() {

    const [characterData, setCharacterData] = useState<CharacterData>({ name: '', starship_class: '', manufacturer: '' });

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/22')
            .then((response) => {
                setCharacterData(response.data);
            })
            .catch((error) => {
                console.error('SWAPI isteği başarısız: ', error);
            });
    }, []);

    console.log(characterData)

    return (
        <>
            <Card sx={{ width: 600, height: 350}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Name :  {characterData.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        Starship Class : {characterData.starship_class}
                    </Typography>
                    <Typography>
                        Birthday Year : {characterData.manufacturer}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}
console.log("HomePage")
export default HomePage