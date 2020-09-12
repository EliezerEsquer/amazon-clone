import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal.lazy";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct.lazy";
import FlipMove from "react-flip-move";

function Checkout() {
	const [{ basket, user }] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt="Amazon ad"
					className="checkout__ad"
				/>
				<div>
					<h3>
						Hello, {user?.email.substring(0, user?.email.lastIndexOf("@"))}
					</h3>
					<h2 className="checkout__title">Your Shopping Basket</h2>
				</div>
				{basket.map((item, index) => (
					<CheckoutProduct
						key={index}
						id={item.id}
						title={item.title}
						image={item.image}
						price={item.price}
						rating={item.rating}
					/>
				))}
			</div>
			<div class="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
