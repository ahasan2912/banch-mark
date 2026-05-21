import apiSlice from "../api/apiSlice";

export const surveyApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        surveyDataCreate: builder.mutation({
            query: ({ projectId, targetId, data }) => ({
                url: `/projects/${projectId}/targets/${targetId}/surveys/create`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: ["Surveys"]
        }),

        surveyCSVUploaded: builder.mutation({
            query: ({ projectId, targetId, data }) => ({
                url: `/projects/${projectId}/targets/${targetId}/surveys/upload-csv`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: ["Surveys"]
        }),

        allSurveyList: builder.query({
            query: ({projectId, targetId}) => ({
                url: `/projects/${projectId}/targets/${targetId}/surveys`,
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["Surveys"]
        }),

        surveyEdit: builder.mutation({
            query: ({ projectId, surveyId, data }) => ({
                url: `/projects/${projectId}/surveys/update/${surveyId}`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: (result, error, arg) => [
                "Surveys",
                { type: "Survey", id: arg.surveyId }
            ]
        }),

        deleteSurvey: builder.mutation({
            query: ({ projectId, surveyId }) => ({
                url: `/projects/${projectId}/surveys/delete/${surveyId}`,
                method: 'DELETE',
                credentials: "include",
            }),
            invalidatesTags: ["Surveys"]
        }),


    }),
});

export const {
    useSurveyDataCreateMutation,
    useSurveyCSVUploadedMutation,
    useAllSurveyListQuery,
    useSurveyEditMutation,
    useDeleteSurveyMutation,

} = surveyApi;
