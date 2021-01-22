import { LinkProps, LinkWrapper } from './link';

export default function Button({ children, ...props }) {
  const isLinkButton = 'href' in props;

  return (
    <>
      {isLinkButton ? (
        <LinkWrapper {...props}>
          <a className="button">{children}</a>
        </LinkWrapper>
      ) : (
        <button {...props} className="button">
          {children}
        </button>
      )}
      <style jsx>{`
        .button {
          background: var(--primary);
          border: 0;
          border-radius: 4px;
          color: #fff;
          font-size: 0.9rem;
          letter-spacing: 0.12rem;
          line-height: 1.5;
          outline: none;
          padding: var(--space-md) var(--space-xl);
        }
      `}</style>
    </>
  );
}
