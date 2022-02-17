import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconFilter_9Plus } from '@aws-amplify/ui-react';` → `import { MdFilter_9Plus } from 'react-icons/md';`
 */
export const IconFilter_9Plus = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconFilter_9Plus');
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
          d="M3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM14 12V8C14 6.89 13.1 6 12 6H11C9.9 6 9 6.89 9 8V9C9 10.11 9.9 11 11 11H12V12H9V14H12C13.1 14 14 13.11 14 12ZM11 9V8H12V9H11ZM21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 9H19V7H17V9H15V11H17V13H19V11H21V17H7V3H21V9Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
