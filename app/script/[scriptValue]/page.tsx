import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { DownloadButton } from '~/app/components/scriptPage/dynamicScripts/download';
import { IMPORTED_SCRIPTS } from '~/app/components/scriptPage/scriptDropDown';

export default function Page({ params }: { params: { scriptValue: string } }) {
  return (
    <main>
      <PageUpperImageContainer>
        <PageTitle title="SCRIPT LIBRARY" />
      </PageUpperImageContainer>
      <div>Script: {params.scriptValue}</div>
      <DownloadButton />
    </main>
  );
}
