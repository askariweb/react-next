import React from 'react';
import Image from 'next/image';
const ProductItem = (props) => {
	return (
		<div className="flex flex-col basis-1/4 p-10 ">
			<div className="flex relative justify-center bg-slate-100 p-5">
				<Image
					src={props.product.image}
					alt={props.product.title}
					width={200}
					height={200}
				/>
				<div className="absolute  px-2 text-xs right-0">
					<svg
						className="h-8 w-8 text-gray-600 bg-slate-100 hover:text-red-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						/>
					</svg>
				</div>
			</div>
			<div className="flex text-base m-5 max-h-6 text-ellipsis overflow-hidden ">
				{props.product.title}
			</div>
			<div className="flex flex-row my-5">
				<div className="flex flex-col  basis-1/2  text-lg text-red-500 p-1 px-1 py-2">
					${props.product.price}
				</div>
				<div className="flex flex-col basis-1/2 text-center p-1 px-1 py-2 text-white bg-gray-800 rounded-full self-baseline">
					Add to cart
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
