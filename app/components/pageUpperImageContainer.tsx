'use server';

import React from 'react';

interface PageUpperImageContainerProps {
  children: React.ReactNode;
  imageSource: string;
}
export const PageUpperImageContainer = ({ children, imageSource }: PageUpperImageContainerProps) => {
  return (
    <div className="min-w-full h-[462px]">
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          backgroundImage: `url('${imageSource}')`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
