import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { ScriptContainer } from '~/app/components/scriptPage/dynamicScripts/scriptContainer';
import { ScriptSelections } from '~/app/components/scriptPage/dynamicScripts/scriptSelections';
import { NeedMoreHelpContainer } from '~/app/components/scriptPage/needMoreHelpContainer';
import { generateMetadata } from '~/app/constants/pageMetadata';
import { Separator } from '~/components/ui/separator';

export const metadata = generateMetadata('Script');

export default async function Page({ params }: { params: { scriptValue: string } }) {
  const { scriptValue } = params;

  return (
    <main>
      <PageUpperImageContainer>
        <PageTitle title="SCRIPT LIBRARY" />
      </PageUpperImageContainer>
      <Separator />
      <div className="flex flex-col md:flex-row">
        <ScriptSelections scriptValue={scriptValue} />
        <div className="py-12 flex justify-center">
          <ScriptContainer scriptValue={scriptValue} />
        </div>
      </div>
      <NeedMoreHelpContainer
        bannerTitle="WANT MORE?"
        buttonCallToAction="CONTACT US"
      />
    </main>
  );
}
