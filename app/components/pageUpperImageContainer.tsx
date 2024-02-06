'use server';

import React from 'react';

interface PageUpperImageContainerProps {
  children: React.ReactNode;
  imageSource?: string;
  backgroundColor?: string;
}
export const PageUpperImageContainer = ({ children, imageSource, backgroundColor }: PageUpperImageContainerProps) => {
  return (
    <div className="min-w-full h-[462px]">
      {imageSource ? (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            backgroundImage: `url('${imageSource}')`,
          }}
        >
          {children}
        </div>
      ) : (
        <div className={`w-full h-full flex items-center justify-center ${backgroundColor ?? 'bg-primary-green'}`}>{children}</div>
      )}
    </div>
  );
};
