import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export  const productApi =createApi({
    reducerPath : "product",
    baseQuery : fetchBaseQuery({baseUrl : 'https://dummyjson.com/'}),
    endpoints : (builder) => ({
        // get all products
        getAllProducts : builder.query({
            query : () => '/products'
        }),

        getProductById : builder.query({
            query : (id) => `/products/${id}`
        }),

        // adding
        addProduct : builder.mutation({
            query : (newProduct) => ({
                url : '/products/add',
                method : 'POST',
                body : newProduct,
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
        })
    })
})

// `use ${getAllProducts}Query`

export const {
    useGetAllProductsQuery,
    useGetProductByIdQuery,
    useAddProductMutation
} =  productApi