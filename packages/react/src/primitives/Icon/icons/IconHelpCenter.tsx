import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconHelpCenter } from '@aws-amplify/ui-react';` → `import { MdHelpCenter } from 'react-icons/md';`
 */
export const IconHelpCenter = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconHelpCenter');
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
          d="M13.25 16.74C13.25 17.43 12.72 18 12 18C11.3 18 10.74 17.44 10.74 16.74C10.74 16.03 11.3 15.49 12 15.49C12.71 15.49 13.25 16.04 13.25 16.74ZM11.99 6C10.22 6 9.01 7.15 8.56 8.49L10.2 9.18C10.42 8.51 10.94 7.7 12 7.7C13.62 7.7 13.94 9.22 13.37 10.03C12.83 10.8 11.9 11.32 11.41 12.19C11.02 12.88 11.1 13.68 11.1 14.17H12.92C12.92 13.24 12.99 13.05 13.14 12.76C13.53 12.04 14.25 11.7 15.01 10.59C15.69 9.59 15.43 8.23 14.99 7.51C14.48 6.67 13.47 6 11.99 6ZM19 5H5V19H19V5ZM19 3C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
