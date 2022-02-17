import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconAutoDelete } from '@aws-amplify/ui-react';` → `import { MdAutoDelete } from 'react-icons/md';`
 */
export const IconAutoDelete = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconAutoDelete');
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
        <path d="M15 2H11.5L10.5 1H5.5L4.5 2H1V4H15V2Z" fill="currentColor" />
        <path
          d="M16 9C15.3 9 14.63 9.1 14 9.29V5H2V17C2 18.1 2.9 19 4 19H9.68C10.8 21.36 13.21 23 16 23C19.87 23 23 19.87 23 16C23 12.13 19.87 9 16 9ZM9 16C9 16.34 9.03 16.67 9.08 17H4V7H12V10.26C10.19 11.53 9 13.62 9 16ZM16 21C13.24 21 11 18.76 11 16C11 13.24 13.24 11 16 11C18.76 11 21 13.24 21 16C21 18.76 18.76 21 16 21Z"
          fill="black"
        />
        <path
          d="M16.5 12H15V17L18.6 19.1L19.4 17.9L16.5 16.2V12Z"
          fill="black"
        />
      </svg>
    </View>
  );
};
