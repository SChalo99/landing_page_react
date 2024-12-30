import { Carousel } from "react-bootstrap";
import CarouselContent from "../../Molecules/CarouselContent";
import "./MyCarousel.css";
import img1 from "../../../../assets/house_1.jpg";
import img2 from "../../../../assets/house_2.jpg";
import img3 from "../../../../assets/house_3.jpg";
import img4 from "../../../../assets/house_4.jpg";
import img5 from "../../../../assets/house_5.jpg";
import img6 from "../../../../assets/house_6.jpg";

const MyCarousel = (props) => {
    const { custId } = props;
    const images = [
        [
            { src: img1, alt: 'Image 1', tag: 'Arlington, VA', url: '#' },
            { src: img2, alt: 'Image 2', tag: 'Rockville, MD', url: '#' },
        ],
        [
            { src: img3, alt: 'Image 3', tag: 'Indianapolis, IN', url: '#' },
            { src: img4, alt: 'Image 4', tag: 'Bethesda, MD', url: '#' },
        ],
        [
            { src: img5, alt: 'Image 5', tag: 'Los Angeles, CA', url: '#' },
            { src: img6, alt: 'Image 6', tag: 'Las Vegas, NV', url: '#' },
        ],
    ];

    return (
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <div className='carousel-slides' id={custId}>
                        <CarouselContent data={image[0]}></CarouselContent>
                        <CarouselContent data={image[1]}></CarouselContent>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default MyCarousel;