import Link from 'next/link';
export default function Header() {
  return (
    <header className="p-4 border-b fixed w-full z-50 bg-gray-100 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="font-indieFlower text-transparent bg-clip-text text-5xl font-bold bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
          NEXT READ
        </h1>
        <nav className="space-x-6">
          <a href="/course" className="text-lg font-semibold text-gray-800 hover:text-[#ff7e5f] transition duration-300">
            Courses
          </a>
          <a href="/about" className="text-lg font-semibold text-gray-800 hover:text-[#ff7e5f] transition duration-300">
            About
          </a>
          <Link href="/login" className="text-lg font-semibold text-gray-800 hover:text-[#ff7e5f] transition duration-300">
            Login / Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
