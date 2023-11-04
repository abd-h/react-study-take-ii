// import { styled } from 'styled-components';

// const Button = styled.button`
//   padding-block: 1rem;
//   padding-inline: 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 0.25rem;
//   color: #1f2937;
//   background-color: #f0b322;
//   border-radius: 6px;
//   border: none;
//   font-size: 1rem;

//   &:hover {
//     background-color: #f0920e;
//   }
// `;
import React from 'react';
import "./style.css";

export default function Button1({ children, ...props }) {
  console.log(children);
  return <button className=" first:hover:text-stone-900 px-4 py-2 font-semibold uppercase rounded text-stone-900 last:bg-amber-400 hover:bg-amber-500 first:text-white" {...props}>{ children }</button>
}
