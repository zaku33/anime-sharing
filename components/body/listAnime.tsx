import Image, {ImageLoaderProps} from "next/image";
import {AnimeList} from "type/anime";

export default function ListAnime(animeList: AnimeList) {
  const myLoader = ({src, width, quality, domain}: ImageLoaderProps & {domain: string;}) => {
    return `${domain}/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <div className="page-l md:w-1/4 w-full md:h-fit px-2 md:px-1 md:sticky top-0">
        <div className="max-w-md md:h-128 p-6 bg-main-navbar border border-blue-200 rounded-lg shadow dark:bg-teal-400 ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-purple-600">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>

      <div className="page-m md:w-1/2 w-full md:h-fit px-2 md:px-0">
        {animeList.data?.map(anime => (
          <div className="anime-item" key={anime.id}>
            <h3 className="anime-title text-center text-blue-600 font-bold">{anime.title}</h3>
            <div className="anime-image-cover md:h-[500px] md:w-full h-[100px] w-200 relative">
              <Image
                loader={(p) => myLoader({src: anime.imgSrc, width: p.width, quality: p.quality, domain: anime.imgDomain})}
                src={anime.imgSrc}
                fill
                style={{objectFit: 'cover'}}
                sizes="md:h-[500px] md:w-full h-[100px] w-200"
                alt={anime.title}
              />
            </div>
            <div className="anime-description">
              <span>{anime.description}</span>
            </div>
          </div>
        ))}

      </div>

      <div className="page-r md:w-1/4 w-full md:h-1/2 px-2 md:px-1 md:sticky top-0">
        <div className="max-w-md md:h-128 p-6 bg-main-navbar border border-blue-200 rounded-lg shadow dark:bg-teal-400 ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Right content will be displayed here</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-purple-600">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </>
  );
}
