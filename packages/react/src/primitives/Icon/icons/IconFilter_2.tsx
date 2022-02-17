import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconFilter_2 } from '@aws-amplify/ui-react';` → `import { MdFilter_2 } from 'react-icons/md';`
 */
export const IconFilter_2 = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconFilter_2');
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
          d="M3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 17H7V3H21V17ZM17 13H13V11H15C16.1 11 17 10.11 17 9V7C17 5.89 16.1 5 15 5H11V7H15V9H13C11.9 9 11 9.89 11 11V15H17V13Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
