import { Link } from "react-router-dom";
import styled from 'styled-components';
import { ButtonContainer } from "./Button";

const Navbar = () => {
    return (
        
        
            <Nav className="navbar navbar-dark px-sm-5 ">
                <Link to='/'>
                    <i className="fas fa-phone-alt navbar-brand" ></i>
                </Link>
                <ul className="navbar-nav align-items-center ">
                    <li className='nav-item ml-5'>
                        <Link to='/' className="nav-link">
                            products
                        </Link>
                     </li>
                </ul>
            <Link className=" ml-auto" type="button" to='/cart'>
                <ButtonContainer className="">
                <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
                    my cart
                </ButtonContainer>
            </Link>
            </Nav>
        
    )
}
const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;

export default Navbar 
