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
            query: (data) => `/orders/user/${data.userId}?page=${(data.page || 1)}`
        }),
    }),
    overrideExisting: false,
})

export const { useSubmitOrderMutation, useGetOrdersByUserMutation } = extendedApi