import {
    BuildingLibraryIcon,
    QueueListIcon,
    PresentationChartLineIcon,
    GiftIcon,
    Cog8ToothIcon,
    XMarkIcon,
    FaceSmileIcon
} from '@heroicons/react/24/outline'
import './asideNav.scss'

function AsideNav() {
    return (
        <div className='aside-nav-wrapper'>
            <div className='logo'>
                <span>
                    <BuildingLibraryIcon className='defaultIcon' />
                </span>
                <p>WishPo</p>
            </div>

            <ul className='nav-links'>
                <li className='activeLink'>
                    <span>
                        <QueueListIcon className='defaultIcon' />
                    </span>
                    <p>WishPond</p>
                </li>
                <li>
                    <span>
                        <PresentationChartLineIcon className='defaultIcon' />
                    </span>
                    <p>Activities</p>
                </li>
                <li>
                    <span>
                        <GiftIcon className='defaultIcon' />
                    </span>
                    <p>Gift</p>
                </li>
                <li>
                    <span>
                        <Cog8ToothIcon className='defaultIcon' />
                    </span>
                    <p>Settings</p>
                </li>
            </ul>

            <div className='notice-board'>
                <span className='x-mark-icon'>
                    <XMarkIcon className='defaultIcon' />
                </span>
                <div>
                    <span className='smile-icon'>
                        <FaceSmileIcon className='defaultIcon' />
                    </span>
                    <h2>Welcome!</h2>
                    <p>This is wishPo Dashboard add items to wishPo by clicking this button to get started</p>
                </div>
            </div>
        </div>
    )
}

export default AsideNav