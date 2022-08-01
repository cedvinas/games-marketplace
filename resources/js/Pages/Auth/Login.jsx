import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar/Navbar';
import '../../../css/index.scss'
import '../../../css/auth.scss'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div id='content'>
            <Navbar />
            <div id='main-content'>
                <section>
                    <h1>Login</h1>
                </section>
                <section>
                    {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                    <ValidationErrors errors={errors} />
                    <form onSubmit={submit}>
                        <div className="relative z-0 mb-6 w-full group">
                            {/* <div className="relative z-0 mb-6 w-full group">
                                <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                <label htmlFor="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div> */}

                            <Input
                                type="email"
                                name="email"
                                value={data.email}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                            <Label forInput="email"
                                value="Email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" />

                        </div>

                        <div className="relative z-0 mb-6 w-full group">

                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                                autoComplete="current-password"
                                handleChange={onHandleChange} />
                            <Label forInput="password"
                                value="Password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" />

                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                                <span>Remember me</span>
                            </label>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                >
                                    <span>Forgot your password?</span>
                                </Link>
                            )}

                            <Button text='Log in' />
                        </div>
                    </form>
                </section>
            </div>
        </div >
        // <Guest>
        //     <Head title="Log in" />

        //     {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

        //     <ValidationErrors errors={errors} />

        //     <form onSubmit={submit}>
        //         <div>
        //             <Label forInput="email" value="Email" />

        //             <Input
        //                 type="text"
        //                 name="email"
        //                 value={data.email}
        //                 className="mt-1 block w-full"
        //                 autoComplete="username"
        //                 isFocused={true}
        //                 handleChange={onHandleChange}
        //             />
        //         </div>

        //         <div className="mt-4">
        //             <Label forInput="password" value="Password" />

        //             <Input
        //                 type="password"
        //                 name="password"
        //                 value={data.password}
        //                 className="mt-1 block w-full"
        //                 autoComplete="current-password"
        //                 handleChange={onHandleChange}
        //             />
        //         </div>

        //         <div className="block mt-4">
        //             <label className="flex items-center">
        //                 <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

        //                 <span className="ml-2 text-sm text-gray-600">Remember me</span>
        //             </label>
        //         </div>

        //         <div className="flex items-center justify-end mt-4">
        //             {canResetPassword && (
        //                 <Link
        //                     href={route('password.request')}
        //                     className="underline text-sm text-gray-600 hover:text-gray-900"
        //                 >
        //                     Forgot your password?
        //                 </Link>
        //             )}

        //             <Button className="ml-4" processing={processing}>
        //                 Log in
        //             </Button>
        //         </div>
        //     </form>
        // </Guest>
    );
}
