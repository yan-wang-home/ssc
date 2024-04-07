import React from 'react';
import { ErrorMessage } from '../../components/ErrorMessage';

const shapes = { square: 'rounded-none', round: 'rounded-md' } as const;
const variants = {
  fill: {
    gray_50: 'bg-gray-50 text-bluegray-200',
    white_A700: 'bg-white-A700 text-bluegray-200',
  },
} as const;
const sizes = {
  xs: 'pb-[7px] pt-[9px] px-[7px]',
  sm: 'pl-[3px] pr-2.5 py-2.5',
  md: 'pb-4 pt-[17px] px-4',
  lg: 'pb-3 pt-[18px] px-3',
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size' | 'prefix' | 'type' | 'onChange'
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = '',
      className = '',
      name = '',
      placeholder = '',
      type = 'text',
      children,
      errors = [],
      label = '',
      prefix,
      suffix,
      onChange,
      shape = 'round',
      size = 'md',
      variant = 'fill',
      color = 'white_A700',
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ''} 
              ${(variant && variants[variant]?.[color]) || ''} 
              ${(size && sizes[size]) || ''}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

export { Input };
