import "./CategotyCard.scss"
import { Image } from "minista"
import Icon from "@/components/Icon"
import Badge from "@/components/Badge"

export const CategoryCard = (props) => {
  const { title, images = [], badge } = props
  return (
    <a className="category-card" href="/movies">
      <div className="category-card__images">
        {images.map((imgSrc, index) => (
          <Image src={imgSrc} className="category-card__image" key={index} />
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">
          {badge && (
            <span className="category-card__badge">
              <Badge className="category-card__badge" mode="accent" isBig>
                {badge}
              </Badge>
            </span>
          )}
          <span>{title}</span>
        </h3>
        <Icon className="category-card__icon" name="arrow-right" />
      </div>
    </a>
  )
}
