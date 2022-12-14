import React from "react";
import '../../../css/Navbar.scss';
import NavLink from "./NavLink";
import { Link, usePage } from "@inertiajs/inertia-react";


export default function Navbar() {

    const user = usePage().props.auth.user;
    // console.log(user.id);

    return (
        <aside>
            <nav>
                <div id="nav-header">
                    <div id="logo">
                        <img src="https://www.logosurfer.com/wp-content/uploads/2018/03/marketplace-logo_1.png" alt="logo" />
                    </div>

                    <div id="nav-links">
                        <ul>
                            <NavLink url='/' text='Home' />
                            {user ? <NavLink url='/cart/show' text='Cart' /> : ''}
                            {/* {user ? <Link href='/dashboard' as="li" className="nav-link" method="post" data={{ role: user.role }}>Dashboard</Link> : ''} */}
                            {user ? <Link href='/dashboard' as="li" className="nav-link">Dashboard</Link> : ''}

                        </ul>
                    </div>
                </div>

                <div id="nav-footer">
                    <div id="auth">
                        {

                            !user ?
                                <ul>
                                    <NavLink url='/login' text='Login' />
                                    <NavLink url='/register' text='Register' />
                                </ul>
                                :
                                <ul>
                                    <NavLink url={route('logout')} method='post' text='Logout' />
                                </ul>
                        }
                    </div>
                </div>
            </nav>
        </aside>
    )
}