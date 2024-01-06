import { Container } from '~/app/components/container';
import { PageTitle } from '~/app/components/pageTitle';

export default async function Page() {
  return (
    <main>
      <div className="flex justify-center items-center h-[432px] w-full bg-gradient-to-t from-primary-green via-primary-green to-white">
        <PageTitle title="SCRIPT LIBRARY" />
      </div>
    </main>
  );
}
