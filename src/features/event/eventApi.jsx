import apiSlice from "../api/apiSlice";

export const evntApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        eventDataCreate: builder.mutation({
            query: ({ projectId, data }) => ({
                url: `/projects/${projectId}/events/create`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: ["Events"]
        }),

        allEventsList: builder.query({
            query: (projectId) => ({
                url: `/projects/${projectId}/events`,
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["Events"]
        }),

        surveyEdit: builder.mutation({
            query: ({ projectId, eventId, data }) => ({
                url: `/projects/${projectId}/events/update/${eventId}`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: (result, error, arg) => [
                "Events",
                { type: "Event", id: arg.eventId }
            ]
        }),

        deleteSurvey: builder.mutation({
            query: ({ projectId, eventId }) => ({
                url: `/projects/${projectId}/events/delete/${eventId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Events"]
        }),
    }),
});

export const {
    useEventDataCreateMutation,
    useAllEventsListQuery,
    useSurveyEditMutation,
    useDeleteSurveyMutation
} = evntApi;
