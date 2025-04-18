import "./Header.scss"
import Logo from "@/components/Logo"
import classNames from "classnames"
import Button from "@/components/Button"
import BurgerButton from "@/components/BurgerButton"
import { menuItems } from "@/utils/data"

export const Header = (props) => {
  const { url, isFixed } = props

  return (
    <header
      className={classNames("header", { "is-fixed": isFixed })}
      data-js-overlay-menu=""
    >
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
          id="overlay-menu"
        >
          <nav className="header__menu" aria-label="Main navigation">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }) => (
                <li className="header__menu-item" key={label}>
                  <a
                    href={href}
                    className={classNames("header__menu-link", {
                      "is-active": url === href,
                    })}
                    aria-current={url === href ? "page" : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__actions">
            <Button
              className="header__button"
              label="Search"
              isLabelHidden
              iconName="search"
              mode="transparent"
            />
            <Button
              className="header__button"
              label="Notifications"
              isLabelHidden
              iconName="notification"
              mode="transparent"
            />
          </div>
        </dialog>
        <BurgerButton
          className="header__burger-button visible-tablet"
          extraAttrs={{
            "data-js-overlay-menu-burger-button": "",
          }}
        />
      </div>
    </header>
  )
}
