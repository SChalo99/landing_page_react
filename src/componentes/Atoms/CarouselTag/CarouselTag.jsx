const CarouselTag = (props) => {
    const { label } = props;

    return (
        <div className="image-tag"><h3>{label}</h3></div>
    )
}

export default CarouselTag;