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
    url: string;
    img: string;
}

function ProductCard({ name, price, url, img }: PropType) {
    return (
        <div className="card-wrapper">
            <div className="card-blur-bg" role="presentation"></div>
            <div className="card-container">
                <section className="card-contents">
                    <div className="card-details">
                        <h2>{name}</h2>
                        <p>{url}</p>
                        <h2>₦{price}</h2>
                    </div>
                    <div className="card-icons">
                        <span className="card-drag-icon"> <ArrowsPointingOutIcon className="defaultIcon" /></span>
                        <span className="card-heart-icon"> <HeartIcon className="defaultIcon" /></span>
                        <span className="card-arrow-icon"> <ArrowDownRightIcon className="defaultIcon" /></span>
                    </div>
                </section>
                <section className="card-img">
                    <img
                        src={img}
                        alt="Startboy"
                    />
                </section>
            </div>

        </div>
    )
}

export default ProductCard;