// import styles from '../../public/styles/Home.module.css'
import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap';
//Custom stuff
import styles from '../../../public/styles/components/NavBar.module.css'
import NavBarLink from './NavBarLink'
import NavBarBrand from './NavBarBrand';


export default function NavBar() {

    return (
        <div className={`d-flex justify-content-center`}>
            <Navbar bg="white" expand="lg" variant="light">
                <NavBarBrand destination="/" text="Cookies on Crack" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">   
                    <NavBarLink destination='checkout' text='Order Now' />
                    <NavBarLink destination='#about' text='About Cookies on Crack' />
                    <NavBarLink destination='/cookies' text='Cookies' />
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div> 
    )
}