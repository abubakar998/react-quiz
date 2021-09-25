import classes from "../styles/Button.module.css";

export default function Button({ children, className }) {
  return (
    <Button className={`${classes.button} ${className}`}>{children}</Button>
  );
}
