import { ContactForm } from '~/app/components/contact/contactForm';
import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { generateMetadata } from '~/app/constants/pageHeading';

export const metadata = generateMetadata('Contact');

export default async function Page() {
  return (
    <main>
      <PageUpperImageContainer className="h-[162px]">
        <PageTitle
          className="drop-shadow-lg text-5xl px-10"
          title="Contact"
        />
      </PageUpperImageContainer>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="bg-background-green flex justify-center items-center py-10 w-full h-auto">
          <div className="w-full flex flex-col justify-center items-center gap-8">
            <p className="px-16 md:text-3xl text text-center font-bold">We're here to help at anytime. Please submit an inquiry and we will reach back out to you shortly.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
