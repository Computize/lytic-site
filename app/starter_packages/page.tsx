import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';

export default function Page() {
  return (
    <main className="flex flex-col w-full">
      <PageUpperImageContainer imageSource="/star_packeges-banner.png">
        <div className="flex items-center text-center">
          <p className="text-white text-5xl font-bold">STARTER PACKAGES</p>
        </div>
      </PageUpperImageContainer>
    </main>
  );
}
