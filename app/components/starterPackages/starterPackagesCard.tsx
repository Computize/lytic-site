import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '~/components/ui/card';

interface StarterPackagesCardProps {
  title: string;
  subTitle: string;
  footerContent: string;
  imageSource: string;
  packagePrice: string;
  children: React.ReactNode;
}

export const StarterPackagesCard = ({ footerContent, subTitle, title, imageSource, packagePrice, children }: StarterPackagesCardProps) => {
  return (
    <Card className="w-9/12">
      <Accordion
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <CardHeader>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4 justify-between">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  className=""
                  src={`/starterPackages${imageSource}`}
                  alt="image"
                  width="auto"
                  height="100px"
                />
                <div className="flex flex-col gap-4">
                  <CardTitle className="text-gray-600 text-xl md:text-3xl">{title}</CardTitle>
                  <div className="text-gray-600 flex flex-row gap-2">
                    <p className="font-bold">FOR:</p>
                    <p>{subTitle}</p>
                  </div>
                </div>
              </div>
              <AccordionTrigger className="bg-primary-green hover:bg-secondary-green hover:no w-36 flex justify-center items-center px-2 h-12 font-bold text-white">
                <p>SEE DETAILS</p>
              </AccordionTrigger>
            </div>
          </CardHeader>
          <CardContent>
            <AccordionContent>
              <div className="border-t-[1px] border-gray-300 w-full p-4" />
              <div className="flex flex-row justify-evenly">{children}</div>
              <div className="flex flex-col mt-4">
                <p className="font-bold text-2xl text-gray-600">${packagePrice}</p>
                <p className="text-xs text-gray-600">Package Price</p>
              </div>
            </AccordionContent>
          </CardContent>
          <CardFooter className="rounded-b-md bg-background-green pt-6">
            <p className="text-gray-600 text-lg">{footerContent}</p>
          </CardFooter>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
