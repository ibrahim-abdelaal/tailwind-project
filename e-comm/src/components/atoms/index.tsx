import { FC, useState, ChangeEvent, ChangeEventHandler, MouseEventHandler } from 'react';
import { BasicButtonProps, IconButtonProps, GradientIconButtonProps, BasicImageProps, BasicInputProps } from './interfaces';

// Logo

export const Logo: FC = () => (
  <div className="flex justify-center">
      <div className="bg-gradient-to-r from-purple-400 to-red-600 w-10 h-10 rounded-lg"></div>
      <div className="text-3xl text-gray-600 ml-2">Logo</div>
  </div>
);

// Typography

export const Heading1: FC<{ children: JSX.Element }> = ({ children }) => (
  <h1> { children } </h1>
);

export const Heading2: FC<{ children: JSX.Element }> = ({ children }) => (
  <h2 className="font-serif text-5xl text-gray-600 mb-4 capitalize text-center md:text-left md:self-start"> { children } </h2>
);

export const Heading3: FC<{ children: JSX.Element }> = ({ children }) => (
  <h3> { children } </h3>
);

export const SubTitle1: FC<{ text: string }> = ({ text }) => (
  <p className="uppercase tracking-wide text-gray-600 text-center md:text-left md:self-start"> { text } </p>
);

// Buttons

export const SubmitButton: FC<{ name: string, onClick: MouseEventHandler<HTMLButtonElement> }> = ({ name, onClick }) => (
  <button type="submit" className="py-3 bg-red-600 rounded-lg w-full" onClick={onClick}>{ name }</button>
);

export const IconButton: FC<IconButtonProps> = ({ name, href, textColor, bgColor, children, iconToRight }) => (
  <a href={href} className={`bg-${bgColor}-600 text-${textColor}-50 p-3 px-5 hover:bg-${bgColor}-700 rounded-full`}>
    { iconToRight && name }
    { children }
    { !iconToRight && name }
  </a>
);

export const GradientIconButton: FC<GradientIconButtonProps> = ({ name, href, textColor, fromColor, toColor, children, iconToRight }) => (
  <a href={href} className={`flex justify-center my-2 bg-gradient-to-r from-${fromColor}-600 to-${toColor}-500 rounded-full py-2 px-4 text-${textColor}-50 capitalize hover:from-${toColor}-600 hover:to-${toColor}-600 text-sm`}>
    { iconToRight && name }
    { children }
    { !iconToRight && name }
  </a>
);

export const BasicButton: FC<BasicButtonProps> = ({ name, href, textColor, fromColor, toColor }) => (
  <a href={href} className={`bg-gradient-to-r from-${fromColor}-600 to-${toColor}-500 rounded-full py-4 px-8 text-${textColor}-50 uppercase text-xl md:self-start my-5`}>
    { name }
  </a>
);

// Icons

export const CartIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export const RightArrow: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
  </svg>
);

// Images

export const BasicImage: FC<BasicImageProps> = ({ src, width, height, topRounded }) => (
  <img src={src} className={`${width ? `w-${width}` : ''} ${height ? `h-${height}` : ''} ${topRounded ? 'rounded-tl-lg rounded-tr-lg' : ''} `}></img>
);

// Inputs

export const BasicInput: FC<BasicInputProps> = ({ type, placeholder, value, onChange }) => {

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    onChange(e.target.value);
  }

  return (
  <input type={type} placeholder={placeholder} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)} className="bg-gray-600 text-gray-200 placeholder-gray-400 py-3 px-4 w-full rounded-lg focus:outline-none mb-4"></input>
  );
};