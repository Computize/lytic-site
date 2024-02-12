'use client';

import { AlertCircle, DownloadIcon } from 'lucide-react';
import Link from 'next/link';
import { IMPORTED_SCRIPTS } from '~/app/components/scriptPage/scriptDropDown';
import { Alert, AlertTitle, AlertDescription } from '~/components/ui/alert';

export const ScriptContainer = ({ scriptValue }: { scriptValue: string }) => {
  const selectedScript = IMPORTED_SCRIPTS.find((script) => script.name.replace(/ /g, '_').toLowerCase() === scriptValue);

  // NOTE: This error should never occur if the json file containing the script correctly formatted
  if (!selectedScript) {
    return (
      <div className="w-8/12 flex justify-center items-center">
        <Alert variant="destructive">
          <AlertCircle />

          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
        </Alert>
      </div>
    );
  } else {
    return (
      <div className="w-11/12 border-2">
        <p className="font-bold text-2xl">{selectedScript.name}</p>
        <div className="flex flex-row gap-2 text-gray-600">
          <DownloadIcon />
          <a
            download
            href={selectedScript.fileName}
          >
            Download Script
          </a>
        </div>
        <p>{selectedScript.description}</p>
      </div>
    );
  }
};
