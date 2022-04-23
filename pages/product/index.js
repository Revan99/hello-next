import React from 'react'
import style from '../../styles/Prodcut.module.css'

function Product() {
  return (
    <ul className={style['product-list']}>
        <li><h1>product 1</h1></li>
        <li><h1>product 2</h1></li>
        <li><h1>product 3</h1></li>
    </ul>
  )
}

export default Product