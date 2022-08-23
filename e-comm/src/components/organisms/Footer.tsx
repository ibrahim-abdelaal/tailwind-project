import { FC } from 'react';
import { FooterButton } from '../atoms';

export const Footer: FC = ({}) => (
  <div className="border-t-2 text-center border-gray-300 flex flex-col md:flex-row md:justify-between py-5 text-sm">
      <div className="mb-4">
        <FooterButton name='About' href='#' />
        <FooterButton name='Privacy Policy' href='#' />
        <FooterButton name='Terms of Service' href='#' />
      </div>
      <p>&copy; Copyright reserved 2022.</p>
    </div>
);