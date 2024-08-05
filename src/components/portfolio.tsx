import React from 'react';
import styles from './portfolio.module.css';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

export function Portfolio() {
  return (
    <div className="styles.min-h-screen">
      <header className={styles.header}>
        <div className={styles.headerIcons}>
          <div>
            <MailIcon className={styles.mailIcon} />
          </div>
          <div>johnt.pennell@gmail.com</div>
        </div>
      </header>
      <main className={styles.main}>
        <h1 className={styles.mainTitle}>JT PENNELL</h1>
        <h2 className={styles.mainSubtitle}>FULL STACK DEVELOPER</h2>
        <p className={styles.mainDescription}>
          Building web applications that make a difference.
        </p>
        <Button className={styles.cvBtn} href="./cv24.pdf" target="_blank">View CV</Button>
      </main>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          <Card>
            <CardHeader>
              <CardTitle>StockX</CardTitle>
              <CardDescription>
                A stock viewing webapp built using NextJS and TypeScrypt.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button href="https://github.com/jtpennell/stockx" target="_blank">
                View on GitHub
              </Button>
            </CardFooter>
          </Card>
          {/* <Card>
            <CardHeader>
              <CardTitle>Project 2</CardTitle>
              <CardDescription>
                Test
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button as="a" href="https://github.com/jtpennell/" target="_blank">
                View on GitHub
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project 3</CardTitle>
              <CardDescription>
                Test
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button as="a" href="https://github.com/jtpennell/" target="_blank">
                View on GitHub
              </Button>
            </CardFooter>
          </Card> 
          */}
        </div>
      </section>
    </div>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
