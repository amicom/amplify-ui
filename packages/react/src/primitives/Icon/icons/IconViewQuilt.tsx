import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconViewQuilt } from '@aws-amplify/ui-react';` → `import { MdViewQuilt } from 'react-icons/md';`
 */
export const IconViewQuilt = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconViewQuilt');
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
          d="M4 5V18H21V5H4ZM6 16V7H9V16H6ZM11 16V12.5H14V16H11ZM19 16H16V12.5H19V16ZM11 10.5V7H19V10.5H11Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
