import React from 'react';

const ProductCard = ({
    name,
    type,
    grams,
    image
}) => {
    const [ isVisible, setIsVisible ] = React.useState(false);
    return(
        <div className='product-card'>
            <p>{name}</p>
            <p>{type}</p>
            <p>{grams}</p>
            <p>{image}</p>
        </div>
    );
};

export default ProductCard;
