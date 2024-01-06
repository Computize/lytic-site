export const VideoContainer = () => {
  return (
    <div className="grid grid-cols-2 place-items-center mx-16">
      <iframe className="w-[500px] aspect-video" src="https://www.youtube.com/embed/YDeyaEkpKtk" title="SoHo Dragon January Webinar" allow="accelerometer; fullscreen; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <iframe className="w-[500px] aspect-video" src="https://www.youtube.com/embed/KgwdXPsdEl8" title="Easy Worfkow Automation with Microsoft Flow @ Transform 2.0 conference." allow="accelerometer; fullscreen; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
};
