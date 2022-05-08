import Nav from "./Nav/Nav.component";

const Layout = (props) => {
    return (
		<>
			<Nav />
			<div className="container mx-auto">{props.children}</div>
		</>
	);
};

export default Layout;