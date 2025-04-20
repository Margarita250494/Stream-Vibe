import "./Content.scss"
import classNames from "classnames"

export const Content = (props) => {
  const { children, isResetPaddingTop = false } = props
  return (
    <main
      className={classNames("content", {
        "content--reset-padding-top": isResetPaddingTop,
      })}
    >
      {children}
    </main>
  )
}
