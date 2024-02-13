'use client';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { IMPORTED_SCRIPTS } from '~/app/components/scriptPage/scriptDropDown';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { cn } from '~/lib/utils';

export const ScriptSelections = ({ scriptValue }: { scriptValue: string }) => {
  return (
    <Card className={cn('w-full md:w-6/12 rounded-none border-0')}>
      <CardHeader className="bg-primary-green text-white">
        <CardTitle className="font-bold">SELECT A SCRIPT</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 rounded-none">
        {IMPORTED_SCRIPTS.map(({ name }, idx) => {
          const slugFriendlyName = name.replace(/ /g, '_').toLowerCase();
          return (
            <Button
              key={idx}
              variant={'ghost'}
              className={`hover:font-bold hover:bg-background-green text-left rounded-none ${scriptValue === slugFriendlyName ? 'font-bold bg-background-green' : ''}`}
            >
              <div className="w-full flex flex-row items-center justify-between">
                <Link
                  scroll={false}
                  href={`/script/${name.replace(/ /g, '_').toLowerCase()}`}
                  className="w-full flex flex-row items-center justify-between"
                >
                  <p>{name.toUpperCase()}</p>
                  <ChevronRight />
                </Link>
              </div>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
};
