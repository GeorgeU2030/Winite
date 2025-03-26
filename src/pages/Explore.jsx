import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchSkin } from "../services/fortnite";

export const Explore = () => {

    const navigate = useNavigate();

    const goSkins = () => {
        navigate("/skin");
    }

    const goSeasons = () => {
        navigate("/");
    }

    const [skins, setSkins] = useState();
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const sendSearchSkin = () => {
        searchSkin(search).then(data => {
            setSkins(data);
        })
    }

    console.log(skins)

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
                <h1 className="text-white ml-16 text-xl font-bold">Find a Skin</h1>
                <div className="w-2/3">
                    <input type="text" placeholder="Try a search..." className="mr-16 bg-gray-300 p-2 text-black rounded-xl w-3/4 font-bold" value={search} onChange={handleSearch}/>
                    <button className="font-bold text-black mr-16 w-48 bg-yellow-300 p-2 cursor-pointer rounded-xl"
                    onClick={sendSearchSkin}
                    >Search</button>
                </div>
            </section>

            <section className="w-full flex justify-center mt-8">
                    {skins ?  (
                        <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                            <div key={skins.id} className="bg-[#2b2b2b] rounded-xl p-4">
                                <img src={skins.images.icon}/>
                                <h1 className="text-white font-bold text-xl text-center mt-4">{skins.name}</h1>
                            </div>
                        </div>
                    ): (
                        <div className="w-full h-92 flex items-center justify-center">
                            <h1 className="text-white text-center font-bold">No skins found</h1>
                        </div>
                    )}
            </section>
        </div>
    )
}