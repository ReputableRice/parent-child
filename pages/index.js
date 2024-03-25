import ParentToChild from "./ParentOne";
import styles from "@/styles/Home.module.css";
import ChildToParent from "./ParentTwo"

export default function Home() {
  return (
    <>

      <main className={`${styles.main} `}>
        <ParentToChild/>
        <ChildToParent/>
      </main>
    </>
  );
}
