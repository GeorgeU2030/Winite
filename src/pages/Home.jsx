export const Home = () => {
    return (
        <div className="min-h-screen bg-black">
            <nav className="flex justify-between h-20 bg-[#1b1b1b]">
                <div className="ml-16 flex items-center justify-center">
                    <img src="/fortnite.webp" alt="logo" className="h-20 w-20" />
                </div>
                <ul className="flex justify-center items-center space-x-4 mr-16">
                    <li className="text-white w-24 font-bold">
                        <a href="/seasons">Seasons</a>
                    </li>
                    <li className="text-white w-24 font-bold">
                        <a href="/skins">Skins</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}