const FooterCopyright = () => (
  <div className="footer-copyright">
    © 2014 - {new Date().getFullYear()} BitcoinVN
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
