import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';
import { Button } from '~/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '~/components/ui/card';

interface StarterPackagesCardProps {
  title: string;
  subTitle: string;
  footerContent: string;
  imageSource: string;
}

export const StarterPackagesCard = ({ footerContent, subTitle, title, imageSource }: StarterPackagesCardProps) => {
  return (
    <Card className="w-9/12">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <CardHeader>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-6">
                <img className="" src={`/starterPackages${imageSource}`} alt="image" width="auto" height="100px" />
                <div className="flex flex-col">
                  <CardTitle className="text-gray-600 text-3xl">{title}</CardTitle>
                  <div className="text-gray-600 flex flex-row gap-2">
                    <p className="font-bold">FOR:</p>
                    <p>{subTitle}</p>
                  </div>
                </div>
              </div>
              <AccordionTrigger>
                <Button className="rounded-none bg-secondary-green font-bold">SEE DETAILS</Button>
              </AccordionTrigger>
            </div>
          </CardHeader>
          <CardContent>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </CardContent>
          <CardFooter className="rounded-b-md bg-background-green pt-6">
            <p className="text-gray-600 text-lg">{footerContent}</p>
          </CardFooter>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
