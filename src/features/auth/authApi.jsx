import apiSlice from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        handleRegister: builder.mutation({
            query: (data) => ({
                url: "/user/register",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        userLoggedIn({
                            accessToken: data.token,
                            user: data.user,
                        })
                    );
                } catch (err) {
                    console.error(err);
                }
            },
        }),

        handleLogin: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        userLoggedIn({
                            accessToken: data.token,
                            user: data.user,
                        })
                    );
                } catch (err) {
                    console.error(err);
                }
            },
        }),
    }),
});

export const { useHandleRegisterMutation, useHandleLoginMutation } = authApi;
