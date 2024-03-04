import { Link } from "react-router-dom";

function Button({ type, to, onClick, disabled, children }) {
  const base =
    "inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 ease-in-out hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2";

  const styles = {
    small: base + " text-xs px-4 py-2 md:px-5 md:py-2.5",
    primary: base + " text-sm px-4 py-3 md:px-6 md:py-4",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 ease-in-out hover:bg-stone-300 hover:text-stone-700 focus:bg-stone-300 focus:text-stone-700 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={styles[type]}
      >
        {children}
      </button>
    );
  }

  return (
    <button type={type} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
