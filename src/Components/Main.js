import { useState } from 'react';
import Stars from './Assets/Stars.svg';
import StarsBackground from './Assets/StarsBackground.svg';
import ParentSlide from './ParentSlide';
const Main = ({ data, genres }) => {
  const backgroundBaseUrl = 'https://image.tmdb.org/t/p/original';
  const [textHeader, setTextHeader] = useState('DragonZila');
  const [stars, setStars] = useState(8);
  const [textParagraph, setTextParagraph] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloribus dolores reiciendis fuga maxime inventore.'
  );
  const [genre, setGenre] = useState(['Crime', 'Drama', 'Mystery']);
  const [backdropPath, setBackdropPath] = useState(
    '/5NxjLfs7Bi07bfZCRl9CCnUw7AA.jpg'
  );

  // backdrop_path, genre_ids, title, vote_average
  const mainInfoTransition = (
    header,
    stars,
    paragraph,
    genre,
    backdropPath
  ) => {
    setTextHeader(header);
    setStars(stars);
    setTextParagraph(paragraph);
    setGenre(genre);
    setBackdropPath(backdropPath);
  };

  // useEffect(() => {
  //   const gitGud = () => {
  //     let firstItem = [];
  //     firstItem.push(data.results[0]);
  //     let firstObj = firstItem[0];
  //     console.log(firstObj);
  //     mainInfoTransition(
  //       firstObj.title,
  //       firstObj.vote_average,
  //       firstObj.overview,
  //       firstObj.genre_ids,
  //       firstObj.backdrop_path
  //     );
  //   };
  //   data.results && gitGud();
  // }, [data]);
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${backgroundBaseUrl + backdropPath} )`,
      }}
    >
      <InfoText
        textHeader={textHeader}
        stars={stars}
        textParagraph={textParagraph}
        genre={genre}
      />
      <ParentSlide
        mainInfoTransition={mainInfoTransition}
        data={data}
        genres={genres}
      />
    </div>
  );
};

const InfoText = ({ textHeader, stars, textParagraph, genre }) => {
  return (
    <div className="infoText container">
      <h1>{textHeader}</h1>
      <div className="starsContainer">
        <img src={StarsBackground} alt="stars" className="stars" />

        <div className="starsRating" style={{ width: (stars / 10) * 282 }}>
          <img src={Stars} alt="stars" className="stars" />
        </div>
      </div>
      <div className="genreContainer">
        {genre.map((element) => (
          <h3 key={element}>{element}</h3>
        ))}
      </div>
      <p>{textParagraph}</p>
    </div>
  );
};
export default Main;
