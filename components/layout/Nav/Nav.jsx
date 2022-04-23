import React from 'react';

const Nav = () => {
    return (
		<nav className="relative container mx-auto p-5">
			<div className="flex items-center justify-center">
				<div className="hidden space-x-6 md:flex ">
					<a href="" className="hover:bg-gray-600">
						Home
					</a>
					<a href="" className="hover:bg-gray-600">
						Product
					</a>
					<a href="" className="hover:bg-gray-600">
						About
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Nav;