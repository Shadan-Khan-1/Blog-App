// import { createSlice, configureStore } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     isLogin: false,
//     isAdmin: false,
//   },
//   reducers: {
//     // login fun
//     login(state) {
//       // const token = localStorage.getItem('token' )
//       // if (token) {
//       //   // Token is available, you can use it as needed
//       //   state.isLogin = true;
//       //   console.log('Token:', token);
//       // } else {
//       //   // Token is not present in local storage
//       //   console.log('Token not found');
//       // }
//       // if (token) {
//         state.isLogin = false;
//       // }
//     },
//     logout(state) {
//       state.isLogin = false;
//     },
//   },
// });
// export const authAction = authSlice.actions;
// export const store = configureStore({
//   reducer: authSlice.reducer,
// });


// authSlice.js
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  isLogin: true,
  isAdmin: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login fun
    login(state) {
      const token = localStorage.getItem('token');
      if (token) {
        // Token is available, you can use it as needed
        state.isLogin = true;
        console.log('Token:', token);
      } else {
        // Token is not present in local storage
        console.log('Token not found');
      }
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const authAction = authSlice.actions;
export const store = configureStore({
  reducer: authSlice.reducer,
});

// // authSlice.js

// // import { createSlice } from "@reduxjs/toolkit";

// // const initialState = {
// //   isLogin: false,
// //   isAdmin: false,
// // };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     // login fun
//     login(state) {
//       const token = localStorage.getItem('token');
//       if (token) {
//         // Token is available, you can use it as needed
//         state.isLogin = true;
//         console.log('Token:', token);
//       } else {
//         // Token is not present in local storage
//         console.log('Token not found');
//       }
//     },
//     logout(state) {
//       state.isLogin = false;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;
