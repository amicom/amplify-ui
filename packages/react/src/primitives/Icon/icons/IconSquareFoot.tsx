import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconSquareFoot } from '@aws-amplify/ui-react';` → `import { MdSquareFoot } from 'react-icons/md';`
 */
export const IconSquareFoot = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconSquareFoot');
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
          d="M17.66 17.66L16.6 18.72L15.89 18.01L16.95 16.95L15.01 15.01L13.95 16.07L13.24 15.36L14.3 14.3L12.36 12.36L11.3 13.42L10.59 12.71L11.65 11.65L9.7 9.7L8.64 10.76L7.93 10.05L8.99 8.99L7.05 7.05L5.99 8.11L5.28 7.4L6.34 6.34L4 4V18C4 19.1 4.9 20 6 20H20L17.66 17.66ZM7 17V11.24L12.76 17H7Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
