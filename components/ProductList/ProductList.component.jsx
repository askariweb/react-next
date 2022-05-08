import React from 'react';
import ProductItem from '../ProductItem/ProductItem.component';

const ProductList = (props) => {
    return (
		<div className="flex flex-row flex-wrap content-start items-stretch">
			{props.products.map((item) => (
				<ProductItem key={item.id} product={item} />
			))}
		</div>
	);
};


export default ProductList;