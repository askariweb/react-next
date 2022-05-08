import Image from "next/image";

const ProductDetail = ({ product }) => {
	console.log(product);

	return (
		<div className="flex flex-row flex-wrap justify-center">
			<div className="flex base-1/2 grow justify-center">
				<Image
					alt={product.title}
					src={product.image}
					width={500}
					height={500}
				/>
			</div>
			<div className="basis-1/2 flex flex-col">
				<h1 className="font-bold text-lg">{product.title}</h1>
				<p className="font-medium text-gray-700 mt-20">
					{product.description}
				</p>
				<div className="flex flex-row mt-40">
					<div className="basis-1/2">
						<div className="font-semibold text-4xl">
							$
							{new Intl.NumberFormat("en-IN", {
								maximumSignificantDigits: 3,
							}).format(product.price)}
						</div>
					</div>
					<div className="basis-1/2 flex justify-end">
						<button className="bg-black text-white px-20 py-4">
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
