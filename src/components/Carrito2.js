import React, { useContext } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DataContext } from "../context/DataProvider";
import { Box } from "@mui/system";
import styled from "styled-components";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";

import StripeCheckout from "react-stripe-checkout";



const KEY = process.env.REACT_APP_STRIPE;



const Wrapper = styled.div`
  padding: 20px;
  
`;

const Title = styled.h1`
  font-weight: 500;
  text-align: center;
  color: orange;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  font-size: 24px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
 
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

export const Carrito2 = () =>{
	const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  const tooglefalse = () => {
    setMenu(false);
	};
	
	const reduce = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
			}
			setCarrito([...carrito])
		})
	}
	const increase = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.cantidad +=1;
			}
			setCarrito([...carrito])
		})
	}

	const removeProducto = id =>{
		if(window.confirm("¿Quieres suspender el producto?")){
			carrito.forEach((item, index)=>{
				if(item.id === id){
					item.cantidad = 1;
					carrito.splice(index, 1)
				}
			})
			setCarrito([...carrito])
		}
	}


	

  const show1 = menu ? "carritos show" : "carrito";
	const show2 = menu ? "carrito show" : "carrito";
  return (
	<div className={show1}>
      <div className={show2} >
	  <div onClick={tooglefalse} className="carrito__close">
          <CloseIcon ></CloseIcon>
        </div>
        
		<Wrapper>
        <Title>Carrito</Title>
        <Top>
          
          <TopTexts>
            <TopText>Detalle de tu compra</TopText>
            
          </TopTexts>
          <TopButton type="filled">Seguir Comprando</TopButton>
        </Top>
        <Bottom>
          <Info>
            {carrito.map((producto) => (
              <Product>
                <ProductDetail>
                  <Image src={producto.image} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {producto.title}
                    </ProductName>
                    <ProductColor color={producto.color} />
                    
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
				  	<AddCircleIcon onClick={() => increase(producto.id)} sx={{color:'green'}}/>
                    <ProductAmount>{producto.cantidad}</ProductAmount>
                    <RemoveCircleIcon onClick={() => reduce(producto.id)} sx={{color:'red'}}/>
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {producto.price * producto.cantidad}
                  </ProductPrice>
                </PriceDetail>
				<PriceDetail>
                  <DeleteIcon onClick={() => removeProducto(producto.id)} sx={{color:'red'}}/>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Detalle de pago</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Envio Estimado</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Descuento de envio</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Shoes Fantasma"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${carrito.total}`}
              amount={total * 100}
				
              
            >
              <Button>Hacer Pedido</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
    
	</div>
    </div>
  );
}