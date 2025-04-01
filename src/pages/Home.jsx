import { useState } from "react";
import { useEffect } from "react"
import { createSeason, getSeasons } from "../services/season";
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const [seasons, setSeasons] = useState([]);

    const navigate = useNavigate();

    const goSkins = () => {
        navigate("/skin");
    }

    const goSeasons = () => {
        navigate("/");
    }

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        wins: 0,
    });

    useEffect(() => {
        getSeasons().then(data => {
            setSeasons(data);
        });
    }, []);


    const goToDetails = (seasonId) => {
        navigate(`/seasons/${seasonId}`);
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        formData.wins = Number(formData.wins);
        createSeason(formData).then(data => {
            setSeasons([...seasons, data]);
        });
        setIsDialogOpen(false); 
    };

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
            <section className="w-full flex justify-end mt-8">
                <button className="font-bold text-white mr-16 w-48 bg-sky-600 p-2 cursor-pointer rounded-xl"
                onClick={() => setIsDialogOpen(true)}
                >New Season</button>
            </section>

            <section className="w-full flex justify-center mt-8">
                <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {seasons.map(season => (
                        <div key={season.id} className="bg-[#2b2b2b] rounded-xl p-4 cursor-pointer" onClick={() => goToDetails(season.id)}>
                            <img src={season.image} alt={season.title} className="w-full h-60 object-cover rounded-xl" />
                            <h1 className="text-white font-bold mt-4">{season.title}</h1>
                            <p className="text-white mt-2">{season.wins}</p>
                        </div>
                    ))}
                </div>
            </section>

            {isDialogOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-[#1b1b1b] p-8 rounded-xl w-96">
                        <h2 className="text-white text-xl font-bold mb-4 text-center">New Season</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-white mb-2 font-bold" htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-xl bg-[#2b2b2b] text-white"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white mb-2 font-bold" htmlFor="image">Image URL</label>
                                <input
                                    type="text"
                                    id="image"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-xl bg-[#2b2b2b] text-white"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white mb-2 font-bold" htmlFor="wins">Wins</label>
                                <input
                                    type="number"
                                    id="wins"
                                    name="wins"
                                    value={formData.wins}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-xl bg-[#2b2b2b] text-white text-center"
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    className="text-black bg-yellow-300 p-2 w-24 rounded-xl font-bold cursor-pointer"
                                    onClick={() => setIsDialogOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="text-white bg-sky-600 p-2 w-24 rounded-xl font-bold cursor-pointer"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}    
        </div>
    )
}