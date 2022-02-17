import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconSportsSoccer } from '@aws-amplify/ui-react';` → `import { MdSportsSoccer } from 'react-icons/md';`
 */
export const IconSportsSoccer = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconSportsSoccer');
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
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 5.3L14.35 4.35C16.17 4.91 17.72 6.11 18.73 7.69L18.34 9.03L16.99 9.49L13 6.7V5.3ZM9.65 4.35L11 5.3V6.7L7.01 9.49L5.66 9.03L5.27 7.69C6.28 6.12 7.83 4.92 9.65 4.35ZM7.08 17.11L5.94 17.21C4.73 15.81 4 13.99 4 12C4 11.88 4.01 11.77 4.02 11.65L5.02 10.92L6.4 11.4L7.86 15.74L7.08 17.11ZM14.5 19.59C13.71 19.85 12.87 20 12 20C11.13 20 10.29 19.85 9.5 19.59L8.81 18.1L9.45 17H14.56L15.2 18.11L14.5 19.59ZM14.27 15H9.73L8.38 10.98L12 8.44L15.63 10.98L14.27 15ZM18.06 17.21L16.92 17.11L16.13 15.74L17.59 11.4L18.98 10.93L19.98 11.66C19.99 11.77 20 11.88 20 12C20 13.99 19.27 15.81 18.06 17.21Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
