import { Nav } from 'react-bootstrap';


export default function NavbarLink( {destination, text} ) {
    return (
        <div>
            <Nav.Link href={destination}>{ text }</Nav.Link>
        </div>
    )
}