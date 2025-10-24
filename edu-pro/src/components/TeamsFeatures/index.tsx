import clsx from "clsx";
import Heading from "@theme/Heading";
import Github from "@theme/Icon/Socials/GitHub";
import styles from "./styles.module.css";
import MPAvatar from "../../../static/img/MC.svg";
import PMAvatar from "../../../static/img/PM.svg";
import GFAvatar from "../../../static/img/GF.svg";
import TCAvatar from "../../../static/img/TC.svg";
import VPAvatar from "../../../static/img/VP.svg";

interface AvatarItemI {
  name: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  href: string;
}

const AvatarList: AvatarItemI[] = [
  {
    name: "Marta Condeco",
    href: "https://github.com/mawich16",
    Svg: MPAvatar,
  },
  {
    name: "Goncalo Fonseca",
    href: "https://github.com/goni5847",
    Svg: GFAvatar,
  },
  {
    name: "Tiago Coelho",
    href: "https://github.com/TCoelhoUA",
    Svg: TCAvatar,
  },
  {
    name: "Pedro Martins",
    href: "https://github.com/pedroMPMartins",
    Svg: PMAvatar,
  },
  {
    name: "Vasco Pereira",
    href: "https://github.com/AzelCora",
    Svg: VPAvatar,
  },
];

function AvatarCard({ name, Svg, href }: AvatarItemI) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.wrapper}>
        <div className={styles.featureSvg}>
          <Svg role="img" />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{name}</Heading>
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
