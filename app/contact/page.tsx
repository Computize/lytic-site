import { generateMetadata } from '~/app/constants/pageHeading';

export const metadata = generateMetadata('Contact');

export default async function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Contact Us</h1>
    </main>
  );
}
