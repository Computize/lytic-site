'use server';
import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { DownloadButton } from '~/app/components/scriptPage/dynamicScripts/download';
import { ScriptSelections } from '~/app/components/scriptPage/dynamicScripts/scrtipSelections';
import { Separator } from '~/components/ui/separator';

export default async function Page({ params }: { params: { scriptValue: string } }) {
  const { scriptValue } = params;
  return (
    <main>
      <PageUpperImageContainer>
        <PageTitle title="SCRIPT LIBRARY" />
      </PageUpperImageContainer>
      <Separator />
      <ScriptSelections scriptValue={scriptValue} />
      <DownloadButton />
    </main>
  );
}
