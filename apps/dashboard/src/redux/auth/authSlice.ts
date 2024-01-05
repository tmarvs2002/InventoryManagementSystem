import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { initialState } from './constants';
import { AuthState } from './types';
import { Session, User } from 'auth-types';
import { crypto } from '@session/crypto';

function setItem(entry: Session | User) {
    return crypto.encrypt(JSON.stringify({ ...entry }));
}

type AuthStateKey = keyof AuthState;
const stateKeys: AuthStateKey[] = ["isAuthenticated", "session", "user"];

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        sign_out: () => initialState,
        update_state: (state, action: PayloadAction<Partial<AuthState>>) => {
            const { payload } = action;
            const newValues = Object.fromEntries(stateKeys.map((key: AuthStateKey) => {
                if (!payload[key]) return;
                const _value = payload[key];
                return [key, key === 'session' || key === 'user' ? setItem(_value as Session | User) : _value]
            }))
            return { ...state, ...newValues }
        },

    },
})

export const { sign_out, update_state } = slice.actions
export default slice.reducer

export const selectIsAuthenticated = (state: RootState): boolean => state.auth.isAuthenticated;