import "./MovieCard.scss"
import { Image } from "minista"
import Badge from "@/components/Badge"

export const MovieCard = (props) => {
  const { title, imgSrc, duration, views, href = "/move", released } = props

  return (
    <a className="movie-card" href={href} title={title}>
      <h3 className="visually-hidden">{title}</h3>
      <Image src={imgSrc} className="movie-card__image" />
      <div className="movie-card__body">
        {duration && (
          <Badge hasFillIcon iconName="clock" iconAriaLabel="Movie duration">
            {duration}
          </Badge>
        )}
        {views && (
          <Badge hasFillIcon iconName="eye" iconAriaLabel="Views">
            {views}
          </Badge>
        )}
        {released && (
          <Badge className="movie-card__released-badge">
            Released at{" "}
            <time
              className="movie-card__released-badge-label"
              dateTime={released.dateTime}
            >
              {released.label}
            </time>
          </Badge>
        )}
      </div>
    </a>
  )
}
