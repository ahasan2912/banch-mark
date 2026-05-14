import apiSlice from "../api/apiSlice";

export const companyApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCompanyList: builder.query({
            query: () => ({
                url: "/company/list",
                method: "GET",
                credentials: "include",
            }),
        }),
    }),
});

export const {useGetAllCompanyListQuery} = companyApi;
