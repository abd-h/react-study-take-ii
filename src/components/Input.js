// import { styled } from "styled-components";

// const Label = styled.label`
//   display: block;
//   margin-block-start: 0.75rem;
//   font-size: 0.75rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   color: ${({ $invalid }) => ($invalid ? "#f73f3f" : "white")};
// `;

// const Input = styled.input`
//   width: 20rem;
//   padding-block: 0.75rem;
//   padding-inline: 1rem;
//   line-height: 1.5;
//   background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
//   color: ${({ $invalid }) => ($invalid ? "#ef4444" : "#374151")};
//   border: 1px solid ${({ $invalid }) => ($invalid ? "#f73f3f" : "transparent")};
//   border-radius: 0.25rem;
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
// `;

export default function Input({ label, $invalid, ...props }) {
  console.log($invalid);
  let labelClasses =
    "block mb-2 text-xs font-bold tracking-wide uppercas first:mt-3";
  let inputClasses = "w-full px-20 py-2 leading-tight  rounded shadow bg-s";
  if ($invalid) {
    labelClasses += " text-red-300";
    inputClasses += " bg-red-100 text-red-500 border-red-300"
  } else {
    labelClasses += " text-stone-300";
    inputClasses += " bg-stone-300 text-gray-700 border";
  }
  return (
    <p>
      <label className={labelClasses} >{label}</label>
      <input className={inputClasses}  {...props} />
    </p>
  );
}
