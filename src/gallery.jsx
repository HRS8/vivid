import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";
import four from "./4.jpg";
import five from "./5.jpg";
import six from "./6.jpg";
import seven from "./7.jpg";
import eight from "./8.jpg";
import nine from "./9.jpg";
import ten from "./10.jpg";
import eleven from "./11.jpg";
import twelve from "./12.jpg";
import thirteen from "./13.jpg";

function Gallery() {
    return (
        <div className="w-full overflow-x-hidden">
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={two} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={seven} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={eight} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={eleven} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={four} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={six} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={three} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={nine} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={twelve} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={ten} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={five} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={thirteen} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;