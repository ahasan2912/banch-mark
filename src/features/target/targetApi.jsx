import apiSlice from "../api/apiSlice";

export const targetApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        targetCreate: builder.mutation({
            query: ({ projectId, sectionId, data }) => ({
                url: `/projects/${projectId}/sections/${sectionId}/targets/create`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: ["Targets"]
        }),

        allTargetList: builder.query({
            query: ({ projectId, sectionId }) => ({
                url: `/projects/${projectId}/sections/${sectionId}/targets`,
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["Targets"]
        }),

        editTarget: builder.mutation({
            query: ({ projectId, targetId, data }) => ({
                url: `/projects/${projectId}/targets/update/${targetId}`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: (result, error, arg) => [
                "Targets",
                { type: "Target", id: arg.sectionId }
            ]
        }),

        deleteSingleTarget: builder.mutation({
            query: ({ projectId, targetId }) => ({
                url: `/projects/${projectId}/targets/delete/${targetId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Targets"]
        }),

        addBaseReading: builder.mutation({
            query: ({ projectId, targetId, data }) => ({
                url: `/projects/${projectId}/targets/${targetId}/base-reading`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: (result, error, arg) => [
                "Targets",
                { type: "Target", id: arg.sectionId }
            ]
        }),

    }),
});

export const {
    useTargetCreateMutation,
    useAllTargetListQuery,
    useEditTargetMutation,
    useDeleteSingleTargetMutation,
    useAddBaseReadingMutation
} = targetApi;
