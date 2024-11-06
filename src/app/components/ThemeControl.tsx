const ThemeControl = () => {
  const themes = [
    "default",
    "light",
    "dark",
    "bumblebee",
    "synthwave",
    "retro",
    "cyberpunk",
    "garden",
    "forest",
    "lofi",
    "fantasy",
    "wireframe",
  ];

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-[1] w-40 p-2 shadow-2xl md:-left-12"
      >
        {themes.map((theme) => {
          return (
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label={theme.toUpperCase()}
                value={theme}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ThemeControl;
