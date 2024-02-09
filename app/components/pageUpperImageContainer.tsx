'use server';

import React from 'react';
import { cn } from '~/lib/utils';

interface PageUpperImageContainerProps {
  children: React.ReactNode;
  imageSource?: string;
  backgroundColor?: string;
  className?: string;
}
export const PageUpperImageContainer = ({ children, imageSource, backgroundColor, className }: PageUpperImageContainerProps) => {
  if (imageSource) {
    return (
      <div
        className={cn(`w-full h-[300px] md:h-[462px] bg-cover bg-center bg-no-repeat flex items-center justify-center`, className)}
        style={{
          backgroundImage: `url('${imageSource}')`,
          backgroundSize: 'cover',
        }}
      >
        {children}
      </div>
    );
  } else {
    return <div className={`w-full h-[362px] flex items-center justify-center ${backgroundColor ?? 'bg-primary-green'}`}>{children}</div>;
  }
};
