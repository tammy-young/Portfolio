import { Icon } from '@iconify/react';
import * as constants from '../constants';
import {pages} from '../constants';

function FileSwitcherItem({ page }) {

    let iconName = pages[page].icon;
    let pageName = pages[page].label;
    let pageURL = pages[page].url;

    return (
        <a className="flex border-2 min-w-max gap-x-1 px-3 md:py-1 file-tab" href={ pageURL } style={{ color: constants.textColor, textDecoration: 'none' }}>
            <Icon icon={ iconName } color="#e44d27" width={ constants.fileTypeIconSize } height={ constants.fileTypeIconSize } />
            <span style={{ paddingLeft: constants.fileFileNameGap }}>
                { pageName }
            </span>
            <span className="close-span" style={{ paddingLeft: "10px" }}>
                <Icon className="close-tab" icon="material-symbols:close" color={ constants.textColor } width="16px" height="16px" style={{ marginTop: "-1px", visibility: "hidden" }} />
            </span>
        </a>
    )
}

function FileSwitcher() {

    return (
        <div className="col w-full overflow-x-auto" style={{ backgroundColor: constants.compColor1, height: '30px' }}>

            <div className="flex overflow-x-auto" style={{ fontSize: constants.fontSize }}>
                <FileSwitcherItem page="home" />
                <FileSwitcherItem page="experience" />
                <FileSwitcherItem page="projects" />
                <FileSwitcherItem page="contact" />
            </div>

        </div>
    )
}

export default FileSwitcher;
