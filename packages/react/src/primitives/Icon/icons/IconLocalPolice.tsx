import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconLocalPolice } from '@aws-amplify/ui-react';` → `import { MdLocalPolice } from 'react-icons/md';`
 */
export const IconLocalPolice = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconLocalPolice');
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
          d="M14.5 12.59L15.4 16.47L12 14.42L8.6 16.47L9.5 12.6L6.5 10.01L10.46 9.67L12 6.02L13.54 9.66L17.5 10L14.5 12.59ZM12 3.19L19 6.3V11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19ZM12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
