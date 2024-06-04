import css from "./ErrorMessage.module.css";

function ErrorMessage({ text }) {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
    </div>
  );
}

export default ErrorMessage;
