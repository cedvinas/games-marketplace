import React from 'react';
import Navbar from '../Components/Navbar/Navbar'
import '../../css/index.scss'
import { usePage } from '@inertiajs/inertia-react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { useState } from 'react';



export default function Cart() {

	console.log(usePage().props.games);
	const games = usePage().props.games;
	const [quantity, setQuantity] = useState({});
	const [totalPrice, setTotalPrice] = useState(0);

	const [cart, setCart] = useState([]);
	console.log(cart);

	const countQuantity = (e, price) => {
		setQuantity({
			...quantity,
			[e.target.name]: e.target.value
		})



		setCart([
			...cart,
			{
				[e.target.name]: e.target.value,
				'price': price
			}
		])
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
								<th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Action</th>
							</tr>
						</thead>
						{
							games ?
								<tbody className='bg-white dark:bg-slate-800'>
									{games.map(({ id, title, price }) => {
										return (
											<tr key={id}>
												<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{title}</td>
												<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{price}€</td>
												<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
													<input name={id} type="number" defaultValue={0} onChange={(e) => countQuantity(e, price)} />
												</td>

												<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
													<InertiaLink href={'/dashboard/edit/' + id} as='button'>Edit</InertiaLink>
													<InertiaLink href={'delete/' + id} as='button'>Delete</InertiaLink>
												</td>
											</tr>
										)
									})}
									<th>Total price: {totalPrice}€</th>

								</tbody>
								: <span>Loading...</span>
						}

					</table>
				</section>

			</div>
		</div >
	)
}