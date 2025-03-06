import styles from '../NavBar/navbarstyles.module.css';

export default function Navbar() {
  return (
    <>
      <div className={styles.css_b1bn1g}>
        Welcome
      </div>
      <ul>
        <li>About</li>
        <li>Experience</li>
        <li>Services</li>
        <li>Certifications</li>
        <li>Contact</li>
      </ul>
    </>
  );
}
