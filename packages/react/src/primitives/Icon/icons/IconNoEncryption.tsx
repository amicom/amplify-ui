import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconNoEncryption = (props) => {
  const { className, ...rest } = props;
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
          d="M8.9 6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8H10.44L12.44 10H18V15.56L20 17.56V10C20 8.9 19.1 8 18 8H17V6C17 3.24 14.76 1 12 1C9.68 1 7.74 2.59 7.18 4.74L8.9 6.46V6ZM4.41 4.81L3 6.22L5.04 8.26C4.42 8.6 4 9.25 4 10V20C4 21.1 4.9 22 6 22H18.78L19.78 23L21.19 21.59L4.41 4.81ZM6 20V10H6.78L16.78 20H6Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
