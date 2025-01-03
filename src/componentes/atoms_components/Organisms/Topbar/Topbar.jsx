import LogoNav from "../../Atoms/LogoNav";
import TabsGroup from "../../Molecules/Tabs";
import { Navbar } from "react-bootstrap";
import logo from "../../../../assets/logo_rectangle.png";
import "./Topbar.css";

const Topbar = () => {
    const tabs = [
        { label: "Home", url: "/" },
        { label: "About", url: "/" },
        { label: "Our Projects", url: "/" },
        { label: "Testimonials", url: "/" },
        { label: "Contact", url: "/" },
    ];

    return (
        <Navbar expand="lg" className="bg-body-tertiary nav-bar">
            <LogoNav src={logo}></LogoNav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <TabsGroup tabs={tabs}></TabsGroup>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Topbar;