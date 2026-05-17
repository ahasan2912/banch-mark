import Cookies from "js-cookie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
        const token = Cookies.get("accessToken");
        // const resetToken = localStorage.getItem("resetToken");
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        // if (resetToken) {
        //     headers.set("token", resetToken);
        // }
        return headers;
    },
});

const apiSlice = createApi({
    reducerPath: "api",
    // baseQuery: baseQueryWithErrorHandling,
    baseQuery: baseQuery,
    tagTypes: ["Projects", "Project", "Sections", "Section", "Targets", "Target"],
    endpoints: () => ({}),
});

export default apiSlice;