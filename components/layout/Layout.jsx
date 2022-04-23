import Nav from "./Nav/Nav";

const Layout = (props) => {
    return (
		<>
			<Nav />
			<div className="container mx-auto">{props.children}</div>
		</>
	);
};

export default Layout;