import "./MoviesBanner.scss"
import { movieCards } from "@/utils/data"
import Slider from "@/components/Slider"
import MovieBannerCard from "@/components/MovieBannerCard"

export const MoviesBanner = () => {
  const titleId = "movies-banner-title"

  return (
    <section className="movies-banner container" aria-labelledby={titleId}>
      <h1 className="visually-hidden" id={titleId}>
        Movies & Shows
      </h1>
      <Slider
        sliderParams={{
          slidesPerView: 1,
          breakpoints: {
            1024: {
              allowTouchMove: false,
            },
          },
        }}
        navigationPosition="abs-bottom"
        hasScrollBarOnMobile={false}
      >
        {movieCards.map((movie) => (
          <MovieBannerCard key={movie.title} {...movie} />
        ))}
      </Slider>
    </section>
  )
}
