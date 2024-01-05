import { User } from 'auth-types';

export type StateSession = {
    accessToken: string;
    idToken: string;
    refreshToken: string;
};

export interface AuthStoredState {
    session?: string;
    user?: string;
    isAuthenticated: boolean;
}

export interface AuthState {
    session?: StateSession;
    user?: User;
    isAuthenticated: boolean;
}