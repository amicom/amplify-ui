import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconLocalAtm } from '@aws-amplify/ui-react';` → `import { MdLocalAtm } from 'react-icons/md';`
 */
export const IconLocalAtm = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconLocalAtm');
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
          d="M11 17H13V16H14C14.55 16 15 15.55 15 15V12C15 11.45 14.55 11 14 11H11V10H15V8H13V7H11V8H10C9.45 8 9 8.45 9 9V12C9 12.55 9.45 13 10 13H13V14H9V16H11V17ZM20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V6H20V18Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
