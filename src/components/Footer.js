import { Box, Container } from '@mui/system'
import React from 'react'

export const Footer = () => {
  return (
    
    <footer classname="{classes.footer}" >
        <Box sx={{background:"#000", color:"#fff", textAlign:"center"}} p={4}>
    <Container >
      <paper classname="{classes.root}" elevation="{1}">
        <typography variant="h5" component="h3">
          Grupo Fantasma
        </typography>
        <typography component="p">
          @2022 todos los derechos reservados
        </typography>
      </paper>
      </Container>
      </Box>
    </footer>
    
  )
}
