"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SuccessfullLogin } from "@/components/Auth/AuthDialog/SuccessfulLogin";
import { UserRegistered } from "@/components/Auth/AuthDialog/UserRegistered";
import { FailedLogin } from "@/components/Auth/AuthDialog/FailedLogin";
import AuthDialogContext from "@/app/context/AuthDialogContext";

interface HeaderItem {
  id: number;
  label: string;
  href: string;
  newTab?: boolean;
  submenu?: HeaderItem[];
}

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<number | null>(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const megaMenuTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check screen size for mobile/tablet view
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth <= 1061);
      if (window.innerWidth <= 1061) {
        setIsMegaMenuOpen(false);
        setActiveMegaMenu(null);
      }
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
    if (
      megaMenuRef.current &&
      !megaMenuRef.current.contains(event.target as Node) &&
      isMegaMenuOpen
    ) {
      setIsMegaMenuOpen(false);
      setActiveMegaMenu(null);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      if (megaMenuTimerRef.current) {
        clearTimeout(megaMenuTimerRef.current);
      }
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen, isMegaMenuOpen]);

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen || isMegaMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen, isMegaMenuOpen]);

  const handleMegaMenuEnter = (id: number) => {
    if (megaMenuTimerRef.current) {
      clearTimeout(megaMenuTimerRef.current);
    }
    setActiveMegaMenu(id);
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimerRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
      setActiveMegaMenu(null);
    }, 200);
  };

  const cancelMegaMenuLeave = () => {
    if (megaMenuTimerRef.current) {
      clearTimeout(megaMenuTimerRef.current);
    }
  };

  const authDialog = useContext(AuthDialogContext);

  // Header styles - Updated with permanent white background
  const headerStyles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "150px",
    zIndex: 50,
    backgroundColor: "#ffffff",
    backdropFilter: "none",
    boxShadow: sticky
      ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      : "none",
    transition: "all 0.3s ease",
    padding: "0.5rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  // Container styles
  const containerStyles: React.CSSProperties = {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
    height: "100%",
    position: "relative",
  };

  // Logo container styles
  const logoContainerStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    maxHeight: "60px",
    width: "auto",
    flexShrink: 0,
  };

  // Navigation styles
  const navStyles: React.CSSProperties = {
    display: isMobileView ? "none" : "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  // Right controls container
  const controlsStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  };

  // Theme toggle button
  const themeButtonStyles: React.CSSProperties = {
    display: "flex",
    height: "2rem",
    width: "2rem",
    alignItems: "center",
    justifyContent: "center",
    color: "#1e293b",
    background: "none",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.2s",
  };

  // Auth buttons (desktop)
  const authButtonStyles: React.CSSProperties = {
    background: "linear-gradient(to right, #6A0D1B, #420516)",
    color: "#ffffff",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    transition: "filter 0.2s",
  };

  // Compact auth buttons (mobile/tablet)
  const compactAuthButtonStyles: React.CSSProperties = {
    ...authButtonStyles,
    padding: "0.375rem 0.75rem",
    fontSize: "0.8125rem",
  };

  // Secondary auth button (sign up)
  const secondaryAuthButtonStyles: React.CSSProperties = {
    ...compactAuthButtonStyles,
    background: "none",
    border: "1px solid #6A0D1B",
    color: "#6A0D1B",
  };

  // Mobile menu button
  const mobileMenuButtonStyles: React.CSSProperties = {
    display: isMobileView ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    height: "2rem",
    width: "2rem",
    background: "none",
    border: "none",
    borderRadius: "0.25rem",
    cursor: "pointer",
    color: "#1e293b",
  };

  // Mobile menu styles
  const mobileMenuStyles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    maxWidth: "20rem",
    height: "100vh",
    backgroundColor: "#ffffff",
    boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.1)",
    transform: navbarOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.3s ease",
    zIndex: 50,
    overflowY: "auto",
  };

  // Mobile menu header
  const mobileMenuHeaderStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    borderBottom: "1px solid #e2e8f0",
  };

  // Mobile menu title
  const mobileMenuTitleStyles: React.CSSProperties = {
    fontSize: "1rem",
    fontWeight: 600,
    color: "#1e293b",
    margin: 0,
  };

  // Mobile menu close button
  const mobileMenuCloseButtonStyles: React.CSSProperties = {
    ...mobileMenuButtonStyles,
    display: "flex",
  };

  // Mobile menu nav
  const mobileMenuNavStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
  };

  // Mobile menu buttons container
  const mobileMenuButtonsStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    marginTop: "1rem",
  };

  // Modal overlay
  const modalOverlayStyles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
  };

  // Modal content
  const modalContentStyles: React.CSSProperties = {
    position: "relative",
    width: "100%",
    maxWidth: "28rem",
    backgroundColor: "#ffffff",
    borderRadius: "0.5rem",
    padding: "2rem",
    margin: "1rem",
    boxShadow: "0 0 1rem rgba(0, 0, 0, 0.2)",
  };

  // Modal close button
  const modalCloseButtonStyles: React.CSSProperties = {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#1e293b",
  };

  // Alert container
  const alertContainerStyles: React.CSSProperties = {
    position: "fixed",
    top: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 50,
  };

  // Mega Menu Styles
  const megaMenuStyles: React.CSSProperties = {
    position: "absolute",
    top: "calc(100% - 5px)", // Reduced gap - moves menu closer to the link
    left: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    display: isMegaMenuOpen ? "block" : "none",
    zIndex: 40,
    borderTop: "1px solid #e2e8f0",
  };

  const megaMenuGridStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)", // exactly 4 equal columns
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const megaMenuColumnStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const megaMenuCategoryTitleStyles: React.CSSProperties = {
    fontSize: "1rem",
    fontWeight: 600,
    color: "#6A0D1B",
    marginBottom: "0.5rem",
    paddingBottom: "0.5rem",
    borderBottom: "1px solid #e2e8f0",
  };

  const megaMenuItemStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#4a5568",
    textDecoration: "none",
    transition: "color 0.2s",
    padding: "0.5rem 0",
  };

  const megaMenuIconStyles: React.CSSProperties = {
    color: "#6A0D1B",
    fontSize: "1rem",
  };

  const programsData = headerData.find((item) => item.id === 3);

  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        <div style={logoContainerStyles}>
          <Logo
            style={{ height: "100%", width: "auto", objectFit: "contain" }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav style={navStyles}>
          {headerData.map((item: HeaderItem) => (
            <div
              key={item.id}
              onMouseEnter={() => item.id === 3 && handleMegaMenuEnter(item.id)}
              onMouseLeave={item.id === 3 ? handleMegaMenuLeave : undefined}
            >
              <HeaderLink
                item={item}
                style={{
                  fontSize: "0.9375rem",
                  padding: "0.5rem 1rem",
                  color: "#1e293b",
                  textDecoration: "none",
                  borderRadius: "0.25rem",
                  transition: "background-color 0.2s",
                  position: "relative",
                  fontWeight: item.id === 3 ? 600 : "normal",
                }}
                isMegaMenu={item.id === 3} // ✅ PASS this
              />
            </div>
          ))}
        </nav>

        {/* Mega Menu for Programs */}
        {isMegaMenuOpen && activeMegaMenu === 3 && (
          <div
            style={megaMenuStyles}
            ref={megaMenuRef}
            onMouseEnter={cancelMegaMenuLeave}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div style={megaMenuGridStyles}>
              {programsData?.submenu?.map((category) => (
                <div key={category.id} style={megaMenuColumnStyles}>
                  <h3 style={megaMenuCategoryTitleStyles}>{category.label}</h3>
                  {category.submenu ? (
                    category.submenu.map((program) => (
                      <Link
                        key={program.id}
                        href={program.href}
                        style={megaMenuItemStyles}
                        onClick={() => {
                          setIsMegaMenuOpen(false);
                          setActiveMegaMenu(null);
                        }}
                      >
                        <Icon
                          icon="ph:caret-right-fill"
                          style={megaMenuIconStyles}
                        />
                        <span className="mega-menu-link">{program.label}</span>
                      </Link>
                    ))
                  ) : (
                    <Link
                      href={category.href}
                      style={megaMenuItemStyles}
                      onClick={() => {
                        setIsMegaMenuOpen(false);
                        setActiveMegaMenu(null);
                      }}
                    >
                      <Icon
                        icon="ph:caret-right-fill"
                        style={megaMenuIconStyles}
                      />
                      <span className="mega-menu-link">Learn More</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Right Controls Here In Google Keep */}
      </div>

      {/* Mobile Menu */}
      <div style={mobileMenuStyles} ref={mobileMenuRef}>
        <div style={mobileMenuHeaderStyles}>
          <h2 style={mobileMenuTitleStyles}>Menu</h2>
          <button
            onClick={() => setNavbarOpen(false)}
            style={mobileMenuCloseButtonStyles}
            aria-label="Close menu"
          >
            <Icon icon="ic:round-close" style={{ fontSize: "1.25rem" }} />
          </button>
        </div>
        <div style={mobileMenuNavStyles}>
          {headerData.map((item: HeaderItem) => (
            <MobileHeaderLink
              key={item.id}
              item={item}
              style={{
                padding: "0.75rem 0",
                color: "#1e293b",
                textDecoration: "none",
                fontSize: "0.9375rem",
                borderBottom: "1px solid #e2e8f0",
              }}
            />
          ))}
          <div style={mobileMenuButtonsStyles}>
            <button
              style={compactAuthButtonStyles}
              onClick={() => {
                setIsSignInOpen(true);
                setNavbarOpen(false);
              }}
            >
              Sign In
            </button>
            <button
              style={secondaryAuthButtonStyles}
              onClick={() => {
                setIsSignUpOpen(true);
                setNavbarOpen(false);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div style={modalOverlayStyles}>
          <div style={modalContentStyles} ref={signInRef}>
            <button
              onClick={() => setIsSignInOpen(false)}
              style={modalCloseButtonStyles}
              aria-label="Close modal"
            >
              <Icon icon="ic:round-close" style={{ fontSize: "1.5rem" }} />
            </button>
            <Signin signInOpen={(value: boolean) => setIsSignInOpen(value)} />
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignUpOpen && (
        <div style={modalOverlayStyles}>
          <div style={modalContentStyles} ref={signUpRef}>
            <button
              onClick={() => setIsSignUpOpen(false)}
              style={modalCloseButtonStyles}
              aria-label="Close modal"
            >
              <Icon icon="ic:round-close" style={{ fontSize: "1.5rem" }} />
            </button>
            <SignUp signUpOpen={(value: boolean) => setIsSignUpOpen(value)} />
          </div>
        </div>
      )}

      {/* Auth Dialogs */}
      <div style={alertContainerStyles}>
        {authDialog?.isSuccessDialogOpen && <SuccessfullLogin />}
        {authDialog?.isFailedDialogOpen && <FailedLogin />}
        {authDialog?.isUserRegistered && <UserRegistered />}
      </div>
    </header>
  );
};

export default Header;
