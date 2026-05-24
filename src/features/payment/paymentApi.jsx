import apiSlice from "../api/apiSlice";

export const paymentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        paymentCreate: builder.mutation({
            query: (data) => ({
                url: "/payments/report-orders/checkout",
                method: "POST",
                body: data,
                credentials: "include",
            }),

            projectReports: builder.query({
                query: () => ({
                    url: `/payments/reports`,
                    method: "GET",
                    credentials: "include",
                }),
            }),

            viewReport: builder.query({
                query: (reportId) => ({
                    url: `/payments/reports/${reportId}/view`,
                    method: "GET",
                    credentials: "include",
                }),
            }),
        }),
    }),
});

export const {
    usePaymentCreateMutation,
    useProjectReportsQuery,
    useViewReportQuery
} = paymentApi;

