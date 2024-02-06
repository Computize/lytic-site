import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';

export default function Page() {
  return (
    <main className="flex flex-col w-full">
      <PageUpperImageContainer>
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            backgroundImage: "url('/star_packeges-banner.png')",
          }}
        >
          <div className="flex items-center text-center">
            <p className="text-white text-5xl font-bold">STARTER PACKAGES</p>
          </div>
        </div>
      </PageUpperImageContainer>
    </main>
  );
}
