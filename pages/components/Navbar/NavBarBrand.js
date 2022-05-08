
import { Navbar } from 'react-bootstrap';

export default function NavbarBrand({ destination, text }) {
    return (
        <div>
            <Navbar.Brand href={ destination }>{ text }</Navbar.Brand>
        </div>
    )
}