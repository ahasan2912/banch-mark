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
    }),
});

export const {
    useSurveyDataCreateMutation
} = surveyApi;
