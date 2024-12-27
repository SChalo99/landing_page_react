import CarouselImage from '../../Atoms/CarouselImage';
import CarouselTag from '../../Atoms/CarouselTag';
import { useNavigate } from 'react-router-dom';

const CarouselContent = (props) => {
    const { data } = props;
    const navigate = useNavigate();
    return (
        <div className='img-carousel-slide' >
            <CarouselImage src={data.src} alt={data.alt}></CarouselImage>
            <div className='hover' onClick={() => { navigate(data.url) }}></div>
            <CarouselTag tag={data.tag}></CarouselTag>
        </div >
    );
}

export default CarouselContent;