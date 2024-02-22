import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCardTotal } from '../Store/Slices/CardSlices';

export default function Navbar() {
  const [openNavSecond, setOpenNavSecond] = useState(false);

  const {totalQunently,card} = useSelector((e)=>e.AllCart)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCardTotal())
  },[card])

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavSecond}>
          <MDBNavbarNav>
           
          <Link to= "/"> All Product</Link>
        <NavLink to= "/card" className='btn-primary ms-5'>CART[{totalQunently}]</NavLink>
            <MDBNavbarLink disabled href='/' tabIndex={-1} aria-disabled='true'>
              Disabled
            </MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}