import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconMultilineChart } from '@aws-amplify/ui-react';` → `import { MdMultilineChart } from 'react-icons/md';`
 */
export const IconMultilineChart = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconMultilineChart');
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
          d="M22 6.92L20.59 5.51L17.74 8.72C15.68 6.4 12.83 5 9.61 5C6.72 5 4.07 6.16 2 8L3.42 9.42C5.12 7.93 7.27 7 9.61 7C12.35 7 14.7 8.26 16.38 10.24L13.5 13.48L9.5 9.48L2 16.99L3.5 18.49L9.5 12.48L13.5 16.48L17.55 11.93C18.3 13.28 18.8 14.83 18.99 16.48H21C20.78 14.18 20.05 12.09 18.96 10.34L22 6.92Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
