import ChildSlide from './ChildSlide';
// import { genres } from './APICall';

const ElementSlide = ({ mainInfoTransition, data, genres }) => {
  return (
    <>
      <div className="horizontal-scroll-wrapper squares">
        {data.results &&
          data.results.map(
            (data) =>
              data.backdrop_path && (
                <ChildSlide
                  key={data.id}
                  data={data}
                  mainInfoTransition={mainInfoTransition}
                  genres={genres}
                />
              )
          )}
      </div>
    </>
  );
};

export default ElementSlide;
