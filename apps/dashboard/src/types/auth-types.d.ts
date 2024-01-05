import { CognitoUserSession } from 'amazon-cognito-identity-js';

declare module "auth-types" {
  export interface User {
    id: string;
    username: string;
    firstName?: string;
    lastName?: string;
    verified?: boolean;
  };

  export interface DefaultSession {
    accessToken?: string;
    refreshToken?: string;
    idToken?: string;
    user?: User;
  }

  export interface BaseSession extends CognitoUserSession { };
  export interface Session extends DefaultSession, BaseSession { };
}