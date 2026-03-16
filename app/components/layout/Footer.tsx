import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-footer text-foreground py-16 px-8 border-t border-footer-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="text-2xl font-bold tracking-tighter text-text-main hover:opacity-80 transition-opacity">
                <img
                  src="/logo/EDAX.png"
                  alt="EDAX Logo"
                  className="block dark:hidden h-12 w-auto"
                />
                <img
                  src="/logo/EDAX_white.png"
                  alt="EDAX Logo"
                  className="hidden dark:block h-12 w-auto"
                />
              </Link>
            </div>
            <p className="text-foreground text-sm max-w-xs py-4">
              Start Building The Smart Future With EDAX
            </p>
          </div>

          {/* EDAX Menu */}
          <div className="md:col-span-4">
            <h4 className="text-xl font-bold mb-6">EDAX</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-foreground hover:opacity-70">Explore</Link></li>
              <li><Link href="#" className="text-foreground hover:opacity-70">Articles</Link></li>
              <li><Link href="#" className="text-foreground hover:opacity-70">How It Works</Link></li>
              <li><Link href="#" className="text-foreground hover:opacity-70">Help</Link></li>
            </ul>
          </div>

          {/* Links Menu */}
          <div className="md:col-span-4">
            <h4 className="text-xl font-bold mb-6">Links</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-foreground hover:opacity-70">Tokens</Link></li>
              <li><Link href="#" className="text-foreground hover:opacity-70">API</Link></li>
              <li><Link href="#" className="text-foreground hover:opacity-70">Big Bounty</Link></li>
              <li><Link href="#" className="text-foreground hover:opacity-70">Become Partners</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-3 pt-8 text-center">
          <p className="text-sm flex items-center justify-center gap-1">
            <span className="text-lg">©</span> 2026 EDAX All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer