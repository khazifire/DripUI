import { forwardRef } from "react";
/**
 *
 * @param {object} props
 * @param {string} props.type - the type of the input
 * @param {string} props.className - custom tailwindCSS styles for the input
 * @returns {JSX.Element}
 */
const Input = forwardRef(({ type, className, ...rest }, ref) => {
  return (
    <input
      className={`"text-sm px-2 py-2 w-full text-gray-700 border-gray-300 border-2 focus:border-gray-800 focus:outline-none focus:ring-0" ${
        className ?? ""
      }`}
      type={type ?? "text"}
      ref={ref}
      {...rest}
    />
  );
});

export default Input;
