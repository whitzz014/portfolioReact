import Link from "next/link";
import { TransitionLink } from "./utils/TransitionLink";

export const FlipNav = () => {
    return (
        <nav className="p-4 flex items-center justifybetween relative">
            <NavLeft />
        </nav>
    );
};

const NavLeft = () => {
    return (
      <div className="flex items-center gap-6 text-[#F27D00] text-shadow">
        <Link href="/starPage">
          <Logo />
        </Link>
        <TransitionLink href="/about">About</TransitionLink>
        <TransitionLink href="/projects">Projects</TransitionLink>
        <TransitionLink href="/skills">Skills</TransitionLink>
        <TransitionLink href="/contact">Contact</TransitionLink>
      </div>
    );
  };
  

  const Logo = () => {
    return <div className="font-bold text-lg">BW</div>;
  };