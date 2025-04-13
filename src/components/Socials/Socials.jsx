import "./Socials.scss"
import classNames from "classnames"
import Button from "@/components/Button"

export const Socials = (props) => {
  const { className, links = [] } = props
  return (
    <div className={classNames(className, "soc1als")}>
      <ul className="soc1als__list">
        {links.map(({ label, iconName, href }) => (
          <li className="soc1als__item" key={label}>
            <Button
              className="soc1als__link"
              href={href}
              target="_blank"
              mode="black-10"
              label={label}
              isLabelHidden
              iconName={iconName}
              hasFillIcon
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
