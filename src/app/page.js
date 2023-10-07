import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Avaneesh Mahendra</h1>
      <h3>Engineering Student</h3>
      <p>
        Welcome
      </p>
        <img className={styles['img']}
        src="/final resized pic.jpg"/>
        <div className={styles.links}>
        <a href="https://github.com/avaneeshmahendra29" target="_blank">Github</a>
        <a href="https://www.instagram.com/avaneeshmahendra29" target="_blank">Instagram</a>
        <a href="https://www.linkedin.com/in/avaneesh-mahendra-315241294/" target="_blank">Linkedin</a>
        </div>
        <div className={styles.links}>
        <a href="./About" target="_blank">About</a>
        <a href="./Projects" target="_blank">Projects</a>
        <a href="./Blog" target="_blank">Blog</a>

        </div>
    </main>
  )
  {

  }
}
  
