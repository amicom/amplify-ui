import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconPermCameraMic } from '@aws-amplify/ui-react';` → `import { MdPermCameraMic } from 'react-icons/md';`
 */
export const IconPermCameraMic = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconPermCameraMic');
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
          d="M12 6C10.9 6 10 6.9 10 8V12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12V8C14 6.9 13.1 6 12 6ZM20 5H16.83L14.97 3H8.96L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM20 19H13V17.91C15.83 17.43 18 14.97 18 12H16C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12H6C6 14.97 8.17 17.43 11 17.91V19H4V7H8.21L8.8 6.35L10.04 5H14.28L15.52 6.35L16.11 7H20V19Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
