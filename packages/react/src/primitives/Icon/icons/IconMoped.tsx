import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconMoped } from '@aws-amplify/ui-react';` → `import { MdMoped } from 'react-icons/md';`
 */
export const IconMoped = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconMoped');
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
          d="M19 7C19 5.9 18.1 5 17 5H14V7H17V9.65L13.52 14H10V9H6C3.79 9 2 10.79 2 13V16H4C4 17.66 5.34 19 7 19C8.66 19 10 17.66 10 16H14.48L19 10.35V7ZM4 14V13C4 11.9 4.9 11 6 11H8V14H4ZM7 17C6.45 17 6 16.55 6 16H8C8 16.55 7.55 17 7 17Z"
          fill="currentColor"
        />
        <path d="M10 6H5V8H10V6Z" fill="black" />
        <path
          d="M19 13C17.34 13 16 14.34 16 16C16 17.66 17.34 19 19 19C20.66 19 22 17.66 22 16C22 14.34 20.66 13 19 13ZM19 17C18.45 17 18 16.55 18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16C20 16.55 19.55 17 19 17Z"
          fill="black"
        />
      </svg>
    </View>
  );
};
