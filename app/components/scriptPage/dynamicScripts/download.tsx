'use client';
import { Button } from '~/components/ui/button';

export const DownloadButton = () => {
  return (
    <a
      download
      href="AllObjectPermissions.zip"
    >
      {' '}
      Get file{' '}
    </a>
  );
};
