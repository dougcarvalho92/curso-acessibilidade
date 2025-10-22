"use client";
import Image from "next/image";

import { axeAccessibilityReporter } from "@/utils/axeAccessibilityReporter";
import { Github } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import Logo from "../public/globe.svg";
import styles from "./styles/home.module.css";

export default function Home() {
  useEffect(() => {
    axeAccessibilityReporter();
  }, []);
  return (
    <>
      <header className={styles.navbar}>
        <Image src={Logo} width={50} />
        <div className='nav'>
          <Link href='github.com/dougcarvalho92/'>
            <Github size={25} />
          </Link>
        </div>
      </header>
      <main className={styles.container}>
        <article>
          <h1>Welcome to Next.js!</h1>
          <p>
            Get started by editing&nbsp;
            <code>app/page.tsx</code>
          </p>
          <h4>TESTE</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            temporibus tempora similique laboriosam eveniet, cum quae cumque.
            Iste ad sequi similique. Quibusdam suscipit quod facilis modi
            mollitia, nostrum quam odio!
          </p>
          <h3>H3 TESTE</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ab
            repellendus architecto veritatis obcaecati voluptatibus dicta
            accusantium totam optio ad, sint iste aliquam sit tenetur eaque
            accusamus consectetur magnam recusandae.
          </p>
        </article>
      </main>
      <footer className={styles.navbar} aria-label='Rodapé'>
        <Image src={Logo} width={50} />
        <div className='nav'>
          <Link href='github.com/dougcarvalho92/'>
            <Github size={25} />
          </Link>
        </div>
      </footer>
    </>
  );
}
