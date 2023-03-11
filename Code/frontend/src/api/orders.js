import { api } from '../store/middleware/api'

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        submitOrder: build.mutation({
            query: (body) => ({
                url: `/orders`,
                method: "POST",
                body
            }),
        }),
        getOrdersByUser: build.mutation({
            query: (userId) => `/orders/user/${userId}`
        }),
    }),
    overrideExisting: false,
})

export const { useSubmitOrderMutation, useGetOrdersByUserMutation } = extendedApi