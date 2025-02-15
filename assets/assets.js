import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import plogo1 from './plogo1.jpg';
import plogo2 from './plogo2.jpg';
import profile1 from './profile1.jpeg';
import profile2 from './profile2.jpeg';
import blog from './blog.png';

export const assets = {
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    figma,
    git,
    mongodb,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    plogo1,
    plogo2,
    profile1,
    profile2,
    blog
};

export const workData = [
    {
        title: 'Portfolio ',
        description: 'Web App',
        bgImage: '/pro1.png',
    },
    {
        title: 'E-Voting',
        description: 'Web App',
        bgImage: '/pro2.png',
    },
    {
        title: 'iAchieve',
        description: 'Web App',
        bgImage: '/pro3.png',
    },
    {
        title: 'H2',
        description: 'Web App',
        bgImage: '/pro4.png',
    },
]

export const serviceData = [
    { icon: assets.blog, title: 'Next.js Routing', description: 'One of the standout features of Next.js is its file-based routing system...', link: '' },
    { icon: assets.blog, title: 'DOM Manipulation', description: 'It is the ability to change a webpage’s structure or content dynamically using JavaScript. Using...', link: '' },
    { icon: assets.blog, title: 'Responsive Design', description: 'Responsive Web Design (RWD) ensures your website looks great on all screen sizes. By using...', link: '' },
    { icon: assets.blog, title: ' Local Storage', description: 'Local Storage allows you to store data in a users browser, so that even after the page reloads...', link: '' },
    
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Java, Python, HTML, CSS, JavaScript (React Js, Next Js)' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.E. in Information Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.mongodb, assets.figma, assets.git
];