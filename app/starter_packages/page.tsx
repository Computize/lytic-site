import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';

export default function Page() {
  return (
    <main className="flex flex-col w-full">
      <PageUpperImageContainer imageSource="/star_packeges-banner.png">
        <PageTitle title="STARTER PACKAGES" />
      </PageUpperImageContainer>
    </main>
  );
}
