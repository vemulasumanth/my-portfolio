import React from "react";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://i.ibb.co/HXf93jY/Screenshot-91.png",
      code: "https://github.com/vemulasumanth/sumanth-FoodApp"
    },
  ];
  const deployedPortfolios = [
    {
      id: 1,
      src: "https://i.ibb.co/gb1LRyD/Screenshot-95.png",
      code: "https://github.com/vemulasumanth/sumanth_HotelApp",
      webLink: "https://moonlight-stays.netlify.app/"
    },
  ];
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-gray-400">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,code }) => (
            <div key={id} className="shadow-md shadow-white rounded-lg">
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 flex items-center justify-center duration-200 hover:scale-105"
                >
                  code
                </a>
              </div>
            </div>
          ))}
          {deployedPortfolios.map(({ id,src,code,webLink}) => (
            <div key={id} className="shadow-md shadow-white rounded-lg">
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 flex items-center justify-center duration-200 hover:scale-105"
                >
                  code
                </a>
                <a
                  href={webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 flex items-center justify-center duration-200 hover:scale-105"
                >
                  website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
