import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import imglog from './img/imglog.jpeg';
import {ButtonContainer} from './Button';
import Title from "./Title";

export default class Navbar extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#A5F6D4',fontSize:'1.3 rem', textTransform:'capitalize', width:'100%',height:'80px', color:'#FFFFFF'}}>
               <Link to='/'>
                  <img src={imglog} alt="store" style={{width:'14%',height:'100%',marginLeft:'20PX',borderRadius:'15PX'}}  />
               </Link> 
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                    <Title name="" title="SHYNK"/>
                    </Link>
                 </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                  <ButtonContainer style={{ border:'4px solid #5E8A07',backgroundColor:'#DBFFEF', textAlign:'center',width:'10%',height:'9%', color:'#447F1C',top:"8px",left:'89%',position: 'absolute',borderRadius:'15PX'}}>
                      <i className="fas fa-cart-plus"><h3 >Panier</h3></i>
                  </ButtonContainer>
               </Link>
            </div>
        )
    }
}
// const NavWrapper = styled.nav`
// background:var(--mainBlue);
// .nav-link{
//     color:var(--mainWhite) !important;
//     ,font-size:1.3 rem,
//     text-transform:capitalize,
// }
//`;
