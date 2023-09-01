import styles from "./TextBox.module.css";
const TextBox = ({ labeltext, text }) => {
  return (
    <div className={styles.textbox}>
      <label htmlFor="text">{labeltext}</label>
      <textarea id="text" name="text" value={text} readOnly />
    </div>
  );
};

export default TextBox;
