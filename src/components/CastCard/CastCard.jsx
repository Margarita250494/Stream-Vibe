import { Image } from "minista"
import "./CastCard.scss"

export const CastCard = (props) => {
  const { imgSrc, imgAlt } = props
  return (
    <div className="cast-card">
      <Image
        className="cast-card__image"
        src={imgSrc}
        alt={imgAlt}
        title={imgAlt}
      />
    </div>
  )
}
