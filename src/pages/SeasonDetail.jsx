import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneSeason, updateBestSkin } from "../services/season";
import { updateWins } from "../services/skin";

export const SeasonDetail = () => {

    const { seasonId } = useParams();
    const [season, setSeason] = useState();
    const [skins, setSkins] = useState();


    const navigate = useNavigate();

    const goSkins = () => {
        navigate("/skin");
    }

    const goSeasons = () => {
        navigate("/");
    }

    const goExplore = () => {
        navigate(`/explore?source=${seasonId}`);
    }

    const updateSkinsWins = (skin) => {
        const updateForm = {
            id: skin.id,
            wins: skin.wins + 1
        }
        updateWins(updateForm).then(data => {
            setSkins(skins.map(s => {
                if (s.id === skin.id) {
                    return {
                        ...s,
                        wins: s.wins + 1
                    }
                }
                return s;
            }))
            getOneSeason(seasonId).then(data => {
                setSeason(data.season);
              setSkins(data.skins);
            })
        })
    }
    
    const endSeason = () => { 
        const bestSkin = {
          bestSkinID: skins[0].id,
        }
        updateBestSkin(seasonId, bestSkin).then(data => {
          navigate("/");
        })
    }

    useEffect(() => {
        if (seasonId === undefined || seasonId === null) {
            navigate("/");
            return;
        }else {
            getOneSeason(seasonId).then(data => {
                setSeason(data.season);
                setSkins(data.skins);
            })
        }
    },[])

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
            {season &&
            <section className="w-full flex flex-col justify-center items-center mt-8">
                <img src={season.image}/>
                <h1 className="text-white text-center font-bold text-3xl mt-2">{season.title}</h1>
                <p className="text-white text-center font-fortnite text-5xl mt-2">{season.wins} W</p>
            </section>
            }

            <section className="w-full flex justify-end mt-8 gap-4">
                    <button className="font-bold text-white w-48 bg-sky-600 cursor-pointer rounded-xl p-2"
                    onClick={endSeason}
                    >
                    End Season
                    </button>
                    <button className="font-bold text-black mr-16 w-48 bg-yellow-300 p-2 cursor-pointer rounded-xl"
                    onClick={goExplore}
                    >Add a Skin</button>
            </section>

            <section className="w-full flex justify-center mt-8">
                {skins && skins.length > 0 ? (
                    <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                        {skins.map(skin => (
                            <div key={skin.id} className="w-full flex flex-col justify-center items-center bg-[#1b1b1b] p-4 rounded-xl">
                                <img src={skin.image} alt={skin.name} className="h-48 w-48 bg-sky-600 rounded-lg" />
                                <h1 className="text-white text-center font-bold text-xl mt-2">{skin.name}</h1>
                                <p className="text-white text-center font-fortnite text-3xl mt-2">{skin.wins} W</p>
                                <button className="bg-yellow-300 text-black font-bold p-2 rounded-xl mt-4 cursor-pointer"
                                onClick={() => updateSkinsWins(skin)}
                                >
                                    + W
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="w-full h-92 flex items-center justify-center">
                        <h1 className="text-white font-bold text-xl p-4 rounded-lg">No skins found</h1>
                    </div>
                )}
            </section>
        </div>
    )
}