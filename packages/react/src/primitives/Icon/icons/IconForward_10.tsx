import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { deprecationWarning } from '../deprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconForward_10 } from '@aws-amplify/ui-react';` → `import { MdForward_10 } from 'react-icons/md';`
 */
export const IconForward_10 = (props) => {
  const { className, ...rest } = props;
  deprecationWarning('IconForward_10');
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
          d="M18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13C6 9.69 8.69 7 12 7V11L17 6L12 1V5C7.58 5 4 8.58 4 13C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13H18Z"
          fill="currentColor"
        />
        <path
          d="M10.9 16V11.73H10.81L9.03998 12.36V13.05L10.05 12.74V16H10.9Z"
          fill="black"
        />
        <path
          d="M14.32 11.7802C14.14 11.7102 13.95 11.6802 13.73 11.6802C13.51 11.6802 13.32 11.7102 13.14 11.7802C12.96 11.8502 12.81 11.9602 12.69 12.1102C12.57 12.2602 12.46 12.4502 12.4 12.6802C12.34 12.9102 12.3 13.1802 12.3 13.5002V14.2402C12.3 14.5602 12.34 14.8402 12.41 15.0602C12.48 15.2802 12.58 15.4802 12.71 15.6302C12.84 15.7802 12.99 15.8902 13.17 15.9602C13.35 16.0302 13.54 16.0602 13.76 16.0602C13.98 16.0602 14.17 16.0302 14.35 15.9602C14.53 15.8902 14.68 15.7802 14.8 15.6302C14.92 15.4802 15.02 15.2902 15.09 15.0602C15.16 14.8302 15.19 14.5602 15.19 14.2402V13.5002C15.19 13.1802 15.15 12.9002 15.08 12.6802C15.01 12.4602 14.91 12.2602 14.78 12.1102C14.65 11.9602 14.49 11.8502 14.32 11.7802ZM14.33 14.3502C14.33 14.5402 14.32 14.7002 14.29 14.8302C14.26 14.9602 14.23 15.0702 14.18 15.1502C14.13 15.2302 14.07 15.2902 13.99 15.3202C13.91 15.3502 13.83 15.3702 13.74 15.3702C13.65 15.3702 13.56 15.3502 13.49 15.3202C13.42 15.2902 13.35 15.2302 13.3 15.1502C13.25 15.0702 13.21 14.9602 13.18 14.8302C13.15 14.7002 13.14 14.5402 13.14 14.3502V13.3802C13.14 13.1902 13.15 13.0302 13.18 12.9002C13.21 12.7702 13.24 12.6702 13.3 12.5902C13.36 12.5102 13.41 12.4502 13.49 12.4202C13.57 12.3902 13.65 12.3702 13.74 12.3702C13.83 12.3702 13.92 12.3902 13.99 12.4202C14.06 12.4502 14.13 12.5102 14.18 12.5902C14.23 12.6702 14.27 12.7702 14.3 12.9002C14.33 13.0302 14.34 13.1902 14.34 13.3802V14.3502H14.33Z"
          fill="black"
        />
      </svg>
    </View>
  );
};
