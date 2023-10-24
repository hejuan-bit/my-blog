import React from "react";
import { navs } from "./config";
import Link from 'next/link';
import style  from "./index.module.scss";

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <section className={style.logArea}>BLOG-C</section>
            <section>
                {
                    navs?.map(nav => {
                        return(
                            <Link key={nav.label} href={nav?.value} className={style.linkArea}>
                                {nav.label}
                            </Link>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Navbar;