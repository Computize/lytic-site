'use server';
import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { ScriptContainer } from '~/app/components/scriptPage/dynamicScripts/scriptContainer';
import { ScriptSelections } from '~/app/components/scriptPage/dynamicScripts/scriptSelections';
import { IMPORTED_SCRIPTS } from '~/app/components/scriptPage/scriptDropDown';
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
      <div className="py-12 flex justify-center">
        <ScriptContainer scriptValue={scriptValue} />
      </div>
    </main>
  );
}
