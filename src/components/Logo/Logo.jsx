import "./Logo.scss"
import classNames from "classnames"

export const Logo = (props) => {
  const { loading = "lazy", className } = props
  const title = "Home"
  return (
    <a
      className={classNames(className, "logo")}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src="/logo.svg"
        alt=""
        width={199}
        height={60}
        loading={loading}
      />
    </a>
  )
}
