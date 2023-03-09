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
        }),
        forgotPassword:build.mutation({
            query:(body)=>({
                url:"/auth/forgot-password",
                method:"POST",
                body
            })
        }),
        resetPassword:build.mutation({
            query:(body)=>({
                url:"/auth/reset-password",
                method:"POST",
                body
            })
        }),

    }),
    overrideExisting: false,
})

export const { useGetRegisteredMutation, useSignInMutation, useForgotPasswordMutation, useResetPasswordMutation } = extendedApi