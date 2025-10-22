"use client";
import Image from "next/image";

import Axe from "@/components/axe";
import { Modal } from "@/components/modal";
import { Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Logo from "../public/globe.svg";
import styles from "./styles/home.module.css";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Axe>
      <header className={styles.navbar}>
        <Image src={Logo} width={50} alt='Blog da Página' />
        <div className='nav'>
          <Link
            href='https://github.com/dougcarvalho92'
            aria-label='Github'
            target='_blank'
            rel='noopener noreferrer'
          >
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
      </main>
      <footer className={styles.navbar} aria-label='Rodapé'>
        <Image src={Logo} width={50} alt='Blog da Página' />
        <div className='navbar'>
          {/* <Link href='github.com/dougcarvalho92/' aria-label='Github'>
            <Github size={25} aria-hidden='true' />
          </Link> */}
          <button
            onClick={() => setIsModalOpen(true)}
            aria-controls='modal-terms'
          >
            Termos de uso
          </button>
          <Modal
            isOpen={isModalOpen}
            title='Termos de uso'
            onClose={() => setIsModalOpen(false)}
            id='modal-terms'
          >
            <h1>Termos de uso do modal</h1>
            <p>
              These are the terms of use for the modal; please read them
              carefully before interacting with the application.
            </p>
            <p>
              By using this site you agree to the terms described here and any
              additional policies referenced within.
            </p>
          </Modal>
        </div>
      </footer>
    </Axe>
  );
}
