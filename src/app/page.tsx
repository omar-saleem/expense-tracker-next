'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useToast } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { IoMdAddCircle } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";

export default function Home() {
  const toast = useToast()
  const createToast = () =>
    toast({
      title: 'Welcome to the app.',
      description: "Timestamp: " + new Date().toLocaleTimeString(),
      status: 'info',
      duration: 5000,
      isClosable: true,
      position: 'bottom-right',
    })

  function closeAll() {
    toast.closeAll()
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Text fontSize='3xl' as='b'>This is Chakra UI.</Text>
        <ol>
          <li>
            Get started by clicking <code>Toast Me</code>.
          </li>
          <li>Close toasts by clicking <code>Toast Away</code>.</li>
        </ol>

        <div className={styles.ctas}>
          <Button
            colorScheme='blue'
            onClick={createToast}
            leftIcon={<IoMdAddCircle />}
            px={6}
          >Toast Me</Button>
          <Button
            colorScheme='red'
            onClick={closeAll}
            leftIcon={<IoMdTrash />}
          >Toast Away</Button>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
