import { FaLinkedin } from 'react-icons/fa';

export const OwnerImageContainer = () => {
  return (
    <div className="flex flex-col">
      <img
        src={'/owner-img.png'}
        width={2000}
        height={1000}
        alt="Image of the owner"
      />
      <div className="flex flex-col">
        <p className="font-bold text-lg">Edward Heraux</p>
        <p className="text-lg">Founder & President</p>
        {/* TODO: LinkedIn Logo, 2 line gap between founder text and logo */}
        {/* I would like that linked in logo 2 lines below "President", and flush with the left of that word. And then to the right of the logo the word "Connect". Both the logo and the text should both be links to the profile. */}
        <a
          href="https://www.linkedin.com/in/edward-heraux-pmp-mcse-7308261/"
          className="text-blue-500"
        >
          <FaLinkedin size={40} />
          <p className="hover:underline">Connect</p>
        </a>
      </div>
    </div>
  );
};
