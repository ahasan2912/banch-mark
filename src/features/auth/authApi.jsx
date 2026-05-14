import apiSlice from "../api/apiSlice";
import { saveTokensAndFetchUser } from "./saveToken";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        handleUserCreate: builder.mutation({
            query: (data) => ({
                url: "/user/create",
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

        handleUserLogin: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data,
                credentials: "include",
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    const tokens = result?.data?.data;
                    if (tokens) {
                        await saveTokensAndFetchUser(tokens, dispatch);
                    }
                } catch (err) {
                    console.error("Login failed:", err);
                }
            },
        }),

        otpVerification: builder.mutation({
            query: (data) => ({
                url: "/auth/verify-otp",
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

        handleCurrentLoggedInUser: builder.query({
            query: () => ({
                url: "/users/me",
                method: "GET",
                credentials: "include",
            }),
        }),
    }),
});

export const {
    useHandleUserCreateMutation,
    useHandleUserLoginMutation,
    useHandleCurrentLoggedInUserQuery,
    useOtpVerificationMutation
} = authApi;
