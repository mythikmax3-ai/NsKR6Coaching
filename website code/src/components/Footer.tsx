import { MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4 text-white">R6 Siege Coaching</h3>
            <p className="text-slate-400">
              Professional coaching to help you reach your full potential in Rainbow Six Siege.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#pricing" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#booking" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Book a Session
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Connect</h4>
            <a 
              href="https://discord.gg/jPkJnufSPb" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group"
              aria-label="Join our Discord server"
            >
              <MessageSquare className="w-12 h-12" />
              <span className="text-lg">Discord</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; 2025 R6 Siege Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
