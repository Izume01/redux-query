import React from 'react'
import { useGetProductByIdQuery } from '../app/service/dummyData'

export const SpecificProduct = () => {
    const {data , error , isLoading} = useGetProductByIdQuery(1)
  return (
    <div>
        <h1 className='text-center text-3xl font-bold'>Specific Product</h1>
        {isLoading && <h1 className='text-center text-2xl font-bold'>Loading...</h1>}
        {error && <h1 className='text-center text-2xl font-bold'>{error}</h1>}
        {data && (
            <div key={data.id} className='flex justify-center items-center'>
                <div className='border border-gray-300 p-4 m-4'>
                    <img src={data.image} alt={data.name} className='w-32 h-32' />
                    <h2 className='text-xl font-semibold'>{data.name}</h2>
                    <p>{data.description}</p>
                    <p className='font-bold'>Price: ${data.price}</p>
                </div>
            </div>
        )}
    </div>
  )
}
