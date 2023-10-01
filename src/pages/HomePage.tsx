import { Box, Card, CardActions, CardContent, Typography } from '@mui/material'
import * as React from 'react';

const HomePage = () => {

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
        </Box>
      );

  return (
    <>
    <Card sx={{ width:250, height: 250}}>
        <CardContent>
            <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Name : 
            </Typography>
            <Typography variant="h5" component="div">
                Gender : be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography>
                Birthday Year :
            </Typography>
        </CardContent>
    </Card>
    </>
  )
}
console.log("HomePage")
export default HomePage