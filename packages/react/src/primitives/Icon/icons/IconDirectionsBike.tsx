import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconDirectionsBike } from '@aws-amplify/ui-react';` → `import { MdDirectionsBike } from 'react-icons/md';`
 */
export const IconDirectionsBike = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconDirectionsBike');
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
          d="M15.5 5.5C16.6 5.5 17.5 4.6 17.5 3.5C17.5 2.4 16.6 1.5 15.5 1.5C14.4 1.5 13.5 2.4 13.5 3.5C13.5 4.6 14.4 5.5 15.5 5.5ZM5 12C2.2 12 0 14.2 0 17C0 19.8 2.2 22 5 22C7.8 22 10 19.8 10 17C10 14.2 7.8 12 5 12ZM5 20.5C3.1 20.5 1.5 18.9 1.5 17C1.5 15.1 3.1 13.5 5 13.5C6.9 13.5 8.5 15.1 8.5 17C8.5 18.9 6.9 20.5 5 20.5ZM10.8 10.5L13.2 8.1L14 8.9C15.3 10.2 17 11 19.1 11V9C17.6 9 16.4 8.4 15.5 7.5L13.6 5.6C13.1 5.2 12.6 5 12 5C11.4 5 10.9 5.2 10.6 5.6L7.8 8.4C7.4 8.8 7.2 9.3 7.2 9.8C7.2 10.4 7.4 10.9 7.8 11.2L11 14V19H13V12.8L10.8 10.5ZM19 12C16.2 12 14 14.2 14 17C14 19.8 16.2 22 19 22C21.8 22 24 19.8 24 17C24 14.2 21.8 12 19 12ZM19 20.5C17.1 20.5 15.5 18.9 15.5 17C15.5 15.1 17.1 13.5 19 13.5C20.9 13.5 22.5 15.1 22.5 17C22.5 18.9 20.9 20.5 19 20.5Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
