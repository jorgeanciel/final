import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import invierno1 from '../images/invierno1.jpg'
import marcas2 from '../images/marcas2.jpg'
import deporte4 from '../images/deporte4.jpeg'
import lona1 from '../images/lona1.jpg'
import relajante from '../images/relajante.jpg'
import limpieza from '../images/limpieza.png'
const maxWidth = 345;
export const Feed = () => {
  return (
    <Box flex={6} p={2} >
      <Box sx={{textAlign:"center", marginBottom: "100px", marginTop:"150px"}}>
          <Typography gutterBottom variant="h2" component="div">
            Categorias Destacadas
          </Typography>
          
          </Box>
        <Stack direction="row" justifyContent="space-between" flexWrap="wrap" textAlign="center" mb={10}>
          
        <Card sx={{ maxWidth: 1000, marginBottom: "100px" }}  >
        <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={invierno1}
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Usar el mejor calzado durante todo el año
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Con la llegada de los meses mas frios del año muchas veces pensamos que tenemos 
            que dejar de lado nuestro calzado mas bonito, pero.....esto no es obligatorio.
            Por eso en tu tienda online Shoes Fantasma te traemos opciones para que puedas lucir
            de la mejor manera para esta estacion.
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 1000,marginBottom: "100px"  }} >
        <CardActionArea>
        <CardMedia
          component="img"
          height="380"
          image={marcas2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Las mejores marcas exclusivamente para ti
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nuestra experiencia en el sector de zapatillas hace que podamos ofrecerte las mejores
            marcas del mercado para hombre y mujer, que incluiran la garantia y 
            exclusividad que mereces.
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 1000,marginBottom: "100px"  }}>
        <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={deporte4}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Zapatillas Sport
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lo mas importante para una aventura es el equipamiento adecuado y sobre todo el CALZADO, que ayuda al deportista 
            a alcanzar sus metas y a conquistar sus retos. Tenemos para ti las mejores opciones.
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
        </Stack>
        <Box sx={{textAlign:"center", marginBottom: "30px"}}>
          <Typography gutterBottom variant="h2" component="div">
            Blog de zapatillas comodas
          </Typography>
          
          </Box>
        <Stack direction="row" justifyContent="space-between" flexWrap="wrap" >
        
        <Card sx={{ maxWidth: maxWidth,marginBottom: "10px" }}  >
        <CardMedia
          component="img"
          height="140"
          image={lona1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Zapatillas de lona para el verano: ventajas y beneficios
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Los modelos de lona son una opcion ideal para el verano, para esos pies mas delicados y problematicos.
            Sus tejidos frescos y ligeros nos aportan una mayor comodidad y transpirabilidad.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: maxWidth }} >
        <CardMedia
          component="img"
          height="140"
          image={relajante}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Como elegir zapatillas de casa para plantillas y pies delicados
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Las zapatillas de casa son esas grandes olvidadas cuando tenemos los pies delicados o usamos plantilllas.
            Pero nuestros pies tambien necesitan ese confort en casa.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: maxWidth }}>
        <CardMedia
          component="img"
          height="140"
          image={limpieza}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Como cuidar tus zapatillas segun el material
          </Typography>
          <Typography variant="body2" color="text.secondary">
            En Shoes Fantasme te enseñamos todos los trucos de limpieza de zapatillas que necesitas
            saber, para que tus modelos de zapatillas esten como el primer dia.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
        </Stack>
        <Stack sx={{background:"#000"}}>
        
        </Stack>
    </Box>
    
  )
}
