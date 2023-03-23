import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.mutation({
      query: (query) => `/products${query}`,
    }),
    getSingleProduct: build.mutation({
      query: (id) => `/products/${id}`,
    }),
    getProductsByCategory: build.query({
      query: (category) => `/products/category/${category}`,
    }),
    addProduct: build.mutation({
      query: (body) => ({
        url: `/products`,
        method: "POST",
        body: body
      }),
    }),
    updateProduct: build.mutation({
      query: (body) => ({
        url: `/products/${body._id}`,
        method: "PUT",
        body: body
      }),
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE"
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProductsMutation,
  useGetProductsByCategoryQuery,
  useGetSingleProductMutation,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = extendedApi;
