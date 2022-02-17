import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconSouthWest } from '@aws-amplify/ui-react';` → `import { MdSouthWest } from 'react-icons/md';`
 */
export const IconSouthWest = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconSouthWest');
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
          d="M15 19V17H8.41L20 5.41L18.59 4L7 15.59V9H5V19H15Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
