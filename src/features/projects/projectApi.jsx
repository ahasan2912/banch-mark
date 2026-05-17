import apiSlice from "../api/apiSlice";

export const projectApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        projectCreate: builder.mutation({
            query: (data) => ({
                url: "/projects/create",
                method: "POST",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: ["Projects"]
        }),

        allProjectsList: builder.query({
            query: () => ({
                url: "projects?page=1&limit=10",
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["Projects"]
        }),

        singleProject: builder.query({
            query: (projectId) => ({
                url: `/projects/${projectId}`,
                method: "GET",
                credentials: "include",
            }),
            providesTags: (result, error, arg) => [
                { type: "Project", id: arg },
            ],
        }),

        editSingleProject: builder.mutation({
            query: ({ data, projectId }) => ({
                url: `/projects/update/${projectId}`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: (result, error, arg) => [
                "Projects",
                { type: "Project", id: arg.projectId }
            ]
        }),

        deleteSingleProject: builder.mutation({
            query: (projectId) => ({
                url: `/projects/delete/${projectId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Projects"]
        }),

        uploadProjectDrawing: builder.mutation({
            query: ({ data, projectId }) => ({
                url: `/projects/${projectId}/drawings/upload`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

        editionalInfoProject: builder.mutation({
            query: ({ data, projectId }) => ({
                url: `/projects/${projectId}/additional-info`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),
    }),
});

export const {
    useProjectCreateMutation,
    useAllProjectsListQuery,
    useSingleProjectQuery,
    useEditSingleProjectMutation,
    useDeleteSingleProjectMutation,
    useUploadProjectDrawingMutation,
    useEditionalInfoProjectMutation
} = projectApi;
