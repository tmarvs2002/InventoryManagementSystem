import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Session, User } from 'auth-types';
import { crypto } from '@session/crypto';

const selectUserEncrypted = (state: RootState) => state.auth.user;
const selectSessionEncrypted = (state: RootState) => state.auth.session;

export const selectUser = createSelector([selectUserEncrypted], (user: string | undefined) => user && crypto.decrypt(user) as User);
export const selectSession = createSelector([selectSessionEncrypted], (session: string | undefined) => session && crypto.decrypt(session) as Session);