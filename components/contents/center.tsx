import Image, {ImageLoaderProps} from "next/image";
import {AnimeList} from "type/anime";

export default function CenterContent(props: {
  animeList: AnimeList;
}) {
  const {animeList} = props;
  const myLoader = ({src, width, quality, domain}: ImageLoaderProps & {domain: string;}) => {
    return `${domain}/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="page-m md:w-1/2 w-full md:h-fit px-2 md:px-0">
      {animeList.data.map(anime => (
        <div className="anime-item" key={anime.id}>
          <h3 className="anime-title bg-white text-center text-blue-600 font-bold">{anime.title}</h3>
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
  );
}
