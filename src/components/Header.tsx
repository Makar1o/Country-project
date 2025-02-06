import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  // Завантажуємо тему з localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkTheme(savedTheme === "dark");
    }
  }, []);

  // Оновлюємо тему при її зміні
  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  // Перемикаємо тему
  const handleThemeToggle = (): void => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <header className="header-container">
      <div className="header-text-container">
        <div className="topic-block">
          <h1 className="topic" onClick={() => navigate("/")}>
            Where is the world?
          </h1>
        </div>
        <div className="theme-block" onClick={handleThemeToggle}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.523 22 22 17.523 22 12C22 11.537 21.306 11.46 21.067 11.857C20.5572 12.7013 19.862 13.4186 19.034 13.9545C18.206 14.4903 17.2669 14.8307 16.2878 14.9499C15.3088 15.0691 14.3154 14.9639 13.383 14.6423C12.4507 14.3207 11.6037 13.7911 10.9063 13.0937C10.2089 12.3963 9.67932 11.5493 9.35772 10.617C9.03613 9.68457 8.93093 8.69123 9.0501 7.71217C9.16926 6.73311 9.50967 5.794 10.0455 4.96599C10.5814 4.13797 11.2987 3.44275 12.143 2.933C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
              fill="var(--color-white)"
            />
          </svg>
          <h2 className="theme">{darkTheme ? "Light Mode" : "Dark Mode"}</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
