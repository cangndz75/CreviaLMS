import { ThemeToggle } from "@/components/ui/themeToggle";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      Hello world!
      <ThemeToggle />
    </div>
  );
}
