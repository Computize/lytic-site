// app/aboutus/page.tsx
import AboutPage from '~/app/about/page';
import { generateMetadata } from '~/app/constants/pageMetadata';

export const metadata = generateMetadata('About Us');

export default function Page() {
  return <AboutPage />;
}