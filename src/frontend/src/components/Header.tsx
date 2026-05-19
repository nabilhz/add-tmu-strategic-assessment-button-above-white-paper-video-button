import { Button } from "@/components/ui/button";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "White Paper", path: "/whitepaper" },
  { label: "Tokenomics", path: "/tokenomics" },
  { label: "Projects/SubDAOs", path: "/projects" },
  { label: "Road Map", path: "/roadmap" },
  { label: "Web2-Web3 Bridge", path: "/bridge" },
  { label: "Resource", path: "/resource" },
  { label: "Sign Up", path: "/signup" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/10"
      style={{ backgroundColor: "#0a1628" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/assets/generated/tmu-ai-dao-logo-transparent.dim_200x200.png"
              alt="TMU AI DAO"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-white">TMU AI DAO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  currentPath === item.path
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              className="border-[#FFC300] text-[#FFC300] hover:bg-[#FFC300] hover:text-[#0a1628]"
              onClick={() => navigate({ to: "/signup" })}
            >
              Join TMU AI DAO
            </Button>
            <Button
              className="text-white"
              style={{ backgroundColor: "#009B3A" }}
              onClick={() => navigate({ to: "/" })}
            >
              Launch App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    currentPath === item.path
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-2 mt-4">
              <Button
                variant="outline"
                className="border-[#FFC300] text-[#FFC300] hover:bg-[#FFC300] hover:text-[#0a1628]"
                onClick={() => {
                  navigate({ to: "/signup" });
                  setMobileMenuOpen(false);
                }}
              >
                Join TMU AI DAO
              </Button>
              <Button
                className="text-white"
                style={{ backgroundColor: "#009B3A" }}
                onClick={() => {
                  navigate({ to: "/" });
                  setMobileMenuOpen(false);
                }}
              >
                Launch App
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
