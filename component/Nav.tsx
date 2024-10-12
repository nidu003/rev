import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="nav" style={{ backgroundColor: 'white' }}> 

      <ul>
        <li style={{ marginLeft: 50 }}>
          <Link href="/">
            <img src="/image 1.png" alt="Logo" style={{ width: 77, height: 71 }} />
          </Link>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginLeft: 100 }}>
          <Link href="/">
            Products
          </Link>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginLeft: 20 }}> 
          <Link href="/contact">
            Contact
          </Link>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginLeft: 20 }}>
          <Link href="/about-us">
            About Us
          </Link>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginLeft: 20 }}>
          <Link href="/diy-pricing">
            DIY Pricing
          </Link>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginLeft: 20 }}>
          <Link href="/login">
            Login
          </Link>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginLeft: 20 }}>
          <Link href="/refer-reoccur">
            $$Refer & Reoccur$$
          </Link>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginLeft: 20 }}>
          <Link href="/blog">
            Blog
          </Link>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginLeft: 20 }}>
          <Link href="/article">
            Article
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;