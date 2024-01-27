'use server';

import React from 'react';

interface PageUpperImageContainerProps {
  children: React.ReactNode;
}
export const PageUpperImageContainer = ({ children }: PageUpperImageContainerProps) => {
  return <div className="min-w-full h-[532px] static">{children}</div>;
};
