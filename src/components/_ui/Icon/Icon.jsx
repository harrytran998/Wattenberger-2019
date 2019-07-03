import React from 'react'

import './Icon.scss';

const sizes = {
    xs: 9,
    s: 12,
    m: 19,
    l: 25,
    xl: 45,
}
const Icon = ({ name, size="m", direction="e", className, ...props }) => {
    const dimension = sizes[size]

    return (
        <svg className={`Icon Icon--direction-${direction} ${className}`} width={dimension} height={dimension} viewBox="0 0 25 25" {...props}>
            { iconPaths[name] }
        </svg>
    )
}

export default Icon

const iconPaths = {
    arrow: <path d="M12.1454 0.796729C13.1125 -0.0711128 14.5999 0.00929699 15.4678 0.976329L24.3983 10.9276C25.2006 11.8216 25.2006 13.1763 24.3983 14.0703L15.4678 24.0216C14.5999 24.9886 13.1125 25.069 12.1454 24.2012C11.1784 23.3333 11.098 21.8459 11.9658 20.8788L17.0146 15.253H2.35268C1.05333 15.253 0 14.1996 0 12.9003C0 11.601 1.05333 10.5476 2.35268 10.5476H17.735L11.9658 4.11906C11.098 3.15203 11.1784 1.66457 12.1454 0.796729Z" />,
    asterisk: <path d="M13.9518 1.05422C13.9518 0.471989 13.4798 0 12.8976 0C12.3154 0 11.8434 0.471989 11.8434 1.05422V10.5617C11.7668 10.6064 11.6947 10.6616 11.6291 10.7272C11.5923 10.764 11.5587 10.8029 11.5285 10.8434H2.05422C1.47199 10.8434 1 11.3154 1 11.8976C1 12.4798 1.47199 12.9518 2.05422 12.9518H11.4635C11.5083 13.0284 11.5634 13.1005 11.6291 13.1661C11.6947 13.2318 11.7668 13.2869 11.8434 13.3316V23.9458C11.8434 24.528 12.3154 25 12.8976 25C13.4798 25 13.9518 24.528 13.9518 23.9458V13.0721C13.9555 13.0685 13.9593 13.0648 13.963 13.0611C13.9977 13.0264 14.0295 12.9899 14.0584 12.9518H23.741C24.3232 12.9518 24.7952 12.4798 24.7952 11.8976C24.7952 11.3154 24.3232 10.8434 23.741 10.8434H13.974L13.963 10.8322L13.9518 10.8212V1.05422ZM21.9718 2.82342C22.3835 3.23512 22.3835 3.90261 21.9718 4.31431L21.5502 4.73582C21.1385 5.14752 20.4711 5.14752 20.0594 4.73582C19.6477 4.32413 19.6477 3.65663 20.0594 3.24494L20.4809 2.82342C20.8926 2.41172 21.5601 2.41172 21.9718 2.82342ZM18.1781 6.61706C18.5898 7.02876 18.5898 7.69625 18.1781 8.10795L17.3351 8.95098C16.9234 9.36267 16.2559 9.36267 15.8442 8.95098C15.4325 8.53928 15.4325 7.87179 15.8442 7.46009L16.6872 6.61706C17.0989 6.20536 17.7664 6.20536 18.1781 6.61706ZM9.74782 15.0474C10.1595 15.4591 10.1595 16.1266 9.74782 16.5383L8.90479 17.3813C8.49309 17.793 7.8256 17.793 7.4139 17.3813C7.0022 16.9696 7.0022 16.3021 7.4139 15.8904L8.25693 15.0474C8.66863 14.6357 9.33612 14.6357 9.74782 15.0474ZM5.53267 19.2625C5.94436 19.6742 5.94436 20.3417 5.53267 20.7534L5.11115 21.1749C4.69945 21.5866 4.03196 21.5866 3.62026 21.1749C3.20856 20.7632 3.20856 20.0957 3.62026 19.684L4.04178 19.2625C4.45347 18.8508 5.12097 18.8508 5.53267 19.2625ZM20.4809 21.0699C20.8926 21.4816 21.5601 21.4816 21.9718 21.0699C22.3835 20.6582 22.3835 19.9907 21.9718 19.579L21.5502 19.1575C21.1385 18.7458 20.4711 18.7458 20.0594 19.1575C19.6477 19.5692 19.6477 20.2367 20.0594 20.6484L20.4809 21.0699ZM16.6872 17.2763C17.0989 17.688 17.7664 17.688 18.1781 17.2763C18.5898 16.8646 18.5898 16.1971 18.1781 15.7854L17.3351 14.9424C16.9234 14.5307 16.2559 14.5307 15.8442 14.9424C15.4325 15.3541 15.4325 16.0216 15.8442 16.4333L16.6872 17.2763ZM8.25693 8.84599C8.66863 9.25769 9.33612 9.25769 9.74782 8.84599C10.1595 8.43429 10.1595 7.7668 9.74782 7.3551L8.90479 6.51207C8.49309 6.10037 7.8256 6.10037 7.4139 6.51207C7.0022 6.92377 7.0022 7.59126 7.4139 8.00296L8.25693 8.84599ZM4.04178 4.63084C4.45347 5.04253 5.12097 5.04253 5.53267 4.63084C5.94436 4.21914 5.94436 3.55165 5.53267 3.13995L5.11115 2.71843C4.69945 2.30674 4.03196 2.30673 3.62026 2.71843C3.20856 3.13013 3.20856 3.79762 3.62026 4.20932L4.04178 4.63084Z" />,
    circle: <path d="M14.5271 0C14.2872 0 14.049 0.00808317 13.8128 0.0240113C13.2543 0.0616782 12.8321 0.544949 12.8698 1.10343C12.9075 1.6619 13.3907 2.0841 13.9492 2.04644C14.14 2.03357 14.3327 2.02702 14.5271 2.02702C14.7133 2.02702 14.898 2.03303 15.081 2.04486C15.6395 2.08096 16.1216 1.6574 16.1577 1.09882C16.1938 0.540235 15.7703 0.058153 15.2117 0.0220562C14.9852 0.00742181 14.7569 0 14.5271 0ZM19.1607 1.07848C18.6589 0.830533 18.0511 1.03635 17.8031 1.53818C17.5552 2.04002 17.761 2.64784 18.2628 2.89578C18.5943 3.05958 18.9137 3.24456 19.219 3.449C19.6842 3.7604 20.3137 3.63577 20.6251 3.17064C20.9365 2.70551 20.8118 2.07601 20.3467 1.76461C19.9682 1.51121 19.5722 1.28176 19.1607 1.07848ZM10.6398 2.97257C11.1365 2.71454 11.33 2.10269 11.0719 1.60596C10.8139 1.10924 10.2021 0.915739 9.70534 1.17377C9.28031 1.39456 8.87244 1.64356 8.48421 1.91825C8.02727 2.24155 7.91894 2.87406 8.24224 3.331C8.56554 3.78794 9.19805 3.89627 9.65499 3.57297C9.96828 3.3513 10.2972 3.15051 10.6398 2.97257ZM10.4729 6.08106C10.4094 6.08106 10.3459 6.08177 10.2827 6.08316ZM10.2827 6.08316C5.70601 6.18431 2.02702 9.92601 2.02702 14.527C2.02702 19.1915 5.80839 22.9729 10.4729 22.9729C15.1375 22.9729 18.9189 19.1915 18.9189 14.527C18.9189 9.91628 15.2243 6.16848 10.6341 6.08257C10.5806 6.08157 10.5269 6.08106 10.473 6.08106M10.4338 4.05412C10.3831 4.0543 10.3325 4.05485 10.282 4.05575C9.1054 4.07679 7.97616 4.29186 6.92493 4.67032C6.4531 4.41362 5.85791 4.5702 5.57557 5.03398C5.50708 5.1465 5.44064 5.26041 5.37631 5.37568C2.16898 7.16576 0 10.5931 0 14.527C0 20.311 4.6889 24.9999 10.4729 24.9999C14.4068 24.9999 17.8341 22.831 19.6242 19.6238C19.7395 19.5594 19.8535 19.493 19.966 19.4244C20.4298 19.1421 20.5864 18.5468 20.3296 18.075C20.6604 17.1562 20.8664 16.1778 20.9271 15.1603C20.9273 15.1572 20.9275 15.1541 20.9276 15.151C20.9398 14.9445 20.946 14.7364 20.946 14.527C20.946 14.2971 20.9385 14.0688 20.9239 13.8424C20.9237 13.8395 20.9235 13.8367 20.9233 13.8339C20.5739 8.48608 16.2105 4.23348 10.8166 4.05958C10.7025 4.0559 10.588 4.05404 10.473 4.05404C10.473 4.05404 10.473 4.05404 10.4729 4.05404C10.4599 4.05404 10.4468 4.05407 10.4338 4.05412ZM23.2354 4.6533C22.924 4.18817 22.2945 4.06354 21.8294 4.37494C21.3642 4.68634 21.2396 5.31584 21.551 5.78097C21.7554 6.08634 21.9404 6.40567 22.1042 6.73718C22.3522 7.23902 22.96 7.44484 23.4618 7.19689C23.9637 6.94894 24.1695 6.34112 23.9215 5.83929C23.7182 5.42785 23.4888 5.0318 23.2354 4.6533ZM24.9779 9.78832C24.9418 9.22974 24.4598 8.80618 23.9012 8.84228C23.3426 8.87837 22.919 9.36045 22.9551 9.91904C22.967 10.102 22.973 10.2867 22.973 10.4729C22.973 10.6673 22.9664 10.86 22.9536 11.0508C22.9159 11.6093 23.3381 12.0925 23.8966 12.1302C24.4551 12.1679 24.9383 11.7457 24.976 11.1872C24.9919 10.951 25 10.7128 25 10.4729C25 10.2431 24.9926 10.0148 24.9779 9.78832ZM23.8262 15.2947C24.0843 14.7979 23.8908 14.1861 23.394 13.9281C22.8973 13.67 22.2855 13.8635 22.0274 14.3602C21.8495 14.7028 21.6487 15.0317 21.427 15.345C21.1037 15.802 21.2121 16.4345 21.669 16.7578C22.1259 17.0811 22.7584 16.9727 23.0817 16.5158C23.3564 16.1276 23.6054 15.7197 23.8262 15.2947Z" />,
    code: <path d="M8.19571 5.38365C8.81227 5.93696 8.86353 6.88532 8.31022 7.50187L3.51546 12.8447L8.31022 18.1874C8.86353 18.804 8.81227 19.7523 8.19571 20.3057C7.57916 20.859 6.6308 20.8077 6.07749 20.1911L0.383632 13.8465C-0.127877 13.2765 -0.127877 12.4128 0.383632 11.8428L6.07749 5.49815C6.6308 4.8816 7.57916 4.83033 8.19571 5.38365ZM16.5469 5.38365C17.1634 4.83034 18.1118 4.8816 18.6651 5.49816L24.3589 11.8428C24.8705 12.4128 24.8705 13.2765 24.3589 13.8465L18.6651 20.1911C18.1118 20.8077 17.1634 20.859 16.5469 20.3057C15.9303 19.7523 15.879 18.804 16.4324 18.1874L19.6513 14.6005H10.3033C9.47485 14.6005 8.80328 13.929 8.80328 13.1005C8.80328 12.2721 9.47485 11.6005 10.3033 11.6005H20.1106L16.4324 7.50188C15.879 6.88532 15.9303 5.93696 16.5469 5.38365Z" />,
    copy: <>
        <rect x="2" y="8" width="15" height="15" rx="2" ry="2" fill="currentColor" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="7" y="3" width="15" height="15" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </>,
    file: <>
        <path d="M0.9985 0.9985C1.63783 0.359171 2.50494 0 3.40909 0H11.3636C11.665 0 11.9541 0.119724 12.1672 0.332833L20.1217 8.28738C20.3348 8.50049 20.4545 8.78953 20.4545 9.09091V21.5909C20.4545 22.4951 20.0954 23.3622 19.456 24.0015C18.8167 24.6408 17.9496 25 17.0455 25H3.40909C2.50494 25 1.63783 24.6408 0.9985 24.0015C0.359171 23.3622 0 22.4951 0 21.5909V3.40909C0 2.50494 0.359171 1.63783 0.9985 0.9985ZM3.40909 2.27273C3.10771 2.27273 2.81867 2.39245 2.60556 2.60556C2.39245 2.81867 2.27273 3.10771 2.27273 3.40909V21.5909C2.27273 21.8923 2.39245 22.1813 2.60556 22.3944C2.81867 22.6075 3.10771 22.7273 3.40909 22.7273H17.0455C17.3468 22.7273 17.6359 22.6075 17.849 22.3944C18.0621 22.1813 18.1818 21.8923 18.1818 21.5909V9.56161L10.8929 2.27273H3.40909Z" />
        <path d="M11.3636 0C11.9912 0 12.5 0.508767 12.5 1.13636V7.95455H19.3182C19.9458 7.95455 20.4545 8.46331 20.4545 9.09091C20.4545 9.71851 19.9458 10.2273 19.3182 10.2273H11.3636C10.736 10.2273 10.2273 9.71851 10.2273 9.09091V1.13636C10.2273 0.508767 10.736 0 11.3636 0Z" />
    </>,
    mail: <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </g>,
    play: <polygon points="3 0, 22 12.5, 3 25" />,
    tooltip: <path d="M23.9017 1.09835C23.1984 0.395088 22.2446 0 21.25 0H3.75C2.75544 0 1.80161 0.395088 1.09835 1.09835C0.395088 1.80161 0 2.75544 0 3.75V16.25C0 17.2446 0.395088 18.1984 1.09835 18.9016C1.80161 19.6049 2.75544 20 3.75 20H18.2322L22.8661 24.6339C23.2236 24.9914 23.7613 25.0983 24.2284 24.9049C24.6954 24.7114 25 24.2556 25 23.75V3.75C25 2.75544 24.6049 1.80161 23.9017 1.09835Z" />,
    tooltipOutline: <path d="M3.75 2.5C3.41848 2.5 3.10054 2.6317 2.86612 2.86612C2.6317 3.10054 2.5 3.41848 2.5 3.75V20.7322L5.36612 17.8661C5.60054 17.6317 5.91848 17.5 6.25 17.5H21.25C21.5815 17.5 21.8995 17.3683 22.1339 17.1339C22.3683 16.8995 22.5 16.5815 22.5 16.25V3.75C22.5 3.41848 22.3683 3.10054 22.1339 2.86612C21.8995 2.6317 21.5815 2.5 21.25 2.5H3.75ZM1.09835 1.09835C1.80161 0.395088 2.75544 0 3.75 0H21.25C22.2446 0 23.1984 0.395088 23.9017 1.09835C24.6049 1.80161 25 2.75544 25 3.75V16.25C25 17.2446 24.6049 18.1984 23.9017 18.9016C23.1984 19.6049 22.2446 20 21.25 20H6.76777L2.13388 24.6339C1.77639 24.9914 1.23874 25.0983 0.771646 24.9048C0.304553 24.7114 0 24.2556 0 23.75V3.75C0 2.75544 0.395088 1.80161 1.09835 1.09835Z" />,
    x: <path d="M24.7678 4.76777C25.7441 3.79146 25.7441 2.20854 24.7678 1.23223C23.7915 0.255922 22.2085 0.255922 21.2322 1.23223L13 9.46447L4.76777 1.23223C3.79146 0.255922 2.20854 0.255922 1.23223 1.23223C0.255923 2.20854 0.255923 3.79146 1.23223 4.76777L9.46447 13L1.23223 21.2322C0.255923 22.2085 0.255923 23.7915 1.23223 24.7678C2.20854 25.7441 3.79146 25.7441 4.76777 24.7678L13 16.5355L21.2322 24.7678C22.2085 25.7441 23.7915 25.7441 24.7678 24.7678C25.7441 23.7915 25.7441 22.2085 24.7678 21.2322L16.5355 13L24.7678 4.76777Z" />,
}