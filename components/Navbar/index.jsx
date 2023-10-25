'use client'

import React from "react";
import { navs } from "./config";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import style  from "./index.module.scss";

const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className={style.navbar}>
            <section className={style.logArea}>BLOG-C</section>
            <section>
                <ul className={style.linkwrap}>
                    {
                        navs?.map(nav => {
                            return(
                                <li key={nav.label} className={style.linkArea}>
                                    <Link 
                                        href={nav?.value}
                                        className={pathname?.startsWith(nav?.value) ? style.active : ''}
                                    >
                                        {nav.label}
                                    </Link>
                                </li>
                               
                            )
                        })
                    }
                </ul>
            </section>
        </div>
    )
}

export default Navbar;