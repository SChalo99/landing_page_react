import { Nav } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
const MyTab = (props) => {
    const { label, url } = props;
    const navigate = useNavigate();

    const tabStyle = {
        color: "white",
        width: "100%",
        height: "80px",
    };

    return (
        <Nav.Link onClick={() => { navigate(url) }} style={tabStyle}>{label}</Nav.Link>
    )
}


export default MyTab;