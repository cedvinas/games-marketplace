import Navbar from '@/Components/Navbar/Navbar'
import '../../css/index.scss';
import React from 'react'
import { usePage } from '@inertiajs/inertia-react';
import { useState } from 'react';
import Button from '@/Components/Button';
import { Inertia } from '@inertiajs/inertia';


const EditGame = () => {

    const game = usePage().props.game[0];
    const user = usePage().props.auth.user;
    const [title, setTitle] = useState(game.title);
    const [key, setKey] = useState(game.key);
    const [stock, setStock] = useState(game.stock);
    const [price, setPrice] = useState(game.price);
    const [imageUrl, setImageUrl] = useState(game.image_link);
    const [description, setDescription] = useState(game.description);



    const saveData = (e) => {
        e.preventDefault();
        Inertia.post('/dashboard/edit/' + game.id, { title, key, stock, price, imageUrl, description })
    }

    return (
        <div id='content'>
            <Navbar />
            <div id='main-content'>
                <section>
                    <h1>Edit game</h1>
                </section>
                <section>
                    <form onSubmit={saveData}>
                        <div className="relative z-0 mb-6 w-full group">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                            <label
                                htmlFor="floating_title"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="text"
                                    name="key"
                                    id="key"
                                    value={key}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                                    onChange={(e) => setKey(e.target.value)} />
                                <label
                                    htmlFor="key"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Game key</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="number"
                                    name="stock"
                                    id="stock"
                                    value={stock}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                                    onChange={(e) => setStock(e.target.value)} />
                                <label
                                    htmlFor="stock"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                            </div>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input
                                type="number"
                                name="price"
                                id="price"
                                value={price}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                                onChange={(e) => setPrice(e.target.value)} />
                            <label
                                htmlFor="price"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input
                                type="text"
                                name="image-url"
                                id="image-url"
                                value={imageUrl}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                                onChange={(e) => setImageUrl(e.target.value)} />
                            <label
                                htmlFor="image-url"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image URL</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <textarea
                                type="text"
                                name="description"
                                id="description"
                                value={description}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" style={{ height: 150 + 'px' }}
                                onChange={(e) => setDescription(e.target.value)} />
                            <label
                                htmlFor="description"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                        </div>
                        <Button type='submit' text='Submit' />
                    </form>
                </section>
            </div>
        </div>
    )
}

export default EditGame