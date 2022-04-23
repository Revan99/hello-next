import React from 'react'
import Link from 'next/link'

import style from '../../styles/Product.module.css'

function Product() {
    return (
        <ul className={style['product-list']}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <li>
                <Link href="/product/1">
                    <a>
                        <h1>product 1</h1>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/product/2">
                    <a>
                        <h1>product 2</h1>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/product/3">
                    <a>
                        <h1>product 3</h1>
                    </a>
                </Link>
            </li>
        </ul>
    )
}

export default Product
