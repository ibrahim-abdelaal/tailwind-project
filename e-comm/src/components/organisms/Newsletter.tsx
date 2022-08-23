import { FC } from 'react';
import { BasicImage, NewsletterHeading, NewsletterSubtitle } from '../atoms';
import { SubscribeForm } from '../molecules/SubscribeForm';

export const Newsletter: FC<{ src: string }> = ({ src }) => (
  <div className="rounded-lg shadow-lg my-20 flex">
    <div className="w-full lg:w-3/5 bg-gradient-to-r from-black to-purple-900 lg:via-purple-900 lg:to-transparent rounded-lg text-gray-100 p-12">
      <div className="w-full lg:w-1/2">
        <NewsletterHeading text='Subscribe to get our offers first' />
        <NewsletterSubtitle text=" Want to hear from us when we have new offers? Sign up for our newsletter and we'll email you everytime we have new sale offers." />
        <SubscribeForm />
      </div>
    </div>
    <div className="hidden lg:w-2/5 lg:flex">
      <BasicImage src={src} height='96' />
    </div>
  </div>
);