import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconDownloadDone } from '@aws-amplify/ui-react';` → `import { MdDownloadDone } from 'react-icons/md';`
 */
export const IconDownloadDone = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconDownloadDone');
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
          d="M5 18H19V20H5V18ZM9.6 15.3L5 10.7L7 8.8L9.6 11.4L17 4L19 6L9.6 15.3Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
