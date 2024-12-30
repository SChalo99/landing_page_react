import { Image } from "react-bootstrap";

const LogoFooter = (props) => {
    const { src, alt } = props;
    return (
        <Image src={src} alt={alt} width={"23vh"} roundedCircle></Image>
    );
}

export default LogoFooter;