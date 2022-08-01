import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../context/DataProvider";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export const ProductoItem = ({title, image, category, price, id}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;



  return (
    
    <div key={id} className="producto">
      <Link to={`/producto/${id}`}>
      <div className="producto__img">
        <img src={image} alt={title} />
      </div>
      </Link>
      <div className="producto__footer">
        <Typography variant="h1" color="primary">{title}</Typography>
        <Typography variant="body1" color="primary">{category}</Typography>
        <Typography variant="body1" color="error" className="price">${price} </Typography>
        {/*<p>{category}</p>
        <p className="price">${price} </p>*/}
        
        
        
      </div>
      <div className="bottom">
        <Button variant="outlined" endIcon={<VisibilityIcon />} color="primary" size="large" component={Link} to={`/producto/${id}`}>
          Vista
        </Button>
        <Button variant="outlined" endIcon={<AddShoppingCartIcon />} color="success" onClick={() => addCarrito(id)}>
        Añadir 
        </Button>
        
          
        
        {/*
        <button onClick={() => addCarrito(id)} className="btn">Añadir al carrito</button>
        <div>
        <Link to={`/producto/${id}`} className="btn">Vista</Link>
        </div>
        */}
      </div>
    </div>

    
  );
};
