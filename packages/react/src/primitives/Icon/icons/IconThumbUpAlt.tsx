import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconThumbUpAlt } from '@aws-amplify/ui-react';` → `import { MdThumbUpAlt } from 'react-icons/md';`
 */
export const IconThumbUpAlt = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconThumbUpAlt');
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
          d="M21 8H14.69L15.64 3.43L15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.59 7.59C7.22 7.95 7 8.45 7 9V19C7 20.1 7.9 21 9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10C23 8.9 22.1 8 21 8ZM21 12L18 19H9V9L13.34 4.66L12.23 10H21V12ZM1 9H5V21H1V9Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
