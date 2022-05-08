import React, { useState, useEffect } from "react";
import Loading from "../../components/layout/Ui/Loading/Loading.component";
import ProductList from '../../components/ProductList/ProductList.component';

const AllProduct = () => {
	const [products, setProducts] = useState(false);
	const [isloading, setIsloading] = useState(false);
	useEffect(() => {
		setIsloading(true);
		fetch("https://fakestoreapi.com/products?limit=12")
			.then((response) => response.json())
			.then((data) => {
				setProducts(data);
				setIsloading(false);
			});
	}, []);
	if (isloading)
		return (
            <Loading/>
		);
	return (
		<div>
			<ProductList products={products}/>
		</div>
	);
};

export default AllProduct;
