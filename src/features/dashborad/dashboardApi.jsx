import apiSlice from "../api/apiSlice";

export const dashboardApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getHomePageData: builder.query({
            query: () => ({
                url: "/dashboard/home",
                method: "GET",
                credentials: "include",
            }),
        }),

        getAllUserData: builder.query({
            query: ({ page = 1, limit = 8, status = "ALL", search = "" } = {}) => {
                const params = new URLSearchParams({
                    page: String(page),
                    limit: String(limit),
                });

                if (status && status !== "ALL") {
                    params.set("status", status);
                }

                if (search.trim()) {
                    params.set("search", search.trim());
                }

                return {
                    url: `/dashboard/users?${params.toString()}`,
                    method: "GET",
                    credentials: "include",
                };
            },
            providesTags: ["DashboardUsers"],
        }),

        statusChangeUser: builder.mutation({
            query: ({ userId, data }) => ({
                url: `/dashboard/users/${userId}/status`,
                method: "PATCH",
                credentials: "include",
                body: data,
            }),
            invalidatesTags: ["DashboardUsers"],
        }),

        setUserProfile: builder.mutation({
            query: (data) => ({
                url: "/user/profile",
                method: "PUT",
                credentials: "include",
                body: data,
            }),
            invalidatesTags: ["UserProfile"],
        }),

        changePassword: builder.mutation({
            query: (data) => ({
                url: "/user/change-password",
                method: "PUT",
                credentials: "include",
                body: data,
            }),
        }),

        getProjectData: builder.query({
            query: () => ({
                url: `/dashboard/projects`,
                method: "GET",
                credentials: "include",
            }),
        }),

        getRepoertData: builder.query({
            query: ({ page = 1, limit = 12, search = "" } = {}) => {
                const params = new URLSearchParams({
                    page: String(page),
                    limit: String(limit),
                });

                if (search.trim()) {
                    params.set("search", search.trim());
                }

                return {
                    url: `/dashboard/reports?${params.toString()}`,
                    method: "GET",
                    credentials: "include",
                };
            },
        }),

        getRevenueData: builder.query({
            query: ({ year = new Date().getFullYear(), page = 1, limit = 8 } = {}) => {
                const params = new URLSearchParams({
                    year: String(year),
                    page: String(page),
                    limit: String(limit),
                });

                return {
                    url: `/dashboard/revenue?${params.toString()}`,
                    method: "GET",
                    credentials: "include",
                };
            },
        }),
    }),
});

export const { useGetHomePageDataQuery, useGetAllUserDataQuery, useStatusChangeUserMutation, useSetUserProfileMutation, useChangePasswordMutation, useGetProjectDataQuery, useGetRepoertDataQuery, useGetRevenueDataQuery } = dashboardApi;

