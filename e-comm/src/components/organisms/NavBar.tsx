import { FC } from 'react';
import { CartIcon, IconButton, Logo, NavButton } from '../atoms';

export const NavBar: FC = () => {
  return (
    <div className="md:flex md:justify-between text-center">
      <Logo />
      <div className="mt-2">
        <NavButton name='Home' href='#' />
        <NavButton name='Shop' href='#' />
        <NavButton name='Blog' href='#' />
        <NavButton name='Contact' href='#' />
        <IconButton name='Cart (0)' bgColor='purple' textColor='gray' href='#' children={<CartIcon />} />
      </div>
    </div>
  );
}