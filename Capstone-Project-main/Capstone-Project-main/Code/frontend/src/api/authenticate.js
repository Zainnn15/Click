import { api } from '../store/middleware/api'

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        getRegistered: build.mutation({
            query: (body) => ({
                url: `/users`,
                method: "POST",
                body
            }),
        }),
        signIn:build.mutation({
            query:(body)=>({
                url:"/auth",
                method:"POST",
                body
            })
        })
    }),
    overrideExisting: false,
})

export const { useGetRegisteredMutation, useSignInMutation } = extendedApi