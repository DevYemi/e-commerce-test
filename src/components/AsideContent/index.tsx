import "./AsideContent.scss"
import { ShareIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline"

function index() {
    return (
        <div className="aside-content-wrapper">
            <section className="card">
                <span className="profile-wrapper">
                    <img
                        width={60}
                        height={60}
                        src="/src/assets/wizkid.jpg" alt="StarBoy" />
                </span>
                <h2>Sam Smith</h2>
                <p>@sam_smith</p>

                <button>Edit Profile</button>
            </section>
            <section className="content-links">
                <div className="share-wishlist">
                    <p>Share Wishlist</p>
                    <span> <ShareIcon className="defaultIcon" /> </span>

                </div>
                <div className="import-wishlist">
                    <p>Import Wishlist</p>
                    <span><ArrowDownTrayIcon className="defaultIcon" /></span>

                </div>
            </section>

        </div>
    )
}

export default index