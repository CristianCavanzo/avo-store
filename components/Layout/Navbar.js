import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <menu>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/avo/2zd33b8c">
                    <a>Avo</a>
                </Link>
            </menu>
            {/* <menu>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </menu> */}
        </nav>
    );
};

export default Navbar;
