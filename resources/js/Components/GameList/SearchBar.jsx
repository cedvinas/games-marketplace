import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { useState, useEffect, useRef } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";

export default function SearchBar(props) {
    const user = usePage().props.auth.user;
    console.log(user);
    const { options, onInputChange } = props;
    const dropDown = useRef();
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.addEventListener('click', (event) => {
            event.stopPropagation();
            dropDown.current.style.display = 'flex';
            onInputChange(event);
        });
        document.addEventListener('click', (event) => {
            dropDown.current.style.display = 'none';
        });
    }, []);

    const handleClick = () => {
        Inertia.post(route('add.item'), { 'gameId': option.id, 'quantity': 1, 'unitPrice': option.price, 'key': option.cd_key, 'stock': option.stock });
    };

    return (
        <div className="search-bar">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input
                    autoComplete="off"
                    type="search"
                    id="default-search"
                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for a game..." required
                    ref={inputRef}
                    onChange={onInputChange} />



            </div>
            <div ref={dropDown} className="w-100 flex-col text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {options.map((option, index) => {
                    return (
                        <div className=" py-2 px-4 w-full text-white bg-blue-700 rounded-t-lg border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600">
                            <a
                                key={index}
                                href={'/game/' + option.id}
                                aria-current="true"
                                className="w-full flex justify-between items-center"
                                onClick={(e) => {
                                    inputRef.current.value = option;
                                }}>
                                <div>
                                    <img className="w-20 h-15" src={option.image_link} alt="image" />
                                </div>
                                <div>
                                    <span>{option.title}</span>
                                </div>
                                <div></div>

                            </a>
                        </div>

                    );
                })}


            </div>
        </div >
    )
}