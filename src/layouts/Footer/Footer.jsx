import "./Footer.scss"
import { footerExtraLinks, footerMenuItems } from "@/utils/data"
import Socials from "@/components/Socials"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          {footerMenuItems.map(({ title, href, links, socialLinks }) => (
            <div className="footer__menu-column" key={title}>
              <a href={href} className="footer__menu-title h6">
                {title}
              </a>
              {links?.length > 0 && (
                <ul className="footer__menu-list">
                  {links.map((link, index) => (
                    <li className="footer__menu-item" key={index}>
                      <a href="/" className="footer__menu-link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {socialLinks?.length > 0 && (
                <Socials className="footer__soc1als" links={socialLinks} />
              )}
            </div>
          ))}
        </nav>
        <div className="footer__extra">
          <p className="footer__copyright">
            @<time dateTime="2023">2023</time> streamvib, All Rights Reserved
          </p>
          <div className="footer__extra-links">
            {footerExtraLinks.map(({ label, href }) => (
              <a key={label} href={href} className="footer__extra-link">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
