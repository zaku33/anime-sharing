import CenterContent from "components/contents/center";
import LeftContent from "components/contents/left";
import RightContent from "components/contents/right";
import {AnimeList} from "type/anime";

export default function PageContent(animeList: AnimeList) {
  return <>
    <LeftContent />
    <CenterContent animeList={animeList} />
    <RightContent />
  </>;
}
