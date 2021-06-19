import styles from "./FormInput.module.css";

export const FormInput = ({ name, label, placeholder, type }) => (
  <div className={styles.container}>
    <label htmlFor={name}>{label}</label>
    <input type={type} name={name} id={name} placeholder={placeholder} />
  </div>
);
