import NextLink from 'next/link';
import * as React from 'react';

export function LinkWrapper({ children, ...props }) {
  return <NextLink {...props}>{children}</NextLink>;
}

export default function Link({ children, ...props }) {
  return (
    <LinkWrapper {...props}>
      <a>
        {children}
        <style jsx>{`
          a {
            color: var(--primary);
          }
        `}</style>
      </a>
    </LinkWrapper>
  );
}
