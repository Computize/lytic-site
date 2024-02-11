import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';

export default function Page({ params }: { params: { scriptValue: string } }) {
  return (
    <main>
      <PageUpperImageContainer>
        <PageTitle title="SCRIPT LIBRARY" />
      </PageUpperImageContainer>
      <div>Script: {params.scriptValue}</div>
    </main>
  );
}
