import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCard } from '../Store/Slices/CardSlices';

export default function ProductCard() {
   
   const items = useSelector((state)=>state.AllCart.items)
    const dispatch = useDispatch()
             

  return (
    <div className="m-2">
        
        <MDBRow>
            {items.map((e)=>
        <MDBCol md='4' key={e.id}>
      <MDBCard>
      <MDBCardImage src={e.img} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{e.title}</MDBCardTitle>
        <MDBCardText>{e.price} </MDBCardText>
        <MDBBtn href='#' onClick={()=>dispatch(AddToCard(e))}>Add to Card</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    )}
    </MDBRow>
    </div>
  );
}