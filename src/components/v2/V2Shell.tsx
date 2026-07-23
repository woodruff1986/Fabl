import { useEffect, useId, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { withBase } from "../../lib/base";

export type V2NavItem = {
  href: string;
  label: string;
};

type V2ShellProps = {
  navItems: readonly V2NavItem[];
  children: ReactNode;
  cta?: { href: string; label: string };
};

function LogoMark() {
  return (
    <span className="v2-logo__mark" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="4" y="3" width="4.5" height="18" rx="1" fill="currentColor" />
        <path
          d="M11.2 3h4.2c3.2 0 5.4 2.1 5.4 5.1 0 2.2-1.1 3.8-2.9 4.6L21.2 21h-5.1l-2.9-7.2H15.7c1.15 0 1.9-.7 1.9-1.75S16.85 10.3 15.7 10.3h-4.5V3Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

function resolveHref(href: string, pathname: string) {
  if (href.startsWith("#")) {
    return pathname === "/v2" ? href : withBase(`/v2${href}`);
  }
  if (href.includes("#")) return withBase(href);
  return href;
}

function isRouterPath(href: string) {
  return href.startsWith("/") && !href.includes("#");
}

export function V2Shell({
  navItems,
  children,
  cta = { href: "#contact", label: "Contact" },
}: V2ShellProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const ctaHref = resolveHref(cta.href, pathname);

  return (
    <div className="v2">
      <header className="v2-top">
        <Link className="v2-logo" to="/v2">
          <LogoMark />
          Fabl
        </Link>

        <nav className="v2-nav" aria-label="Navigation">
          <div className="v2-nav__links">
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
          </div>
          {isRouterPath(ctaHref) ? (
            <Link className="v2-nav__cta" to={ctaHref}>
              {cta.label}
            </Link>
          ) : (
            <a className="v2-nav__cta" href={ctaHref}>
              {cta.label}
            </a>
          )}
        </nav>

        <button
          type="button"
          className="v2-menu-btn"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </header>

      <div
        className={`v2-drawer ${open ? "v2-drawer--open" : ""}`}
        id={menuId}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Fermer"
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            inset: 0,
            border: 0,
            background: "transparent",
            cursor: "pointer",
          }}
        />
        <div
          className="v2-drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <button
            type="button"
            className="v2-drawer__close"
            onClick={() => setOpen(false)}
          >
            Fermer
          </button>
          {navItems.map((item) => {
            const href = resolveHref(item.href, pathname);
            return isRouterPath(href) ? (
              <Link key={item.href} to={href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            );
          })}
          <a href={ctaHref} onClick={() => setOpen(false)}>
            {cta.label}
          </a>
        </div>
      </div>

      {children}

      <footer className="v2-footer">
        <Link className="v2-footer__brand" to="/v2">
          <LogoMark />
          Fabl
        </Link>
        <span>Studio de narrative design</span>
        <div className="v2-footer__links">
          <Link to="/">V1</Link>
        </div>
      </footer>
    </div>
  );
}
