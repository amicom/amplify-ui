import { getActorState, translate } from '@aws-amplify/ui';

import { useAuthenticator } from '..';
import { Flex, Heading } from '@aws-amplify/ui-react';
import {
  ConfirmationCodeInput,
  RemoteErrorMessage,
  TwoButtonSubmitFooter,
} from '../shared';
import { useCustomComponents } from '../hooks/useCustomComponents';
import {
  isInputOrSelectElement,
  isInputElement,
  getFormDataFromEvent,
  confPropsCreator,
} from '../../../helpers/utils';

export const ConfirmVerifyUser = (): JSX.Element => {
  const Header =
    useCustomComponents().components?.ConfirmVerifyUser?.Header ??
    ConfirmVerifyUser.Header;
  const Footer =
    useCustomComponents().components?.ConfirmVerifyUser?.Footer ??
    ConfirmVerifyUser.Footer;

  const { submitForm, updateForm, isPending, _state } = useAuthenticator();

  const formOverrides = getActorState(_state).context?.formFields
    ?.confirmVerifyUser!;

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    if (isInputOrSelectElement(event.target)) {
      const { name, type } = event.target;
      let value = event.target.value as string | undefined;
      if (
        isInputElement(event.target) &&
        type === 'checkbox' &&
        !event.target.checked
      ) {
        value = undefined;
      }

      updateForm({ name, value });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitForm(getFormDataFromEvent(event));
  };

  return (
    <form
      data-amplify-form=""
      data-amplify-authenticator-confirmverifyuser=""
      method="post"
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <fieldset
        style={{ display: 'flex', flexDirection: 'column' }}
        className="amplify-flex"
        disabled={isPending}
      >
        <Header />

        <Flex direction="column">
          <ConfirmationCodeInput
            {...confPropsCreator(
              'confirmation_code',
              'Code',
              'Code *',
              formOverrides
            )}
          />
        </Flex>

        <RemoteErrorMessage />

        <TwoButtonSubmitFooter
          cancelButtonText={translate('Skip')}
          cancelButtonSendType="SKIP"
        />
        <Footer />
      </fieldset>
    </form>
  );
};

ConfirmVerifyUser.Header = () => {
  return (
    <Heading level={3}>
      {translate('Account recovery requires verified contact information')}
    </Heading>
  );
};

ConfirmVerifyUser.Footer = (): JSX.Element | null => null;
