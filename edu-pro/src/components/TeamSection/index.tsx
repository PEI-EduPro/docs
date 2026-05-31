import styles from "./styles.module.css";

const members = [
  { name: "Marta Condeço",   role: "Front End Developer", img: "MC.jpeg", github: "https://github.com/mawich16" },
  { name: "Gonçalo Fonseca", role: "DevOps",               img: "GF.jpeg", github: "https://github.com/goni5847" },
  { name: "Tiago Coelho",    role: "Front End Developer", img: "TC.jpeg", github: "https://github.com/TCoelhoUA" },
  { name: "Pedro Martins",   role: "Back End Developer",  img: "PM.jpeg", github: "https://github.com/pedroMPMartins" },
  { name: "Vasco Pereira",   role: "Back End Developer",  img: "VP.jpeg", github: "https://github.com/AzelCora" },
];

export default function TeamSection() {
  return (
    <div className={styles.grid}>
      {members.map((m) => (
        <a key={m.name} href={m.github} target="_blank" rel="noopener noreferrer" className={styles.card}>
          <img
            src={require(`/team/${m.img}`).default}
            alt={m.name}
            className={styles.avatar}
            loading="lazy"
          />
          <strong className={styles.name}>{m.name}</strong>
          <span className={styles.role}>{m.role}</span>
        </a>
      ))}
    </div>
  );
}
