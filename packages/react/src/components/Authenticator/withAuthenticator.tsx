import * as React from 'react';

import { Authenticator, AuthenticatorProps } from './Authenticator';

export type WithAuthenticatorOptions = Omit<AuthenticatorProps, 'children'>;

export function withAuthenticator(
  Component: React.FC,
  options: WithAuthenticatorOptions = {}
) {
  const { variation = 'modal' } = options;

  return function WrappedWithAuthenticator(props: any) {
    return (
      <Authenticator variation={variation} {...options}>
        {(authenticator) => <Component {...props} {...authenticator} />}
      </Authenticator>
    );
  };
}
