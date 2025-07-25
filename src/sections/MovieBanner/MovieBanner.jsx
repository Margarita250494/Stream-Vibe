import MovieBannerCard from "@/components/MovieBannerCard"
import "./MovieBanner.scss"
export const MovieBanner = () => {
  const titleId = "movie-banner-title"

  return (
    <section className="container" aria-labelledby={titleId}>
      <MovieBannerCard
        titleId={titleId}
        TitleTag="h1"
        title="Kantara"
        description="A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands."
        imgSrc="/src/assets/images/movie-banner/2.jpg"
        isSmallPaddingY
      />
    </section>
  )
}
