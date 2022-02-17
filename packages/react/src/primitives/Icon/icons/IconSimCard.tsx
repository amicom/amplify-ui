import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconSimCard } from '@aws-amplify/ui-react';` → `import { MdSimCard } from 'react-icons/md';`
 */
export const IconSimCard = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconSimCard');
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
          d="M18 2H10L4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 4V20H6V8.83L10.83 4H18ZM7 17H9V19H7V17ZM15 17H17V19H15V17ZM7 11H9V15H7V11ZM11 15H13V19H11V15ZM11 11H13V13H11V11ZM15 11H17V15H15V11Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
