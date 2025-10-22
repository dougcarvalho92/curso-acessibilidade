"use client";
import Image from "next/image";

import { Modal } from "@/components/modal";
import { axeAccessibilityReporter } from "@/utils/axeAccessibilityReporter";
import { Github } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../public/globe.svg";
import styles from "./styles/home.module.css";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    axeAccessibilityReporter();
  }, []);
  return (
    <>
      <header className={styles.navbar}>
        <Image src={Logo} width={50} alt='Blog da Página' />
        <div className='nav'>
          <Link href='github.com/dougcarvalho92/' aria-label='Github'>
            <Github size={25} aria-hidden='true' />
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
          <h2>TESTE</h2>
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
        <Modal
          isOpen={isModalOpen}
          title='Termos de uso'
          onClose={() => setIsModalOpen(false)}
        >
          <h1>Termos de uso do modal</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
            consectetur natus ad veritatis magnam itaque numquam sit maiores
            unde repudiandae excepturi, quod harum fugit sapiente exercitationem
            sint nihil, commodi architecto.
          </p>
        </Modal>
      </main>
      <footer className={styles.navbar} aria-label='Rodapé'>
        <Image src={Logo} width={50} alt='Blog da Página' />
        <div className='navbar'>
          {/* <Link href='github.com/dougcarvalho92/' aria-label='Github'>
            <Github size={25} aria-hidden='true' />
          </Link> */}
          <button onClick={() => setIsModalOpen(true)}>Termos de uso</button>
        </div>
      </footer>
    </>
  );
}
