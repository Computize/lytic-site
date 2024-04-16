import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { NeedMoreHelpContainer } from '~/app/components/scriptPage/needMoreHelpContainer';
import { ScriptDescriptionAndDropDownContainer } from '~/app/components/scriptPage/scriptDescriptionAndDropDownContainer';
import { generateMetadata } from '~/app/constants/pageMetadata';

export const metadata = generateMetadata('Script Library');

export default async function Page() {
  return (
    <main>
      <PageUpperImageContainer>
        <PageTitle title="SCRIPT LIBRARY" />
      </PageUpperImageContainer>
      <div className="mx-0 md:mx-28 lg:mx-32">
        <ScriptDescriptionAndDropDownContainer />
      </div>
      <NeedMoreHelpContainer />
    </main>
  );
}
