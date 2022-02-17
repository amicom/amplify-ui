import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconSwapHorizontalCircle } from '@aws-amplify/ui-react';` → `import { MdSwapHorizontalCircle } from 'react-icons/md';`
 */
export const IconSwapHorizontalCircle = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconSwapHorizontalCircle');
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
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 6.5V9H11V11H15V13.5L18.5 10L15 6.5ZM9 10.5L5.5 14L9 17.5V15H13V13H9V10.5Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
