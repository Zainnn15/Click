import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.mutation({
      query: (query) => `/products${query}`,
    }),
    getSingleProduct:build.mutation({
      query: (id) => `/products/${id}`,
    }),
    getProductsByCategory: build.query({
      query: (category) => `/products/category/${category}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsMutation, useGetProductsByCategoryQuery, useGetSingleProductMutation } = extendedApi;
