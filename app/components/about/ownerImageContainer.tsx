export const OwnerImageContainer = () => {
  return (
    <div className="flex flex-col">
      <img
        src={'/owner-img.png'}
        width={2000}
        height={1000}
        alt="Image of the owner"
      />
      <p>Edward Heraux</p>
      <p>Founder & President</p>
    </div>
  );
};
