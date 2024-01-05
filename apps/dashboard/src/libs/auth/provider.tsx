'use client';

import React, { PropsWithChildren } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import config from '@aws/amplifyconfiguration.json';
import '@aws-amplify/ui-react/styles.css';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';

Amplify.configure(config);

interface AuthProviderProps extends WithAuthenticatorProps, PropsWithChildren { };

function App({ signOut, user, children }: AuthProviderProps) {
  return (
    <React.Fragment>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
      {children}
    </React.Fragment>
  );
}

export default withAuthenticator(App);