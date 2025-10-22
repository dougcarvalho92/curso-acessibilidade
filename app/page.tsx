"use client";
import Image from "next/image";

import Axe from "@/components/axe";

import { Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Logo from "../public/globe.svg";
import styles from "./styles/home.module.css";

import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";

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

          <Dialog.Root>
            <Dialog.Trigger>
              <Button> Termos de uso</Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth='450px'>
              <Dialog.Title>Edit profile</Dialog.Title>
              <Dialog.Description size='2' mb='4'>
                Make changes to your profile.
              </Dialog.Description>

              <Flex direction='column' gap='3'>
                <label>
                  <Text as='div' size='2' mb='1' weight='bold'>
                    Name
                  </Text>
                  <TextField.Root
                    defaultValue='Freja Johnsen'
                    placeholder='Enter your full name'
                  />
                </label>
                <label>
                  <Text as='div' size='2' mb='1' weight='bold'>
                    Email
                  </Text>
                  <TextField.Root
                    defaultValue='freja@example.com'
                    placeholder='Enter your email'
                  />
                </label>
              </Flex>

              <Flex gap='3' mt='4' justify='end'>
                <Dialog.Close>
                  <Button variant='soft' color='gray'>
                    Cancel
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button>Save</Button>
                </Dialog.Close>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        </div>
      </footer>
    </Axe>
  );
}
