import CarouselImage from '../../Atoms/CarouselImage';
import CarouselTag from '../../Atoms/CarouselTag';
import { useNavigate } from 'react-router-dom';

const CarouselContent = (props) => {
    const { data } = props;
    const navigate = useNavigate();
    return (
        <a onClick={() => { navigate(data.url) }}>
            <CarouselImage src={data.src} alt={data.alt}></CarouselImage>
            <div className='hover'></div>
            <CarouselTag tag={data.tag}></CarouselTag>
        </a>
    );
}

export default CarouselContent;