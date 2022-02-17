import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconVerticalAlignTop } from '@aws-amplify/ui-react';` → `import { MdVerticalAlignTop } from 'react-icons/md';`
 */
export const IconVerticalAlignTop = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconVerticalAlignTop');
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
          d="M8 11H11V21H13V11H16L12 7L8 11ZM4 3V5H20V3H4Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
