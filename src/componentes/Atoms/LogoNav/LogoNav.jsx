import { Navbar } from "react-bootstrap";

const LogoNav = (props) => {
    const { src } = props;
    return (
        <Navbar.Brand href="#home">
            <img
                src={src}
                width="200px"
                className="d-inline-block align-top"
                alt="TopBar Logo"
            />
        </Navbar.Brand>
    );
}

export default LogoNav;