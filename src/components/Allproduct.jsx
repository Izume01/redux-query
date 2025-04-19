import React from 'react'
import { useGetAllProductsQuery } from '../app/service/dummyData'

export const Allproduct = () => {

    const {data , error , isLoading} = useGetAllProductsQuery()
  return (
    <div>
        <h1 className='text-center text-3xl font-bold'>All Products</h1>
        {isLoading && <h1 className='text-center text-2xl font-bold'>Loading...</h1>}
        {error && <h1 className='text-center text-2xl font-bold'>{error}</h1>}
        {data && data.products.map((product) => (
            <div key={product.id} className='flex justify-center items-center'>
            <div className='border border-gray-300 p-4 m-4'>
                <img src={product.image} alt={product.name} className='w-32 h-32' />
                <h2 className='text-xl font-semibold'>{product.name}</h2>
                <p>{product.description}</p>
                <p className='font-bold'>Price: ${product.price}</p>
            </div>
            </div>
        ))}
    </div>
  )
}
