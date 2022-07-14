// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const usersApi = createApi({
//   reducerPath: 'users',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//   }),
//   tagTypes: ['User'],
//   endpoints: builder => ({
//     registerUser: builder.mutation({
//         query: values => ({
//           url: '/users/signup',
//           method: 'POST',
//           body: values,
//         }),
//         invalidatesTags: ['Users'],
//       }),
//       loginUser: builder.mutation({
//         query: values => ({
//           url: '/users/login',
//           method: 'POST',
//           body: values,
//         }),
//         invalidatesTags: ['Users'],
//       }),
//       logoutUser: builder.mutation({
//         query: values => ({
//           url: '/users/logout',
//           method: 'POST',
//           body: values,
//         }),
//         invalidatesTags: ['Users'],
//       }),
//     getUsers: builder.query({
//       query: () => '/users/current',
//       providesTags: ['Users'],
//     }),
//   }),
// });

// export const {
//   useGetUsersQuery,
//   useRegisterUserMutation,
//   useLoginUserMutation,
//   useLogoutUserMutation,
// } = usersApi;


import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios'

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    axios.interceptors.request.use(
      config => {
        config.headers['Authorization'] = `Bearer ${token}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );
    const token = JSON.parse(localStorage.getItem('token'))|| "";
    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

  export const usersApi = createApi({
    reducerPath: "usersApi",
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    tagTypes: ['User'],
  }),
  endpoints(build) {
    return {
      getUsers: build.query({
        query: () => ({ url: 'users/current', method: 'get' }),
        providesTags: ['Users'],
     }),
      loginUser: build.mutation({
        query: (values) => ({ url: 'users/login', method: 'post', data:values }),
        invalidatesTags: ['Users'],
      }),
      logoutUser: build.mutation({
        query: (values) => ({ url: `users/logout`, method: 'post', data: values }),
        invalidatesTags: ['Users'],
      }),
      registerUser: build.mutation({
        query: (values) => ({ url: `users/signup`, method: 'post', data: values}),
        invalidatesTags: ['Users'],
      }),
    }
  },
})

export const {
  useGetUsersQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = usersApi;