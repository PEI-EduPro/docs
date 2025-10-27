import clsx from "clsx";
import Heading from "@theme/Heading";
import Github from "@theme/Icon/Socials/GitHub";
import styles from "./styles.module.css";

interface AvatarItemI {
  name: string;
  imageRef: string;
  href: string;
  description: string
}

const AvatarList: AvatarItemI[] = [
  {
    name: "Marta Condeço",
    href: "https://github.com/mawich16",
    imageRef: "MC.jpeg",
    description: "Front End Developer"
  },
  {
    name: "Goncalo Fonseca",
    href: "https://github.com/goni5847",
    imageRef: "GF.jpeg",
    description: "DevOps"
  },
  {
    name: "Tiago Coelho",
    href: "https://github.com/TCoelhoUA",
    imageRef: "TC.jpeg",
    description: "Front End Developer"
  },
  {
    name: "Pedro Martins",
    href: "https://github.com/pedroMPMartins",
    imageRef: "PM.jpeg",
    description: "Back End Developer" 
  },
  {
    name: "Vasco Pereira",
    href: "https://github.com/AzelCora",
    imageRef: "VP.jpeg",
    description: "Back End Developer"
  },
];

function AvatarCard({ name, imageRef, href , description}: AvatarItemI) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.wrapper}>
        <div className={styles.featureSvg}>
          <img src={require(`/team/${imageRef}`).default}  />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{name}</Heading>
        <Heading as="h6">{description}</Heading>
        <a href={href}>
          <Github />
        </a>
      </div>
    </div>
  );
}

export default function TeamsFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.components}>
          {AvatarList.map((props, idx) => (
            <AvatarCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
