import { apiSlice } from '../api/apiSlice';
import { NewProductBody, Product } from '../../utils/types';

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFeaturedProducts: builder.query<Product[], {}>({
            query: () => ({
                url: '/products/featured',
                method: 'GET'
            })
        }),
        getProduct: builder.query<Product, { productId: number }>({
            query: ({ productId }) => ({ url: `/products/${productId}` })
        }),
        createProduct: builder.mutation<{}, NewProductBody>({
            query: (product) => ({
                url: '/products',
                method: 'POST',
                body: product
            })
        }),
        editProduct: builder.mutation<{}, { productId: number, product: NewProductBody }>({
            query: ({ productId, product }) => ({
                url: `/products/${productId}`,
                method: 'PATCH',
                body: product
            })
        }),
        getAllProducts: builder.query<Product[], { page: number, query?: string }>({
            query: ({ page, query = '' }) => ({
                url: `/products/search?page=${page}&query=${query}`,
                method: 'GET'
            })
        })
    })
});

export const {
    useGetProductQuery,
    useLazyGetProductQuery,
    useCreateProductMutation,
    useEditProductMutation,
    useGetFeaturedProductsQuery,
    useGetAllProductsQuery
} = productApiSlice;
