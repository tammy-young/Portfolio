import { Icon } from '@iconify/react';
import * as constants from '../constants';
import {pages} from '../constants';
import '../App.css';

function SideBarIcon({ page }) {

    let pageURL = pages[page].url;
    let iconName = pages[page].sidebarIcon;
    const sideBarIconSize = '25';

    return (
        <a href={ pageURL } target={ pageURL[0] != "/"? "_blank" : "" }>
            <div className="border-l-2 p-2 max-sm:pl-2">
                <div className="p-2 max-sm:pl-2">
                    <Icon icon={ iconName } width={ sideBarIconSize } height={ sideBarIconSize } className='highlightable-btn' style={{ color: constants.secondaryTextColor }} />
                </div>
            </div>
        </a>
    )

}

function SideBar() {

    return (
        <aside className="col-span-1 justify-between max-w-1" style={{ backgroundColor: constants.compColor1 }}>
            
            <div className="items-start justify-center gap-y-1 ">
                {/* Main Page */}
                <SideBarIcon page="home" />

                {/* GitHub */}
                <SideBarIcon page="github" />

                {/* Projects */}
                <SideBarIcon page="projects" />

                {/* Contact Information */}
                <SideBarIcon page="linkedin" />

            </div>

            <div className="items-center justify-center" style={{ bottom: constants.bottomIconStart, position: 'absolute' }}>

                {/* About Me */}
                <SideBarIcon page="about" />

                {/* Settings */}
                <SideBarIcon page="settings" />

            </div>
          
        </aside>
    )
}

export default SideBar;
