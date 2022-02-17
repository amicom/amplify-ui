import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconFace } from '@aws-amplify/ui-react';` → `import { MdFace } from 'react-icons/md';`
 */
export const IconFace = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconFace');
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
          d="M10.25 13C10.25 13.69 9.69 14.25 9 14.25C8.31 14.25 7.75 13.69 7.75 13C7.75 12.31 8.31 11.75 9 11.75C9.69 11.75 10.25 12.31 10.25 13ZM15 11.75C14.31 11.75 13.75 12.31 13.75 13C13.75 13.69 14.31 14.25 15 14.25C15.69 14.25 16.25 13.69 16.25 13C16.25 12.31 15.69 11.75 15 11.75ZM22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12ZM10.66 4.12C12.06 6.44 14.6 8 17.5 8C17.96 8 18.41 7.95 18.84 7.88C17.44 5.56 14.9 4 12 4C11.54 4 11.09 4.05 10.66 4.12ZM4.42 9.47C6.13 8.5 7.45 6.92 8.08 5.03C6.37 6 5.05 7.58 4.42 9.47ZM20 12C20 11.22 19.88 10.47 19.67 9.76C18.97 9.91 18.25 10 17.5 10C14.37 10 11.58 8.56 9.74 6.31C8.69 8.87 6.6 10.88 4 11.86C4.01 11.9 4 11.95 4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
