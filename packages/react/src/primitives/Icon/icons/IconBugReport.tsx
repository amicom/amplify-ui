import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconBugReport } from '@aws-amplify/ui-react';` → `import { MdBugReport } from 'react-icons/md';`
 */
export const IconBugReport = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconBugReport');
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
          d="M20 8H17.19C16.74 7.22 16.12 6.55 15.37 6.04L17 4.41L15.59 3L13.42 5.17C12.96 5.06 12.49 5 12 5C11.51 5 11.04 5.06 10.59 5.17L8.41 3L7 4.41L8.62 6.04C7.88 6.55 7.26 7.22 6.81 8H4V10H6.09C6.04 10.33 6 10.66 6 11V12H4V14H6V15C6 15.34 6.04 15.67 6.09 16H4V18H6.81C7.85 19.79 9.78 21 12 21C14.22 21 16.15 19.79 17.19 18H20V16H17.91C17.96 15.67 18 15.34 18 15V14H20V12H18V11C18 10.66 17.96 10.33 17.91 10H20V8ZM16 12V15C16 15.22 15.97 15.47 15.93 15.7L15.83 16.35L15.46 17C14.74 18.24 13.42 19 12 19C10.58 19 9.26 18.23 8.54 17L8.17 16.36L8.07 15.71C8.03 15.48 8 15.23 8 15V11C8 10.77 8.03 10.52 8.07 10.3L8.17 9.65L8.54 9C8.84 8.48 9.26 8.03 9.75 7.69L10.32 7.3L11.06 7.12C11.37 7.04 11.69 7 12 7C12.32 7 12.63 7.04 12.95 7.12L13.63 7.28L14.24 7.7C14.74 8.04 15.15 8.48 15.45 9.01L15.83 9.66L15.93 10.31C15.97 10.53 16 10.78 16 11V12ZM10 14H14V16H10V14ZM10 10H14V12H10V10Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
