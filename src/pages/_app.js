import { AppStateContext, defaultAppContext } from '../hooks/useAppState';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [appState, setAppState] = useState(defaultAppContext.appState);

  return (
    <>
      <AppStateContext.Provider value={{ appState, setAppState }}>
        <Component {...pageProps} />
      </AppStateContext.Provider>

      <style global jsx>{`
        html,
        body,
        #__next {
          font-family: proxima-nova, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
            Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          font-size: 16px;
          height: 100%;
          margin: 0;
          padding: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }

        :root {
          /* Hex values approximated from digit.co */
          --primary: #2e80e5;
          --grey100: #090b0d;
          --grey300: #6a6d72;
          --grey500: #78797a;
          --grey700: #909192;
          --grey900: #fafafa;
          --success: #1ec76c;

          /* 4,   6,  8,  12, 24, 36, 48
             xxs, xs, sm, md, lg, xl, xxl */
          --space-base: 8px;
          --space-xxs: calc(var(--space-base) * 0.5);
          --space-xs: calc(var(--space-base) * 0.75);
          --space-sm: var(--space-base);
          --space-md: calc(var(--space-base) * 1.5);
          --space-lg: calc(var(--space-base) * 3);
          --space-xl: calc(var(--space-base) * 4.5);
          --space-xxl: calc(var(--space-base) * 6);
        }
      `}</style>
    </>
  );
}

export default MyApp;
