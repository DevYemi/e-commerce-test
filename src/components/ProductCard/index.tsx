import { ProductType } from "@/pages/home/dummyData";
import "./productCard.scss"
import {
    ArrowsPointingOutIcon,
    ArrowDownRightIcon
} from "@heroicons/react/24/outline";
import {
    HeartIcon,
} from "@heroicons/react/24/solid";
import { DraggableProvided } from "@hello-pangea/dnd";
import { useState } from "react";

type DndProductType = ProductType & { providedDnd: DraggableProvided }



function ProductCard(props: DndProductType) {
    const { name, url, price, img, color, id, liked, providedDnd } = props

    const [isLiked, setIsLiked] = useState(liked);

    return (
        <div
            ref={providedDnd.innerRef}
            {...providedDnd.draggableProps}
            className="card-wrapper"
            style={{
                background: `radial-gradient(farthest-side at 50% 40%, ${color}, transparent 200%)`,
                ...providedDnd.draggableProps.style
            }}
        >
            <div className="card-container">
                <section className="card-contents">
                    <div className="card-details">
                        <h2>{name}</h2>
                        <p>{url}</p>
                        <h2>₦{price}</h2>
                    </div>
                    <div className="card-icons">
                        <span {...providedDnd.dragHandleProps} className="card-drag-icon"> <ArrowsPointingOutIcon className="defaultIcon" /></span>
                        <span onClick={() => setIsLiked(!isLiked)} className={`card-heart-icon ${isLiked ? "isLiked" : ""}`}>
                            <HeartIcon className="defaultIcon" />
                        </span>
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