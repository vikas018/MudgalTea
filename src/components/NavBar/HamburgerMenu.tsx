import { Menu } from "lucide-react";

interface iProps {
  isMenuOpen: boolean,
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

export default ({ isMenuOpen, setIsMenuOpen }: iProps) => (
  <div className="md:hidden">
    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
      <Menu className="h-6 w-6" />
    </button>
  </div>
);