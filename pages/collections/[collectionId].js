import { useRouter } from 'next/router'
import React from 'react'

const Collection = () => {
  const router = useRouter()
  console.log(router.query)
  return <h2>{router.query.collectionId}</h2>
}

export default Collection
