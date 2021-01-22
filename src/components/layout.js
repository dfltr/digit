import Head from 'next/head';
import * as React from 'react';

function Header() {
  return (
    <header>
      hello digit
      <style jsx>{`
        header {
          flex: 0 0 auto;
          font-size: 2rem;
          font-weight: 600;
          letter-spacing: -1px;
          line-height: 1;
          padding: var(--space-md);
        }
      `}</style>
    </header>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <div className="frame">
        <Head>
          <title>Hello Digit</title>
          <link rel="stylesheet" href="https://use.typekit.net/exv3uqw.css" />
        </Head>

        <Header />

        <main>{children}</main>

        <footer>Here's a footer just in case I need it.</footer>
      </div>

      <style jsx>{`
        footer {
          flex: 0 0 auto;
          padding: var(--space-md);
        }

        .frame {
          display: flex;
          flex-flow: column nowrap;
          height: 100%;
          margin: 0 auto;
          max-width: 390px;
        }

        main {
          flex: 1 1 auto;
          padding: var(--space-md);
        }
      `}</style>
    </>
  );
}
