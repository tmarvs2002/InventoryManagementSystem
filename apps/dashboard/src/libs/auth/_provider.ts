// 'use client'

// import { PropsWithChildren, createContext, useCallback, useContext, useEffect } from 'react'
// import { useDispatch } from 'react-redux';
// import { Amplify, Auth, Hub } from 'aws-amplify';
// import { User } from 'auth-types';
// import { update_state, sign_out } from '@/redux/auth';
// import aws_config from '@aws/aws-exports';

// Amplify.configure({ ...aws_config });

// const AuthEventContext = createContext<{
//     getCurrentSession?: () => Promise<void>
// }>({});

// export const useAuthEventContext = () => useContext(AuthEventContext);


// export default function AuthProvider({ children }: PropsWithChildren) {
//     const dispatch = useDispatch();

//     const getCurrentSession = async () => {
//         try {
//             const session = await Auth.currentSession();
//             if (session && session.isValid()) {
//                 Auth.currentUserInfo().then((data) => {
//                     const details = data?.attributes;
//                     if (details) {
//                         const user: User = {
//                             id: details.sub,
//                             username: details.email,
//                             verified: details.email_verified,
//                             firstName: details.name,
//                             lastName: details.family_name,
//                         }
//                         dispatch(update_state({
//                             user,
//                             isAuthenticated: true,
//                             session: {
//                                 accessToken: session.getAccessToken().getJwtToken(),
//                                 idToken: session.getIdToken().getJwtToken(),
//                                 refreshToken: session.getRefreshToken().getToken()
//                             }
//                         }));
//                     }
//                 })
//             } else {
//                 dispatch(update_state({ session: undefined, user: undefined, isAuthenticated: false }))
//             }
//         } catch (e) {
//             dispatch(update_state({ session: undefined, user: undefined, isAuthenticated: false }))
//         }
//     };

//     const initialLoad = useCallback(async () => {
//         Hub.listen("auth", async ({ payload: { event, data } }) => {
//             switch (event) {
//                 case "signIn": {
//                     await getCurrentSession();
//                     return;
//                 }
//                 case "signUp":
//                     const user = {
//                         id: data.userSub,
//                         username: data.user.username,
//                         verified: false,
//                     }
//                     dispatch(update_state({ user: user }))
//                     break;
//                 case "signOut":
//                     dispatch(sign_out());
//                     return;
//                 case "signIn_failure":
//                     return;
//                 case "confirmSignUp": {
//                     await getCurrentSession();
//                     return;
//                 }
//                 default: return;
//             }
//         });
//     }, []);

//     useEffect(() => {
//         initialLoad();
//     }, []);


//     return (
//         <AuthEventContext.Provider value= {{ getCurrentSession }
// }>
//     { children }
//     < /AuthEventContext.Provider>
//     )
// }