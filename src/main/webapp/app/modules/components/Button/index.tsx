import React from 'react';

const shapes = { round: 'rounded-md' } as const;
const variants = {
  fill: {
    white_A700: 'bg-white-A700 shadow-bs',
    teal_401: 'bg-teal-401 text-white-A700',
    teal_400: 'bg-teal-400 text-white-A700',
    blue_900: 'bg-blue-900 text-white-A700',
    red_600: 'bg-red-600 text-white-A700',
    red_800: 'bg-red-800 text-white-A700',
  },
} as const;
const sizes = { xs: 'p-[15px]', sm: 'p-[21px] sm:px-5', md: 'w-1/3 h-12 px-6', lg: 'p-[30px] sm:px-5' } as const;

export type ButtonProps = Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onClick'> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = '',
  leftIcon,
  rightIcon,
  shape = '',
  size = '',
  variant = '',
  color = '',
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ''} ${(size && sizes[size]) || ''} ${
        (variant && variants[variant]?.[color]) || ''
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
