import { FC } from 'react';
import { CollectionButton, CollectionHeading, RightArrow } from '../atoms';

export const CollectionHeader: FC<{ title: string, buttonText: string }> = ({ title, buttonText }) => (
  <div className="flex justify-between m-5">
    <CollectionHeading text={title} />
    <CollectionButton text={buttonText} children={<RightArrow />} />
  </div>
);