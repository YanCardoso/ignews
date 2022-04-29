import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, useSession, signOut } from "next-auth/react";

export function SingInButton() {
  const session = useSession();

  return session.status === "authenticated" ? (
    <button
      onClick={() => signOut()}
      type="button"
      className={styles.btnPrimary}
    >
      <FaGithub color="#04b361" />
      {session.data.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      onClick={() => signIn("github")}
      type="button"
      className={styles.btnPrimary}
    >
      <FaGithub color="#eba417" />
      Sing in with GitHub
    </button>
  );
}
