import ProductDetail from "../../components/ProductDetail/ProductDetail.component";
import Head from 'next/head'
const ProductShow = (props) => {

	return (
		<>
			<Head>
				<title>{props.product.title}</title>
			</Head>
			<ProductDetail product={props.product} />
		</>
	);
};

export async function getStaticPaths() {
	let product = [];
	const response = await fetch(process.env.PRODUCT_LIST_FETCH_URL_LIMIT);
	const data = await response.json();
	product = data;
	return {
		paths: product.map((item) => ({
			params: { id: item.id.toString() },
		})),
		fallback: false,
	};
}

export async function getStaticProps(context) {
   
	let product = [];
	const response = await fetch(
		`${process.env.PRODUCT_LIST_FETCH_URL + context.params.id}`
	);
	const data = await response.json();
	product = data;
	return {
		props: {
			product: product,
		},
	};
}
export default ProductShow;
