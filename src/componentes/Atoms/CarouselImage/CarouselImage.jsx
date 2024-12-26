import { Image } from "react-bootstrap"

const CarouselImage = (props) => {
    const { src, alt } = props;
    return (
        <Image src={src} alt={alt}></Image>
    );
}

export default CarouselImage;