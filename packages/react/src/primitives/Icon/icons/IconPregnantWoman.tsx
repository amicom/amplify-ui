import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconPregnantWoman } from '@aws-amplify/ui-react';` → `import { MdPregnantWoman } from 'react-icons/md';`
 */
export const IconPregnantWoman = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconPregnantWoman');
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 4C9 2.89 9.89 2 11 2C12.11 2 13 2.89 13 4C13 5.11 12.11 6 11 6C9.89 6 9 5.11 9 4ZM16 13C15.99 11.66 15.17 10.49 14 10C14 8.34 12.66 7 11 7C9.34 7 8 8.34 8 10V17H10V22H13V17H16V13Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
