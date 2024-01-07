import Image from 'next/image';

export const OwnerImageContainer = () => {
  return (
    <div className="flex flex-col">
      <Image src={'/owner-img.png'} width={1000} height={1000} quality={80} alt="Image of the owner" />
      <p>Edward Heraux</p>
      <p>Founder & President</p>
    </div>
  );
};
