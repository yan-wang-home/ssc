// import React from "react";
// import Select, { Props } from "react-select";
// import { ErrorMessage } from "../ErrorMessage";
//
// type selectOptionType = { value: string; label: string };
//
// const variants = {
//   fill: { white_A700: "bg-white-A700 text-bluegray-200" },
// } as const;
// const shapes = { round: "rounded-md" } as const;
// const sizes = { xs: "pb-3 pl-3 pt-[18px]" } as const;
//
// export type SelectProps = Omit<Props, "getOptionLabel"> &
//   Partial<{
//     placeholder: string;
//     className: string;
//     options: selectOptionType[];
//     isSearchable: boolean;
//     placeholderClassName: string;
//     isMulti: boolean;
//     onChange: (option: any) => void;
//     value: string;
//     errors: string[];
//     indicator: React.ReactElement;
//     getOptionLabel: (e: any) => string;
//     shape: keyof typeof shapes;
//     variant: keyof typeof variants;
//     size: keyof typeof sizes;
//     color: string;
//   }>;
//
// const SelectBox = React.forwardRef<any, SelectProps>(
//   (
//     {
//       children,
//       placeholder = "Select",
//       className = "",
//       options = [],
//       isSearchable = false,
//       placeholderClassName = "",
//       isMulti = false,
//       onChange,
//       value = "",
//       errors = [],
//       indicator,
//       shape = "round",
//       size = "xs",
//       variant = "fill",
//       color = "white_A700",
//       ...restProps
//     },
//     ref,
//   ) => {
//     const [selectedVal, setSelectedVal] = React.useState(value);
//
//     const handleChange = (data) => {
//       setSelectedVal(data);
//       if (isMulti) {
//         onChange?.(data?.map((d) => d.value) || []);
//       } else {
//         onChange?.(data?.value);
//       }
//     };
//
//     return (
//       <>
//         <Select
//           ref={ref}
//           options={options}
//           className={`${className} ${(shape && shapes[shape]) || ""} ${
//             (size && sizes[size]) || ""
//           } ${(variant && variants[variant]?.[color]) || ""}`}
//           placeholder={
//             <div className={placeholderClassName}>{placeholder}</div>
//           }
//           isSearchable={isSearchable}
//           isMulti={isMulti}
//           components={{
//             IndicatorSeparator: () => null,
//             ...(indicator && { DropdownIndicator: () => indicator }),
//           }}
//           value={selectedVal}
//           onChange={handleChange}
//           styles={{
//             container: (provided) => ({
//               ...provided,
//               zIndex: 0,
//             }),
//             control: (provided) => ({
//               ...provided,
//               backgroundColor: "transparent",
//               border: "0 !important",
//               boxShadow: "0 !important",
//               minHeight: "auto",
//               "&:hover": {
//                 border: "0 !important",
//               },
//             }),
//             option: (provided, state) => ({
//               ...provided,
//               color: state.isSelected && "#fafafa",
//               backgroundColor: state.isSelected && "#20a2a2",
//               "&:hover": { backgroundColor: "#20a2a2", color: "#ffffff" },
//             }),
//             singleValue: (provided) => ({
//               ...provided,
//               color: "inherit",
//             }),
//             input: (provided) => ({
//               ...provided,
//               color: "inherit",
//               margin: "0",
//               padding: "0",
//               // height: "0",
//             }),
//             valueContainer: (provided) => ({
//               ...provided,
//               padding: "0",
//             }),
//             dropdownIndicator: (provided) => ({
//               ...provided,
//               paddingTop: "0px",
//               paddingBottom: "0px",
//             }),
//             clearIndicator: (provided) => ({
//               ...provided,
//               padding: "0",
//             }),
//             multiValueLabel: (provided) => ({
//               ...provided,
//               padding: "0",
//             }),
//             menuPortal: (base) => ({ ...base, zIndex: 999999 }),
//           }}
//           menuPortalTarget={document.body}
//           closeMenuOnScroll={(event: any) => {
//             return event.target.id === "scrollContainer";
//           }}
//           {...restProps}
//         />
//         <ErrorMessage errors={errors} />
//         {children}
//       </>
//     );
//   },
// );
//
// export { SelectBox };
