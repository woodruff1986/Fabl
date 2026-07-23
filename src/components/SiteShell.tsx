import { useEffect, useId, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { withBase } from "../lib/base";

export type NavItem = {
  href: string;
  label: string;
};

type SiteShellProps = {
  navItems: readonly NavItem[];
  children: ReactNode;
};

function resolveHref(href: string, pathname: string) {
  if (href.startsWith("#")) {
    if (pathname !== "/") return withBase(`/${href}`);
    return href;
  }
  if (href.includes("#")) return withBase(href);
  return href;
}

function isRouterPath(href: string) {
  return href.startsWith("/") && !href.includes("#");
}

export function SiteShell({ navItems, children }: SiteShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="topbar">
        <nav className="topbar__side" aria-label="Navigation">
          {navItems.map((item) => {
            const href = resolveHref(item.href, pathname);
            return isRouterPath(href) ? (
              <Link key={item.href} to={href}>
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={href}>
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="topbar__work"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen(true)}
        >
          Menu
        </button>
      </header>

      <div
        className={`menu ${menuOpen ? "menu--open" : ""}`}
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="menu__close"
          aria-label="Fermer le menu"
          onClick={closeMenu}
        >
          <span />
          <span />
        </button>
        <nav className="menu__list">
          {navItems.map((item) => {
            const href = resolveHref(item.href, pathname);
            return isRouterPath(href) ? (
              <Link key={item.href} to={href} onClick={closeMenu}>
                <span className="menu__title">{item.label}</span>
              </Link>
            ) : (
              <a key={item.href} href={href} onClick={closeMenu}>
                <span className="menu__title">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
      {menuOpen ? (
        <button
          type="button"
          className="menu__backdrop"
          aria-label="Fermer"
          onClick={closeMenu}
        />
      ) : null}

      {children}

      <footer className="footer">
        <Link className="footer__brand" to="/">
          Fabl
        </Link>
        <span>Studio de narrative design</span>
        <Link to="/v2">V2</Link>
      </footer>
    </div>
  );
}
