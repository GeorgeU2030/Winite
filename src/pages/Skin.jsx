import { useNavigate } from "react-router-dom";

export const Skin = () => {

    const navigate = useNavigate();

    const goSkins = () => {
        navigate("/skin");
    }

    const goSeasons = () => {
        navigate("/");
    }

    const goExplore = () => {
        navigate("/explore");
    }

    return (
        <div className="min-h-screen bg-black">
            <nav className="flex justify-between h-20 bg-[#1b1b1b]">
                <div className="ml-16 flex items-center justify-center">
                    <img src="/fortnite.webp" alt="logo" className="h-20 w-20" />
                </div>
                <ul className="flex justify-center items-center space-x-4 mr-16">
                    <li className="text-white w-24 font-bold cursor-pointer">
                        <a onClick={goSeasons}>Seasons</a>
                    </li>
                    <li className="text-white w-24 font-bold cursor-pointer">
                        <a onClick={goSkins}>Skins</a>
                    </li>
                </ul>
            </nav>
            <section className="w-full flex justify-between mt-8">
                <h1 className="text-white ml-16 text-xl font-bold">My Skins</h1>
                <button className="font-bold text-white mr-16 w-48 bg-sky-600 p-2 cursor-pointer rounded-xl"
                onClick={goExplore}
                >Add Skins</button>
            </section>
        </div>
    );
}