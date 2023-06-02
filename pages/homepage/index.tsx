import PageContent from "components/contents";
import Loading from "components/Loading";
import {AnimeList} from "type/anime";


export default function Homepage(animeList: AnimeList) {
  return (
    <div className="homepage md:h-fit flex flex-wrap justify-center align-middle">
      {animeList.isLoading ? <Loading /> : <PageContent isLoading={animeList.isLoading} data={animeList.data} />}
    </div>
  );
}
Homepage.getInitialProps = async () => {
  const fetchData: AnimeList = {
    isLoading: true,
    data: [],
  };
  await new Promise(resolve => setTimeout(() => {
    fetchData.isLoading = false;
    fetchData.data = [
      {
        id: 1,
        title: 'Shigatsu wa kimi uso',
        imgDomain: 'https://hanayukichan.files.wordpress.com',
        imgSrc: '2015/10/1257798871309782118.png',
        description: "Kousei Arima is a child prodigy known as the \"Human Metronome\" for playing the piano with precision and perfection. Guided by a strict mother and rigorous training, Kousei dominates every competition he enters, earning the admiration of his musical peers and praise from audiences. When his mother suddenly passes away, the subsequent trauma makes him unable to hear the sound of a piano, and he never takes the stage thereafter.",
        rankings: 10,
        votes: 123456
      },
      {
        id: 2,
        title: 'Angel Beats',
        imgDomain: 'http://cmavn.org',
        imgSrc: 'wp-content/uploads/2020/07/1-2.jpg',
        description: "Angel Beats! is an original anime that was created by screenplay writer Jun Maeda and directed by Seiji Kishi. A manga adaptation was later released by Jun Maeda and published by ASCII Media Works in Dengeki G's Magazine. The manga was used as a way to expand on elements of the plot that could not be fitted into the show's original running time. The series has been praised for its integration of music, humor, and action into a plot with deep and powerful themes. The show was chosen as a recommended work by the awards jury of the 18th Japan Media Arts Festival in the year 2014.",
        rankings: 9,
        votes: 234561
      }
    ];
    resolve(fetchData);
  }, 0));
  return fetchData;
};
