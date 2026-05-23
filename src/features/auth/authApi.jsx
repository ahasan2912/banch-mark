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

        handleCurrentLoggedInUser: builder.query({
            query: () => ({
                url: "/user/profile",
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["UserProfile"],
        }),

        otpVerification: builder.mutation({
            query: (data) => ({
                url: "/auth/verify-otp",
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

        forgetPassword: builder.mutation({
            query: (data) => ({
                url: "/auth/forget-password",
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

        forgetPasswordOtp: builder.mutation({
            query: (data) => ({
                url: "/auth/forget-otp-verify",
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

        setNewPassword: builder.mutation({
            query: (data) => ({
                url: "/auth/set-password",
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

    }),
});

export const {
    useHandleUserCreateMutation,
    useHandleUserLoginMutation,
    useHandleCurrentLoggedInUserQuery,
    useOtpVerificationMutation,
    useForgetPasswordMutation,
    useForgetPasswordOtpMutation,
    useSetNewPasswordMutation
} = authApi;
