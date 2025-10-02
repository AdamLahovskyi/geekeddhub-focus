export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  API
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 geekeddhub.io. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
