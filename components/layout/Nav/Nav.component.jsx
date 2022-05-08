import React from "react";
import Link from "next/link";
import useLocation from "../../../hooks/use-location.hook";
const Nav = () => {
	const { handleLocation, latLong, locationErrorMsg } = useLocation();
    console.log({latLong,locationErrorMsg});
	const handleLocationBtnClick = () => {
		handleLocation();
	};
	return (
		<nav className="relative container mx-auto p-5 mb-10 flex-row flex">
			<div className="flex basis-5/6 items-center justify-start ">
				<div className="hidden space-x-6 md:flex ">
					<Link href="/">
						<a className="py-3 px-5 font-bold hover:bg-gray-100">
							Home
						</a>
					</Link>
					<Link href="/allProduct">
						<a className="py-3 px-5 hover:bg-gray-100">
							Products
						</a>
					</Link>
					<a href="" className="py-3 px-5 hover:bg-gray-100">
						About
					</a>
				</div>
			</div>
			<div className="flex basis-1/6 justify-end">
				<button
					className="text-sm bg-black text-white px-7 antialiased"
					onClick={handleLocationBtnClick}
				>
					Access my location
				</button>
			</div>
		</nav>
	);
};

export default Nav;
