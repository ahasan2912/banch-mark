import apiSlice from "../api/apiSlice";

export const sectionApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        sectionCreate: builder.mutation({
            query: ({ projectId, data }) => ({
                url: `/projects/${projectId}/sections/create`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: ["Sections"]
        }),

        allSectionList: builder.query({
            query: (projectId) => ({
                url: `/projects/${projectId}/sections`,
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["Sections"]
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
    useSectionCreateMutation,
    useAllSectionListQuery,
    useEditSectionMutation,
    useDeleteSingleSectionMutation
} = sectionApi;
