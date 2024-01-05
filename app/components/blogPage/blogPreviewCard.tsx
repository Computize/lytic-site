export const BlogPreviewCard = () => {
  /* TODO: replace with carousel */
  return (
    <div className="min-w-[20px] max-w-[400px] max-h-[532px] border-[1px] flex flex-col gap-4 p-4">
      <p className="text-3xl text-primary-green">PLACEHOLDER CARD TITLE ETC ETC</p>
      <div>
        <p className="text-sm font-[500] text-gray-600">Edward Heraux</p>
        <p className="text-sm text-gray-400">April 15,2021</p>
      </div>
      <p className="text-xl">Your data warehouse and reporting databases may have preformed adequately for a while now and quietly stayed out of your way . But are they as ready for your next wave of data? Here are our Top 4 reasons why they're not.</p>
      <button className="bg-primary-green">Read More</button>
    </div>
  );
};
