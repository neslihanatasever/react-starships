import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

interface CharacterData {
    crew: number[];
    consumables?: string;
}

function DetailPage() {
    const [detailData, setDetailData] = useState<CharacterData[]>([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/') 
            .then((response) => {
                setDetailData(response.data.results);
            })
            .catch((error) => {
                console.error('API isteği başarısız: ', error);
            });
    }, []);

    return (
        <div>
            <Card sx={{ width: 600, height: 350, background: 'bisque', borderRadius: 10, pt: 5 }}>
                <CardContent sx={{ display: "flex" }}>
                    <Typography>
                        vgfsbfg{detailData.crew?.join(', ')}
                    </Typography>
                    <Typography component="div">
                        aaaa{detailData.consumables}
                    </Typography>
                    <Typography>
                        kkkkkkk
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default DetailPage;
