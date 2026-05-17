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

        editSection: builder.mutation({
            query: ({ projectId, sectionId, data }) => ({
                url: `/projects/${projectId}/sections/update/${sectionId}`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: (result, error, arg) => [
                "Sections",
                { type: "Section", id: arg.sectionId }
            ]
        }),

        deleteSingleSection: builder.mutation({
            query: ({ projectId, sectionId }) => ({
                url: `/projects/${projectId}/sections/delete/${sectionId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Sections"]
        }),
    }),
});

export const {
    useTargetCreateMutation,
    useAllTargetListQuery,
    useEditSectionMutation,
    useDeleteSingleSectionMutation
} = targetApi;
