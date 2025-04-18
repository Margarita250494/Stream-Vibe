import "./Grid.scss"
import classNames from "classnames"

export const Grid = (props) => {
  const { columns = 1, children } = props
  return (
    <ul
      className={classNames("grid", {
        [`grid--${columns}`]: columns > 1,
      })}
    >
      {children.map((child, index) => (
        <li key={index} className="grid__item">
          {child}
        </li>
      ))}
    </ul>
  )
}
