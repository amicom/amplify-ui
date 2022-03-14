import {
  AuthChallengeNames,
  getActorState,
  SignInContext,
  SignInState,
  translate,
} from '@aws-amplify/ui';

import { useAuthenticator } from '..';
import { Flex, Heading } from '@aws-amplify/ui-react';
import { ConfirmationCodeInput, ConfirmSignInFooter } from '../shared';
import { useCustomComponents } from '../hooks/useCustomComponents';
import {
  isInputOrSelectElement,
  isInputElement,
  getFormDataFromEvent,
  confPropsCreator,
} from '../../../helpers/utils';

export const ConfirmSignIn = (): JSX.Element => {
  const {
    error,
    submitForm,
    updateForm,
    isPending,
    _state,
  } = useAuthenticator();

  const formOverrides = getActorState(_state).context?.formFields
    ?.confirmSignIn!;

  const Header =
    useCustomComponents().components?.ConfirmSignIn?.Header ??
    ConfirmSignIn.Header;
  const Footer =
    useCustomComponents().components?.ConfirmSignIn?.Footer ??
    ConfirmSignIn.Footer;

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
      data-amplify-authenticator-confirmsignin=""
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
            errorText={translate(error)}
          />
        </Flex>

        <ConfirmSignInFooter />
        <Footer />
      </fieldset>
    </form>
  );
};

function Header() {
  const { _state } = useAuthenticator();
  const actorState = getActorState(_state) as SignInState;

  const { challengeName } = actorState.context as SignInContext;
  let headerText: string;

  switch (challengeName) {
    case AuthChallengeNames.SMS_MFA:
      headerText = translate('Confirm SMS Code');
      break;
    case AuthChallengeNames.SOFTWARE_TOKEN_MFA:
      headerText = translate('Confirm TOTP Code');
      break;
    default:
      throw new Error(
        `${translate(
          'Unexpected challengeName encountered in ConfirmSignIn:'
        )} ${challengeName}`
      );
  }

  return <Heading level={3}>{headerText}</Heading>;
}
ConfirmSignIn.Header = Header;

ConfirmSignIn.Footer = (): JSX.Element | null => null;
