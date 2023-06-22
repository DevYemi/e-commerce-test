
import { PlusIcon, BellIcon, EllipsisVerticalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import "./header.scss";
import { useMedia, useClickAway } from 'react-use';
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface PropType {
    asideNavIsOpen: boolean,
    toggleAsideNav: React.Dispatch<React.SetStateAction<boolean>>
}


function Header({ asideNavIsOpen, toggleAsideNav }: PropType) {

    const acWrapperRef = useRef(null);
    const isWebView = useMedia('(min-width: 1024px)');
    const isMobileView = useMedia('(max-width: 560px)');


    useClickAway(acWrapperRef, () => {
        if (isWebView) return;

        closeAccessoriesContent();
    })

    useEffect(() => { // Reset Accessories styles on screen changes
        const acWrapper = document.querySelector(".accessories-content") as HTMLElement;
        if (isWebView) {
            gsap.set(acWrapper,
                {
                    autoAlpha: 1,
                    translateX: 0,
                    translateY: 0
                })
        } else {
            gsap.set(acWrapper,
                {
                    autoAlpha: 0,
                    translateX: -140,
                    translateY: 100
                })
        }

    }, [isWebView])

    useEffect(() => {
        const searchBox = document.querySelector(".search-box") as HTMLElement;
        const greetingWrapper = document.querySelector(".greetings") as HTMLElement;

        searchBox.setAttribute("data-is-visible", "false")
        const tl = gsap.timeline();
        if (isMobileView) {
            tl.set(greetingWrapper,
                {
                    display: "initial"
                }).set(searchBox,
                    {
                        width: "0",
                        autoAlpha: 0
                    })
        } else {
            tl.set(greetingWrapper,
                {
                    display: "initial"
                }).set(searchBox,
                    {
                        width: "auto",
                        autoAlpha: 1
                    })
        }
    }, [isMobileView])

    const handleHamburgerClick = (shouldOpen: boolean) => {
        const hamburger = document.querySelector('.hamburger') as HTMLDivElement;

        const tl = gsap.timeline({
            defaults: { duration: .2 }
        })

        //animate timmeline base on navBar state
        if (shouldOpen) {
            tl.to(hamburger.children[1], {
                scaleX: 0,
                transformOrigin: "left center"
            }).to([hamburger.children[0], hamburger.children[2]], { width: '32px' })
                .to(hamburger.children[0], { rotate: '45deg', translateY: '8px', })
                .to(hamburger.children[2], {
                    rotate: '-45deg',
                    translateY: '-8px',
                }, "<")
        } else {
            tl.to(hamburger.children[0], { rotate: '0deg', translateY: '0px' })
                .to(hamburger.children[2], { rotate: '0deg', translateY: '0px' }, "<")
                .to([hamburger.children[0], hamburger.children[2]], { width: '20px' })
                .to(hamburger.children[1], {
                    scale: 1,
                })
        }

        toggleAsideNav(shouldOpen);
    }

    const toggleSearchInputDisplay = () => {
        const greetingWrapper = document.querySelector(".greetings") as HTMLElement;
        const searchBox = document.querySelector(".search-box") as HTMLElement;
        const isVisible = searchBox.getAttribute("data-is-visible");

        const tl = gsap.timeline({ defaults: { duration: 0.5 } });

        if (isVisible === "false") {
            tl.set(greetingWrapper,
                {
                    display: "none"
                }).to(searchBox,
                    {
                        width: "100%",
                        autoAlpha: 1,
                        onComplete: () => {
                            searchBox.setAttribute("data-is-visible", "true")
                        }
                    })
        } else {
            tl.to(searchBox,
                {
                    width: 0,
                    autoAlpha: 0,
                    onComplete: () => {
                        searchBox.setAttribute("data-is-visible", "false")
                    }
                }).set(greetingWrapper,
                    {
                        display: "initial"
                    })
        }
    }

    const toggleAccessoriesContentDisplay = () => {
        const acWrapper = document.querySelector(".accessories-content") as HTMLElement;
        const isAcVisible = acWrapper.getAttribute("data-is-visible");

        if (isAcVisible === "false") {
            openAccessoriesContent()
        } else {
            closeAccessoriesContent()
        }


    }


    const openAccessoriesContent = () => { // Open Accessories Drop-Menu
        const acWrapper = document.querySelector(".accessories-content") as HTMLElement;

        gsap.to(acWrapper,
            {
                translateY: 120,
                autoAlpha: 1,
                onComplete: () => {
                    acWrapper.setAttribute("data-is-visible", "true")
                }
            }
        )
    }
    const closeAccessoriesContent = () => { // Close Accessories Drop-Menu
        const acWrapper = document.querySelector(".accessories-content") as HTMLElement;

        gsap.to(acWrapper,
            {
                translateY: 100,
                autoAlpha: 0,
                onComplete: () => {
                    acWrapper.setAttribute("data-is-visible", "false")
                }
            }
        )
    }

    return (
        <div className="header-wrapper">
            <section className="greetings">
                <p>Welcome Back, <span>Sam</span></p>
                <p>4:45pm 19 june 2023</p>
            </section>
            <section data-is-visible={false} className="search-box">
                <input
                    type="text"
                    placeholder="Search for any product or user"
                />
            </section>
            <section ref={acWrapperRef} className="accessories">
                <span onClick={toggleSearchInputDisplay} className="search-icon">
                    <MagnifyingGlassIcon className="defaultIcon" />
                </span>
                <span onClick={toggleAccessoriesContentDisplay} className="profile-more-icon">
                    <EllipsisVerticalIcon className="defaultIcon" />
                </span>
                <div
                    className='hamburger'
                    onClick={() => { handleHamburgerClick(!asideNavIsOpen) }}>
                    <span />
                    <span />
                    <span />
                </div>
                <div data-is-visible={false} className="accessories-content">
                    <button className="profile-btn">View Profile</button>
                    <p className="btn-wrapper">
                        <button className="plus-btn">
                            <PlusIcon className="defaultIcon" />
                        </button>
                        <span>Add</span>
                    </p>
                    <p className="btn-wrapper">
                        <button className="bell-btn">
                            <BellIcon className="defaultIcon" />
                        </button>
                        <span>Notification</span>
                    </p>
                    <button className="logout-btn">
                        <img
                            width={40}
                            height={40}
                            src="/src/assets/wizkid.jpg"
                            alt="" />
                        <span>Log Out</span>
                    </button>

                </div>

            </section>
        </div>
    )
}

export default Header