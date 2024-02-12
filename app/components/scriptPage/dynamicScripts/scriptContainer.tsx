'use client';

import { AlertCircle, DownloadIcon, MessageSquareMore } from 'lucide-react';
import { IMPORTED_SCRIPTS } from '~/app/components/scriptPage/scriptDropDown';
import { Alert, AlertTitle, AlertDescription } from '~/components/ui/alert';
import { ScrollArea } from '~/components/ui/scroll-area';

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
      <div className="w-11/12 flex flex-col gap-4">
        <p className="font-bold text-2xl">{selectedScript.name}</p>
        <div className="flex flex-wrap gap-2 text-gray-600">
          <div className="flex flex-row gap-2 text-gray-600">
            <DownloadIcon />
            <a
              download
              href={selectedScript.fileName}
            >
              Download Script
            </a>
          </div>
          <div className="flex flex-row gap-2 text-gray-600">
            <MessageSquareMore />
            <a href="mailto:lyticgroup@gmail.com">Leave Feedback</a>
          </div>
        </div>
        <p>{selectedScript.description}</p>

        <ScrollArea className="h-[200px] w-full rounded-md border p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu non diam. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Diam sollicitudin tempor id eu nisl nunc mi. Odio ut sem nulla pharetra diam sit amet nisl. Pretium quam vulputate dignissim suspendisse. Venenatis urna cursus eget nunc scelerisque viverra mauris. Massa tincidunt dui ut ornare lectus sit amet. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Consequat ac felis donec et. Dignissim suspendisse in est ante in nibh mauris cursus. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Suspendisse potenti nullam ac tortor. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Egestas sed tempus urna et pharetra pharetra massa. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae.
          Risus nullam eget felis eget nunc lobortis mattis aliquam. Purus semper eget duis at tellus at urna. Metus dictum at tempor commodo ullamcorper a. Purus gravida quis blandit turpis. Vitae turpis massa sed elementum tempus egestas. Non arcu risus quis varius quam. Vitae purus faucibus ornare suspendisse sed nisi. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Pellentesque id nibh tortor id aliquet lectus proin. Morbi non arcu risus quis. Velit laoreet id donec ultrices. Aenean sed adipiscing diam donec adipiscing tristique. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Eu non diam phasellus vestibulum lorem. Nulla pharetra diam sit amet nisl suscipit adipiscing. Consectetur a erat nam at. Est velit egestas dui id ornare arcu odio ut. Pellentesque nec nam aliquam sem et tortor. Eget lorem dolor sed viverra. Leo duis ut diam quam nulla. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Pellentesque elit eget gravida cum.
          Urna condimentum mattis pellentesque id nibh tortor. Quisque egestas diam in arcu. Urna condimentum mattis pellentesque id nibh tortor id. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a.
        </ScrollArea>
      </div>
    );
  }
};
