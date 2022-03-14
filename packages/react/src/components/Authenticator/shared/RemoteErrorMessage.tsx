import { useAuthenticator } from '..';
import { Alert } from '@aws-amplify/ui-react';
import { translate } from '@aws-amplify/ui';

export const RemoteErrorMessage = (): JSX.Element => {
  const { error } = useAuthenticator();

  return (
    <>
      {error ? (
        <Alert variation="error" isDismissible={true}>
          {translate(error)}
        </Alert>
      ) : null}
    </>
  );
};
