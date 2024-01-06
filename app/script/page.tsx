import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { NeedMoreHelpContainer } from '~/app/components/scriptPage/needMoreHelpContainer';
import { ScriptDescriptionAndDropDownContainer } from '~/app/components/scriptPage/scriptDescriptionAndDropDownContainer';

export default async function Page() {
  return (
    <main>
      <PageUpperImageContainer>
        <div className="flex justify-center items-center h-full w-full bg-gradient-to-t from-primary-green via-primary-green to-white">
          <PageTitle title="SCRIPT LIBRARY" />
        </div>
      </PageUpperImageContainer>
      <ScriptDescriptionAndDropDownContainer />
      <NeedMoreHelpContainer />
    </main>
  );
}
