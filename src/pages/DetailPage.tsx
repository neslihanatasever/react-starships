import { Card } from "@mui/material"
import { CardContent } from "@mui/material"
import { Typography } from "@mui/material"

const DetailPage = () => {
  return (
    <>
    <Card sx={{ width:250, height: 250}}>
        <CardContent>
            <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Name : 
            </Typography>
            <Typography variant="h5" component="div">
                Gender : 
            </Typography>
            <Typography>
                Birthday Year :
            </Typography>
        </CardContent>
    </Card>
    </>
  )
}

export default DetailPage