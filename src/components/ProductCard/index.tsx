import "./productCard.scss"
import {
    ArrowsPointingOutIcon,
    ArrowDownRightIcon
} from "@heroicons/react/24/outline";
import {
    HeartIcon,
} from "@heroicons/react/24/solid";

interface PropType {
    name: string;
    price: string;
    url: string
}

function ProductCard() {
    return (
        <div className="card-wrapper">
            <section className="card-contents">
                <div className="card-details">
                    <h2>Serena Faux Mink Lashes</h2>
                    <p>adeyanjuadeyemi.com</p>
                    <h2>₦4,800</h2>
                </div>
                <div className="card-icons">
                    <span className="card-drag-icon"> <ArrowsPointingOutIcon className="defaultIcon" /></span>
                    <span className="card-heart-icon"> <HeartIcon className="defaultIcon" /></span>
                    <span className="card-arrow-icon"> <ArrowDownRightIcon className="defaultIcon" /></span>
                </div>
            </section>
            <section className="card-img">
                <img
                    src="/src/assets/wizkid.jpg"
                    alt="Startboy"
                />
            </section>
        </div>
    )
}

export default ProductCard;