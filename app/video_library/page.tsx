import { PageTitle } from '~app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';

export default async function Page() {
  return (
    <main>
      <div className="min-w-full h-[350px]">
        <div className="flex justify-center items-center h-full w-full bg-gradient-to-t from-primary-green via-primary-green to-white">
          <PageTitle title="SCRIPT LIBRARY" />
        </div>
      </div>
    </main>
  );
}
