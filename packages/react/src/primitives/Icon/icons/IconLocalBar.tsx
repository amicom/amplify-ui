import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconLocalBar } from '@aws-amplify/ui-react';` → `import { MdLocalBar } from 'react-icons/md';`
 */
export const IconLocalBar = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconLocalBar');
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
          d="M14.77 9L12 12.11L9.23 9H14.77ZM21 3H3V5L11 14V19H6V21H18V19H13V14L21 5V3ZM7.43 7L5.66 5H18.35L16.57 7H7.43Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
