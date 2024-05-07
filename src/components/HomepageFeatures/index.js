import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const HomepageFeatures = () => {
  return (
    <div className={clsx("plugin-file-cover", styles.pluginFileCover)}>
      <div className={clsx("iframe-wrapper", styles.iframeWrapper)}>
        <div className={clsx("div", styles.parent)}>
          <video autoPlay muted loop className={styles.videoBackground}>
            <source src="https://videos.pexels.com/video-files/5199624/5199624-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={clsx("div1", styles.div1)}>
            <h1 className={clsx("la-technologie-AU", styles.laTechnologieAU)}>
              La pointe de la technologie
              <br /> au service de l'éducation
            </h1>
          </div>
          <div className={clsx("div2", styles.div2)}>
            <img src={useBaseUrl("img/vr-girl.png")} />
          </div>
        </div>
        <div className={clsx("div3", styles.div3)}>
          <hr className={clsx("solid", styles.solid)}></hr>
          <h1>
            Aider les étudiants à apprendre ludiquement <br />
            et efficacement grâce à la réalité virtuelle
          </h1>
          <button className={clsx("contact", styles.contact)}>
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
};
