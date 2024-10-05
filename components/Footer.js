import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex-shrink-0 text-center text-sm p-2 border-t bg-gray-800 text-gray-300">
      <span>Created by </span>
      <Link
        className="text-teal-400 hover:text-teal-300"
        href="https://github.com/saalim24/NextRead"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shoaib 
      </Link>
    </footer>
  );
}
