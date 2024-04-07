import React from 'react';

const sizeClasses = {
  txtCinzelDecorativeBold16: 'font-bold font-cinzeldecorative',
  txtChivoRegular16WhiteA700: 'font-chivo font-normal',
  txtChivoBold16WhiteA700: 'font-bold font-chivo',
  txtChivoBold22: 'font-chivo font-normal',
  txtChivoBold44: 'font-chivo font-normal',
  txtChivoBold26: 'font-chivo font-normal',
  txtChivoRegular18Bluegray600: 'font-chivo font-normal',
  txtChivoBold22Gray900: 'font-chivo font-normal',
  txtChivoBold44WhiteA700: 'font-chivo font-normal',
  txtChivoBold18WhiteA700: 'font-chivo font-normal',
  txtChivoRegular16Gray90099: 'font-chivo font-normal',
  txtChivoRegular18Teal400: 'font-chivo font-normal',
  txtChivoRegular18WhiteA70099: 'font-chivo font-normal',
  txtChivoRegular22: 'font-chivo font-normal',
  txtChivoBold26Gray900: 'font-chivo font-normal',
  txtChivoRegular16: 'font-chivo font-normal',
  txtChivoBold18: 'font-chivo font-normal',
  txtChivoRegular18: 'font-chivo font-normal',
  txtChivoRegular16WhiteA70099: 'font-chivo font-normal',
  txtChivoRegular14: 'font-chivo font-normal',
  txtChivoRegular18WhiteA700: 'font-chivo font-normal',
  txtChivoRegular16Bluegray701: 'font-chivo font-normal',
  txtChivoBold16Gray900: 'font-bold font-chivo',
  txtChivoRegular16Bluegray600: 'font-chivo font-normal',
  txtChivoBold36: 'font-chivo font-normal',
  txtChivoBold14: 'font-chivo font-normal',
  txtChivoRegular16Bluegray200: 'font-chivo font-normal',
  txtChivoBold16: 'font-chivo font-normal',
  txtChivoItalic16: 'font-chivo font-normal italic',
  txtChivoRegular16Bluegray100: 'font-chivo font-normal',
  txtChivoRegular16WhiteA700a2: 'font-chivo font-normal',
  txtChivoRegular18Yellow700: 'font-chivo font-normal',
  txtChivoBold22Bluegray200: 'font-chivo font-normal',
  txtChivoBold22Teal401: 'font-chivo font-normal',
  txtCinzelDecorativeBold16Cyan300: 'font-bold font-cinzeldecorative',
  txtChivoBold52: 'font-chivo font-normal',
  txtChivoBold30: 'font-chivo font-normal',
  txtChivoRegular18Gray900: 'font-chivo font-normal',
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({ children, className = '', size, as, ...restProps }) => {
  const Component = as || 'p';

  return (
    <Component className={`text-left ${className} ${size && sizeClasses[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
