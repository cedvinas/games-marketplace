import React from 'react';
import Navbar from '../Components/Navbar/Navbar'
import '../../css/index.scss'
import { usePage } from '@inertiajs/inertia-react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';




export default function Cart() {
	const games = usePage().props.basket.items;
	const [totalPrice, setTotalPrice] = useState(usePage().props.basket.totalPrice);
	const user = usePage().props.auth.user;
	console.log(user);





	const handleChange = (e) => {
		games.forEach(game => {
			if (game.gameId == e.target.name) {
				game.quantity = Number(e.target.value);
				game.total = game.quantity * game.unitPrice;
			}
			countTotalPrice(game.total);
		})
	};





	const countTotalPrice = (total) => {
		let test = 0;
		games.forEach(game => {
			test += game.total;
			console.log('test' + test);
		})
		setTotalPrice(totalPrice + total);
	}

	const checkout = (e) => {
		e.preventDefault();
		Inertia.post('/cart/checkout', [games, user.id]);
	}













	return (
		<div id='content'>
			<Navbar />
			<div id='main-content'>

				<section>
					<h1>Your cart</h1>
				</section>

				<section>
					<table className='table-auto'>
						<thead>
							<tr>
								<th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Title</th>
								<th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Price</th>
								<th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Quantity</th>
							</tr>
						</thead>
						{
							games ?
								<tbody className='bg-white dark:bg-slate-800'>
									{games.map((game) => {
										return (
											<tr key={game.gameId}>
												<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{game.title}</td>
												<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{game.unitPrice}€</td>
												<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
													<input min='1' max={game.stock} onChange={handleChange} name={game.gameId} type="number" defaultValue={game.quantity} />
												</td>
											</tr>
										)
									})}
									<th>Total price: {totalPrice}€</th>

								</tbody>
								: <span>Loading...</span>
						}

					</table>
					<InertiaLink as='button' href='/cart/clear'>Clear</InertiaLink>
					<InertiaLink onClick={(e) => checkout(e)} as='button'>Checkout</InertiaLink>
				</section>

			</div>
		</div >
	)
}