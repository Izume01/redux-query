import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export  const productApi =createApi({
    reducerPath : "product",
    baseQuery : fetchBaseQuery({baseUrl : 'https://dummyjson.com/'}),
    endpoints : (builder) => ({
        // get all products
        getAllProducts : builder.query({
            query : () => '/products'
        })
    })
})

// `use ${getAllProducts}Query`

export const {
    useGetAllProductsQuery
} =  productApi