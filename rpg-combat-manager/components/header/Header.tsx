import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full p-4 bg-gray-200 dark:bg-gray-800 flex justify-center items-center gap-5">
            <Link href="/characters">Characters</Link>
            <Link href="/">Add character</Link>
        </header>
    )
}

export default Header;