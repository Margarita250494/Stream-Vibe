import "./MovieBannerCard.scss"
import { Image } from "minista"
import Button from "@/components/Button"
import classNames from "classnames"

export const MovieBannerCard = (props) => {
  const {
    title,
    titleId,
    TitleTag = "h2",
    description,
    imgSrc,
    isSmallPaddingY = false,
  } = props

  return (
    <div className="movie-banner-card">
      <Image src={imgSrc} className="movie-banner-card__image" />
      <div
        className={classNames("movie-banner-card__inner", {
          "movie-banner-card__inner--small-padding-y": isSmallPaddingY,
        })}
      >
        <div className="movie-banner-card__body">
          <TitleTag id={titleId} className="movie-banner-card__title h3">
            {title}
          </TitleTag>
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
