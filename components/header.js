import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/">
      <a>Static Content</a>
    </Link>
    <Link href="/github">
      <a>GitHub Content</a>
    </Link>
    <style jsx>{`
            a {
                text-decoration: none;
                color: blue;
                font-family: 'Arial';
                margin-right: 16px;
            }
            a:hover {
                opacity: 0.6;
            }
        `}</style>
  </div>
);

export default Header;
