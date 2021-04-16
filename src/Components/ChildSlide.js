const ChildSlide = (props) => {
  const {
    backdrop_path,
    genre_ids,
    title,
    vote_average,
    poster_path,
    overview,
  } = props.data;

  const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';
  // header, stars, paragraph, genre, backdropPath
  const { genres } = props.genres;
  const handleClick = () => {
    let genreContainer = [];

    for (let i = 0; i < genre_ids.length; i++) {
      for (let j = 0; j < genres.length; j++) {
        if (genre_ids[i] === genres[j].id) {
          genreContainer.push(genres[j].name);
        }
      }
    }

    props.mainInfoTransition(
      title,
      vote_average,
      overview,
      genreContainer,
      backdrop_path
    );
  };

  return (
    // header, stars, paragraph, genre
    <div className="moviesContainer">
      <div
        className="movies"
        style={{ backgroundImage: `url(${posterBaseUrl + poster_path})` }}
        onClick={handleClick}
      >
        {/* <h3>{title}</h3> */}
      </div>
    </div>
  );
};

export default ChildSlide;
