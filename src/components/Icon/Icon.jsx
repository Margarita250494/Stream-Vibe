import "./Icon.scss"
import classNames from "classnames"
import { Icon as MinistaIcon } from "minista"

export const Icon = (props) => {
  const { className, name, hasFill = false, ariaLabel } = props

  return (
    <span aria-label={ariaLabel} className={classNames(className, "icon")}>
      <MinistaIcon
        iconId={name}
        fill={hasFill ? "currentColor" : "none"}
        stroke={hasFill ? "none" : "currentColor"}
      />
    </span>
  )
}
