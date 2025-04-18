import "./CategotyCard.scss"
import { Image } from "minista"
import Icon from "@/components/Icon"

export const CategoryCard = (props) => {
  const { title, images = [] } = props
  return (
    <a className="category-card" href="/movies">
      <div className="category-card__images">
        {images.map((imgSrc, index) => (
          <Image src={imgSrc} className="category-card__image" key={index} />
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">{title}</h3>
        <Icon className="category-card__icon" name="arrow-right" />
      </div>
    </a>
  )
}
