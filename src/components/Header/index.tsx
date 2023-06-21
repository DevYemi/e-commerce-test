
import { PlusIcon, BellIcon } from "@heroicons/react/24/outline"
import "./header.scss";
function Header() {
    return (
        <div className="header-wrapper">
            <section className="greetings">
                <p>Welcome Back, <span>Sam</span></p>
                <p>4:45pm 19 june 2023</p>
            </section>
            <section className="search-box">
                <input
                    type="text"
                    placeholder="Search for any product or user"
                />
            </section>
            <section className="accessories">
                <button className="profile-btn">View Profile</button>
                <button className="plus-btn"><PlusIcon className="defaultIcon" /></button>
                <button className="bell-btn"><BellIcon className="defaultIcon" /></button>
                <img
                    width={40}
                    height={40}
                    src="/src/assets/wizkid.jpg"
                    alt="" />
            </section>
        </div>
    )
}

export default Header