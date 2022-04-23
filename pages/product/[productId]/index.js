import React from 'react'
import { useRouter } from 'next/router'

function ProductDetail() {
    const router = useRouter()
    const productId = router.query.id
  return (
    <h1>Detail of Product {productId}</h1>
  )
}

export default ProductDetail