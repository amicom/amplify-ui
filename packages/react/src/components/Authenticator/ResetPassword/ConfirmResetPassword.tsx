import {
  getActorContext,
  getActorState,
  ResetPasswordContext,
  translate,
} from '@aws-amplify/ui';

import { useAuthenticator } from '..';
import { Flex, Heading, PasswordField, Text } from '@aws-amplify/ui-react';
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
  propsCreator,
} from '../../../helpers/utils';

export const ConfirmResetPassword = (): JSX.Element => {
  const Header =
    useCustomComponents().components?.ConfirmResetPassword?.Header ??
    ConfirmResetPassword.Header;
  const Footer =
    useCustomComponents().components?.ConfirmResetPassword?.Footer ??
    ConfirmResetPassword.Footer;

  const {
    _state,
    submitForm,
    updateForm,
    updateBlur,
    isPending,
  } = useAuthenticator();
  const { validationError } = getActorContext(_state) as ResetPasswordContext;
  if (!validationError) throw new Error();
  const formOverrides = getActorState(_state).context?.formFields
    ?.confirmResetPassword!;

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

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name } = event.target;
    updateBlur({ name });
  };

  return (
    <form
      data-amplify-form=""
      data-amplify-authenticator-confirmresetpassword=""
      method="post"
      onSubmit={handleSubmit}
      onChange={handleChange}
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
            type="number"
          />

          <PasswordField
            data-amplify-password
            {...propsCreator('password', 'New password', formOverrides, true)}
            className="password-field"
            name="password"
            onBlur={handleBlur}
          />
          <PasswordField
            data-amplify-confirmpassword
            {...propsCreator(
              'confirm_password',
              'Confirm Password',
              formOverrides,
              true
            )}
            name="confirm_password"
            hasError={!!validationError['confirm_password']}
            onBlur={handleBlur}
          />

          {!!validationError['confirm_password'] && (
            <Text role="alert" variation="error">
              {translate(validationError['confirm_password'] as string)}
            </Text>
          )}
        </Flex>

        <RemoteErrorMessage />
        <TwoButtonSubmitFooter
          cancelButtonSendType="RESEND"
          cancelButtonText={translate('Resend Code')}
        />
        <Footer />
      </fieldset>
    </form>
  );
};

ConfirmResetPassword.Header = () => {
  const headerText = translate('Reset your password');

  return <Heading level={3}>{headerText}</Heading>;
};

ConfirmResetPassword.Footer = (): JSX.Element | null => null;
