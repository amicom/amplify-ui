import { getActorState, translate } from '@aws-amplify/ui';

import { useAuthenticator } from '../..';
import { Button, Flex, Heading, Text } from '@aws-amplify/ui-react';
import {
  isInputOrSelectElement,
  isInputElement,
  getFormDataFromEvent,
  confPropsCreator,
} from '../../../helpers/utils';
import { useCustomComponents } from '../hooks/useCustomComponents';

import {
  ConfirmationCodeInput,
  ConfirmationCodeInputProps,
  RemoteErrorMessage,
} from '../shared';

export function ConfirmSignUp() {
  const {
    isPending,
    resendCode,
    submitForm,
    updateForm,
    _state,
    codeDeliveryDetails: { DeliveryMedium, Destination } = {},
  } = useAuthenticator();
  const Header =
    useCustomComponents().components?.ConfirmSignUp?.Header ??
    ConfirmSignUp.Header;
  const Footer =
    useCustomComponents().components?.ConfirmSignUp?.Footer ??
    ConfirmSignUp.Footer;

  const formOverrides = getActorState(_state).context?.formFields
    ?.confirmSignUp;

  if (formOverrides === undefined) throw new Error();

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

  const emailMessage = translate(
    'Your code is on the way. To log in, enter the code we emailed to'
  );
  const textedMessage = translate(
    'Your code is on the way. To log in, enter the code we texted to'
  );
  const defaultMessage = translate(
    'Your code is on the way. To log in, enter the code we sent you. It may take a minute to arrive.'
  );

  const minutesMessage = translate('It may take a minute to arrive.');

  const confirmationCodeInputProps: Required<Pick<
    ConfirmationCodeInputProps,
    'label' | 'placeholder'
  >> = {
    label: translate('Confirmation Code'),
    placeholder: translate('Enter your code'),
  };

  const subtitleText =
    DeliveryMedium === 'EMAIL'
      ? `${emailMessage} ${Destination}. ${minutesMessage}`
      : DeliveryMedium === 'SMS'
      ? `${textedMessage} ${Destination}. ${minutesMessage}`
      : translate(`${defaultMessage}`);

  return (
    // TODO Automatically add these namespaces again from `useAmplify`
    <form
      data-amplify-form=""
      data-amplify-authenticator-confirmsignup=""
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
          <Text style={{ marginBottom: '1rem' }}>{subtitleText}</Text>
          <ConfirmationCodeInput
            {...confPropsCreator(
              'confirmation_code',
              confirmationCodeInputProps.placeholder,
              confirmationCodeInputProps.label,
              formOverrides
            )}
          />

          <RemoteErrorMessage />

          <Button
            variation="primary"
            isDisabled={isPending}
            type="submit"
            loadingText={translate('Confirming')}
            isLoading={isPending}
            fontWeight="normal"
          >
            {translate('Confirm')}
          </Button>

          <Button onClick={resendCode} type="button" fontWeight="normal">
            {translate('Resend Code')}
          </Button>
        </Flex>
        <Footer />
      </fieldset>
    </form>
  );
}

ConfirmSignUp.Header = (() => {
  const {
    codeDeliveryDetails: { DeliveryMedium, Destination } = {},
  } = useAuthenticator();

  const confirmSignUpHeading =
    DeliveryMedium === 'EMAIL'
      ? translate('We Emailed You')
      : DeliveryMedium === 'SMS'
      ? translate('We Texted You')
      : translate('We Sent A Code');

  return (
    <Heading level={3} style={{ fontSize: '1.5rem' }}>
      {confirmSignUpHeading}
    </Heading>
  );
}) as React.FC;

ConfirmSignUp.Footer = (): JSX.Element | null => null;
