import css from "./SearchBar.module.css";
import { IoSearchOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const topic = form.elements.topic.value;
    if (topic.trim() === "") {
      const notify = () => toast.error("Please enter search term!");
      notify();
      return;
    }
    onSubmit(topic);
    form.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.inputWrapper}>
          <IoSearchOutline className={css.icon} />
          <input
            className={css.input}
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </div>
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      <Toaster containerClassName={css.toaster} />
    </header>
  );
}

export default SearchBar;
