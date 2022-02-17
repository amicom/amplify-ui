import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconDynamicForm } from '@aws-amplify/ui-react';` → `import { MdDynamicForm } from 'react-icons/md';`
 */
export const IconDynamicForm = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconDynamicForm');
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
          d="M13 11H4C2.9 11 2 10.1 2 9V6C2 4.9 2.9 4 4 4H13V11ZM4 9H11V6H4V9ZM15 20H4C2.9 20 2 19.1 2 18V15C2 13.9 2.9 13 4 13H15V20ZM4 18H13V15H4V18ZM22 9H20L22 4H15V11H17V20L22 9ZM4.75 17.25H6.25V15.75H4.75V17.25ZM4.75 8.25H6.25V6.75H4.75V8.25Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
