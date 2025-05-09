import "./MovieBannerCard.scss"
import { Image } from "minista"
import Button from "@/components/Button"

export const MovieBannerCard = (props) => {
  const { title, description, imgSrc } = props

  return (
    <div className="movie-banner-card">
      <Image src={imgSrc} className="movie-banner-card__image" />
      <div className="movie-banner-card__inner">
        <div className="movie-banner-card__body">
          <h2 className="movie-banner-card__title h3">{title}</h2>
          <div className="movie-banner-card__description hidden-mobile">
            <p>{description}</p>
          </div>
        </div>
        <footer className="movie-banner-card__footer">
          <Button
            className="movie-banner-card__play-button"
            iconName="playButton"
            label="PLay Now"
            hasFillIcon
          />
          <div className="movie-banner-card__actions">
            <Button
              iconName="plus"
              label="Add to playlist"
              isLabelHidden
              mode="black-06"
            />
            <Button
              iconName="like"
              label="Like"
              isLabelHidden
              mode="black-06"
            />
            <Button
              iconName="volume"
              label="Mute"
              isLabelHidden
              mode="black-06"
            />
          </div>
        </footer>
      </div>
    </div>
  )
}
