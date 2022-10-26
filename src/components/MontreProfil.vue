<script setup lang="ts">
import type { Montre } from "@/types";
withDefaults(defineProps<Montre>(), {
    bracelet: "white",
    cadrant: "white",
    ecran: "white",
});
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 454.24 710.49">
        <defs>
            <radialGradient id="radial-gradient" cx="1027.95" cy="-22914.37" r="28.95"
                gradientTransform="translate(-1141.66 5795.64) scale(1.14 0.25)" gradientUnits="userSpaceOnUse">
                <stop offset="0.1" stop-color="#dadada" stop-opacity="0.95" />
                <stop offset="1" stop-color="#fff" stop-opacity="0" />
            </radialGradient>
            <radialGradient id="radial-gradient-2" cx="33.03" cy="57.46" r="34.11" gradientTransform="translate(-0.04)"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" />
                <stop offset="1" stop-color="#b1bfc7" />
            </radialGradient>
            <radialGradient id="radial-gradient-3" cx="21.19" cy="39.89" r="11.71" gradientTransform="translate(-0.04)"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.11" stop-color="#fff" />
                <stop offset="0.95" stop-color="#010101" />
            </radialGradient>
            <radialGradient id="radial-gradient-4" cx="18.46" cy="19.69" r="2.81" xlink:href="#radial-gradient-3" />
            <radialGradient id="radial-gradient-5" cx="17.69" cy="42.76" r="4.36" xlink:href="#radial-gradient-3" />
            <radialGradient id="radial-gradient-6" cx="37.41" cy="14.67" r="5.26" xlink:href="#radial-gradient-3" />
            <radialGradient id="radial-gradient-7" cx="35.52" cy="25.67" r="1.08" xlink:href="#radial-gradient-3" />
            <radialGradient id="radial-gradient-8" cx="24.86" cy="27.59" r="2.22" xlink:href="#radial-gradient-3" />
            <radialGradient id="radial-gradient-9" cx="49.27" cy="30.89" r="15.41" xlink:href="#radial-gradient-3" />
            <linearGradient id="linear-gradient" x1="-560.65" y1="-583.25" x2="-597.7" y2="-546.2"
                gradientTransform="matrix(0.96, -0.04, -0.04, 0.96, 576.43, 564.93)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#010101" />
                <stop offset="0.6" stop-color="#fff" />
                <stop offset="0.9" stop-color="#010101" />
            </linearGradient>
            <linearGradient id="linear-gradient-2" x1="18959.75" y1="12535.23" x2="18922.7" y2="12572.28"
                gradientTransform="matrix(-0.37, -1, -0.85, 0.64, 17701.4, 10911.04)" xlink:href="#linear-gradient" />
            <linearGradient id="linear-gradient-3" x1="18623.39" y1="5115.24" x2="18586.34" y2="5152.29"
                gradientTransform="matrix(-0.55, -0.84, 0.91, -0.42, 5598.92, 17806.05)"
                xlink:href="#linear-gradient" />
            <linearGradient id="linear-gradient-4" x1="-2847" y1="5755.36" x2="-2884.06" y2="5792.42"
                gradientTransform="matrix(0.83, 0.55, -0.55, 0.83, 5609.73, -3209.48)" xlink:href="#linear-gradient" />
            <linearGradient id="linear-gradient-5" x1="2577.81" y1="14915.21" x2="2540.76" y2="14952.26"
                gradientTransform="matrix(-0.43, 1.4, -1.45, 0.01, 22784.55, -3726.23)" xlink:href="#linear-gradient" />
            <linearGradient id="linear-gradient-6" x1="8121.22" y1="-1938.34" x2="8084.16" y2="-1901.29"
                gradientTransform="matrix(0.81, -0.83, 0.84, 0.8, -4888.73, 8321.4)" xlink:href="#linear-gradient" />
            <linearGradient id="linear-gradient-7" x1="17700.74" y1="10160.4" x2="17663.69" y2="10197.46"
                gradientTransform="matrix(-0.95, -0.54, 0.41, -1.01, 12704.2, 19911.33)"
                xlink:href="#linear-gradient" />
            <linearGradient id="linear-gradient-8" x1="-3640.78" y1="-15472.94" x2="-3640.78" y2="-15392.38"
                gradientTransform="translate(2538.31 5136.51) scale(0.69 0.33)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" />
                <stop offset="1" stop-color="#010101" />
            </linearGradient>
            <linearGradient id="linear-gradient-9" x1="16.51" y1="6.01" x2="34.28" y2="48.69"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" />
                <stop offset="1" stop-color="#d5d7d7" />
            </linearGradient>
            <linearGradient id="linear-gradient-10" x1="38.66" y1="42.26" x2="14.7" y2="12.42"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" />
                <stop offset="1" stop-color="#b8babc" />
            </linearGradient>
            <radialGradient id="radial-gradient-10" cx="20.17" cy="17.26" r="15.36" gradientTransform="translate(0)"
                xlink:href="#radial-gradient-2" />
            <linearGradient id="linear-gradient-11" x1="21.73" y1="20.07" x2="32.55" y2="38.74"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" />
                <stop offset="1" stop-color="#b7c6cf" />
            </linearGradient>
            <symbol id="Orb_-_Gris" data-name="Orb - Gris" viewBox="0 0 66.17 72">
                <path
                    d="M66.17,64.76c0,4-14.81,7.24-33.08,7.24S0,68.76,0,64.76s14.81-7.24,33.09-7.24S66.17,60.76,66.17,64.76Z"
                    style="mix-blend-mode:multiply;fill:url(#radial-gradient)" />
                <path d="M33.09,65.92A32.84,32.84,0,1,1,65.92,33.09,32.87,32.87,0,0,1,33.09,65.92Z"
                    style="fill:url(#radial-gradient-2)" />
                <path
                    d="M33.09.5A32.59,32.59,0,1,1,.5,33.09,32.62,32.62,0,0,1,33.09.5m0-.5A33.09,33.09,0,1,0,66.17,33.09,33.08,33.08,0,0,0,33.09,0Z"
                    style="fill:#8d99a1" />
                <path d="M32.86,39.89A11.71,11.71,0,1,1,21.15,28.18,11.71,11.71,0,0,1,32.86,39.89Z"
                    style="opacity:0.6000000000000001;mix-blend-mode:screen;fill:url(#radial-gradient-3)" />
                <path d="M21.23,19.7a2.81,2.81,0,1,1-2.81-2.82A2.81,2.81,0,0,1,21.23,19.7Z"
                    style="opacity:0.8;mix-blend-mode:screen;fill:url(#radial-gradient-4)" />
                <path d="M22,42.77a4.37,4.37,0,1,1-4.36-4.37A4.36,4.36,0,0,1,22,42.77Z"
                    style="opacity:0.8;mix-blend-mode:screen;fill:url(#radial-gradient-5)" />
                <path d="M42.63,14.67a5.26,5.26,0,1,1-5.26-5.26A5.27,5.27,0,0,1,42.63,14.67Z"
                    style="opacity:0.8;mix-blend-mode:screen;fill:url(#radial-gradient-6)" />
                <path d="M36.56,25.67a1.08,1.08,0,1,1-1.08-1.08A1.07,1.07,0,0,1,36.56,25.67Z"
                    style="mix-blend-mode:screen;fill:url(#radial-gradient-7)" />
                <path d="M27,27.59a2.22,2.22,0,1,1-2.22-2.22A2.22,2.22,0,0,1,27,27.59Z"
                    style="mix-blend-mode:screen;fill:url(#radial-gradient-8)" />
                <path d="M64.65,30.89A15.42,15.42,0,1,1,49.23,15.47,15.41,15.41,0,0,1,64.65,30.89Z"
                    style="opacity:0.8;mix-blend-mode:screen;fill:url(#radial-gradient-9)" />
                <path
                    d="M36.3,37.52c9.68-9.87,20.57-15,24.87-11.9a2.67,2.67,0,0,0-.38-.44C56.84,21.3,45.5,26.46,35.46,36.7s-15,21.68-11,25.56a4,4,0,0,0,.45.37C21.69,58.39,26.62,47.4,36.3,37.52Z"
                    style="mix-blend-mode:screen;fill:url(#linear-gradient)" />
                <path
                    d="M39.22,35.14C44,19.2,44.11,5,39.51,2.57a2.66,2.66,0,0,1,.56.12c5.12,1.58,5.22,16.26.23,32.79S27.12,64.12,22,62.53a2.62,2.62,0,0,1-.52-.22C26.61,62.91,34.41,51.08,39.22,35.14Z"
                    style="opacity:0.4;mix-blend-mode:screen;fill:url(#linear-gradient-2)" />
                <path
                    d="M31.64,48.26C17.31,44.34,6.7,37.12,7.28,31.82a3.66,3.66,0,0,0-.21.55c-1.46,5.34,9.4,13,24.26,17s28.09,3,29.54-2.32A2.87,2.87,0,0,0,61,46.5C58.78,51.35,46,52.18,31.64,48.26Z"
                    style="opacity:0.7000000000000001;mix-blend-mode:screen;fill:url(#linear-gradient-3)" />
                <path
                    d="M31.25,16.1c13.53-2.88,25.51-.84,27.47,4.54a4.55,4.55,0,0,0-.09-.63C57.39,14.18,45,11.88,31,14.87S6.61,25,7.85,30.85a5.94,5.94,0,0,0,.18.6C7.62,25.74,17.73,19,31.25,16.1Z"
                    style="mix-blend-mode:screen;fill:url(#linear-gradient-4)" />
                <path
                    d="M45.39,23.73C55.59,37.11,58,52.56,51.07,59a10.11,10.11,0,0,0,.87-.58c7.87-6,5.68-22.1-4.88-36S21.54,2.2,13.68,8.19a8.7,8.7,0,0,0-.8.68C20.94,3.93,35.2,10.35,45.39,23.73Z"
                    style="mix-blend-mode:screen;fill:url(#linear-gradient-5)" />
                <path
                    d="M17.91,34c-.5-16,4.32-29.15,10.88-30.26a5.85,5.85,0,0,0-.73,0c-6.93.22-12.14,13.81-11.62,30.35S23,63.82,29.93,63.61a5.82,5.82,0,0,0,.73-.08C24,62.83,18.4,50,17.91,34Z"
                    style="mix-blend-mode:screen;fill:url(#linear-gradient-6)" />
                <path
                    d="M42.24,56.76C29,61.52,16.45,60.49,13.46,54.55a5.75,5.75,0,0,0,.2.71C16,61.79,29,63.08,42.74,58.14S65.65,43.92,63.3,37.39a5.65,5.65,0,0,0-.29-.67C64.49,43.2,55.46,52,42.24,56.76Z"
                    style="opacity:0.7000000000000001;mix-blend-mode:screen;fill:url(#linear-gradient-7)" />
                <g style="mix-blend-mode:screen">
                    <path
                        d="M52.85,14.2c0,5.55-8.85,10.05-19.76,10.05s-19.77-4.5-19.77-10S22.17,4.14,33.09,4.14,52.85,8.64,52.85,14.2Z"
                        style="fill:url(#linear-gradient-8)" />
                </g>
            </symbol>
            <symbol id="Puce_6_-_Gris" data-name="Puce 6 - Gris" viewBox="0 0 48 48">
                <path d="M24,47.75A23.75,23.75,0,1,1,47.75,24,23.78,23.78,0,0,1,24,47.75Z"
                    style="fill:url(#linear-gradient-9)" />
                <path d="M24,.5A23.5,23.5,0,1,1,.5,24,23.52,23.52,0,0,1,24,.5M24,0A24,24,0,1,0,48,24,24,24,0,0,0,24,0Z"
                    style="fill:#b2b5b8" />
                <path d="M41.5,24A17.5,17.5,0,1,1,24,6.5,17.49,17.49,0,0,1,41.5,24Z"
                    style="fill:url(#linear-gradient-10)" />
                <path d="M24,38.5A14.5,14.5,0,1,1,38.5,24,14.52,14.52,0,0,1,24,38.5Z"
                    style="fill:url(#radial-gradient-10)" />
                <path d="M24,10A14,14,0,1,1,10,24,14,14,0,0,1,24,10m0-1A15,15,0,1,0,39,24,15,15,0,0,0,24,9Z"
                    style="fill:#8d99a1" />
                <g style="opacity:0.8;mix-blend-mode:multiply">
                    <path d="M32.91,12A15.33,15.33,0,0,1,33.06,14,15,15,0,0,1,9.16,26.05,15,15,0,1,0,32.91,12Z"
                        style="fill:url(#linear-gradient-11)" />
                </g>
            </symbol>
            <symbol id="Chargement_4" data-name="Chargement 4" viewBox="0 0 35.92 35.92">
                <path d="M16.83,0A17.93,17.93,0,0,0,6.06,4.47l7.46,7.46a7.37,7.37,0,0,1,3.31-1.37Z"
                    style="fill:#bbbdbf" />
                <path d="M0,19.09A18,18,0,0,0,4.46,29.87l7.47-7.47a7.4,7.4,0,0,1-1.38-3.31Z" style="fill:#929497" />
                <path d="M4.47,6.06A17.88,17.88,0,0,0,0,16.84H10.55a7.49,7.49,0,0,1,1.38-3.32Z" style="fill:#a6a8ab" />
                <path d="M29.87,4.47A18,18,0,0,0,19.08,0V10.56a7.32,7.32,0,0,1,3.32,1.37Z" style="fill:#231f20" />
                <path d="M24,22.41l7.46,7.46a17.89,17.89,0,0,0,4.46-10.78H25.37A7.59,7.59,0,0,1,24,22.41Z"
                    style="fill:#595a5c" />
                <path d="M35.92,16.84A17.87,17.87,0,0,0,31.46,6.06L24,13.52a7.49,7.49,0,0,1,1.38,3.32Z"
                    style="fill:#404042" />
                <path d="M6.06,31.46a17.86,17.86,0,0,0,10.77,4.46V25.37A7.6,7.6,0,0,1,13.52,24Z" style="fill:#808284" />
                <path d="M19.08,35.92a17.92,17.92,0,0,0,10.79-4.46L22.4,24a7.49,7.49,0,0,1-3.32,1.37Z"
                    style="fill:#6e6f70" />
            </symbol>
        </defs>
        <g id="Calque_2" data-name="Calque 2">
            <g id="Calque_1-2" data-name="Calque 1">
                <g id="Face">
                    <g id="Bracelet">
                        <path
                            d="M210.82,167.62c-49.57,0-127.63-13.27-134.25-14.41.53-7.52,7.73-105.72,23.71-132.42C102,19.61,131.61.5,213.72.5,295.11.5,336.9,19.11,340.16,20.62c1.15,4.35,18.21,70.11,18.29,128.24C351.59,150.19,260.64,167.62,210.82,167.62Z"
                            style="fill:#5a4616" />
                        <path
                            d="M213.72,1c79.81,0,121.51,17.92,126,20,1.57,6,18.05,70.35,18.21,127.47-9.42,1.82-98.18,18.67-147.13,18.67-48.6,0-124.65-12.77-133.72-14.33.74-10.3,7.94-105.36,23.55-131.65,1.15-.77,8.51-5.42,24.56-10S169.79,1,213.72,1m0-1C128.21,0,99.91,20.44,99.91,20.44,83.08,48.35,76,153.62,76,153.62s82.61,14.5,134.78,14.5S359,149.28,359,149.28c0-60.71-18.36-129-18.36-129S299.23,0,213.72,0Z"
                            style="fill:#010101" />
                        <path
                            d="M231.38,710c-4.39,0-8.92-.09-13.45-.26-81.22-3.1-117.63-19.52-120.51-20.88C96,684.48,72.35,611.3,78.93,556c6.2-1,87.08-13.3,138.2-13.3,3.56,0,7,.07,10.07.18,49.69,1.9,127.52,18.23,133.66,19.53.19,5.54,1.66,69.08-24.25,122.43C334.84,686.22,304,710,231.38,710Z"
                            style="fill:#5a4616" />
                        <path
                            d="M217.12,542.16v1c3.56,0,6.94.06,10.06.18C276,545.2,351.94,561,360.38,562.78c.21,7.59,1.13,69.51-24.17,121.7-1.17.93-8.82,6.71-24.17,12.44s-41.87,12.57-80.66,12.57c-4.39,0-8.91-.09-13.43-.26-79.64-3-116.12-18.9-120.12-20.75-2-6-24.78-77.61-18.45-132.08,8.54-1.31,87.53-13.24,137.74-13.24v-1m0,0c-53.56,0-138.64,13.37-138.64,13.37C71.48,613.12,97,689.2,97,689.2s35.46,17.77,120.9,21q7,.25,13.47.26c75.53,0,105.63-25.37,105.63-25.37C364.42,628.78,361.35,562,361.35,562s-82-17.63-134.13-19.62q-4.82-.18-10.1-.18Z"
                            style="fill:#010101" />
                        <path
                            d="M84,79.39s72-6.48,77.65-9.89,11.59-28.9,17.55-32,74-1.57,77.6,1,10.56,27.92,14.81,31.66,80.85,6.39,80.85,6.39"
                            style="fill:#5a4616;stroke:#010101;stroke-miterlimit:10" />
                        <path
                            d="M353.82,635.33s-72.4,6.48-78,9.89-11.61,28.89-17.58,32-74.19,1.57-77.78-1-10.57-27.91-14.84-31.66-81.83-6.42-81.83-6.42"
                            style="fill:#5a4616;stroke:#010101;stroke-miterlimit:10" />
                    </g>
                    <g id="Cadrant">
                        <path d="M429.14,324.06V368l21.45-.86s7.66-18.55,0-41.7Z"
                            style="fill:#878787;stroke:#010101;stroke-miterlimit:10;stroke-width:0.5px" />
                        <path d="M435.78,397.37v52l5.84-1a323.7,323.7,0,0,0,0-49.39Z"
                            style="fill:#878787;stroke:#010101;stroke-miterlimit:10;stroke-width:0.5px" />
                        <path d="M435.78,249.69v52l5.84-1a323.7,323.7,0,0,0,0-49.39Z"
                            style="fill:#878787;stroke:#010101;stroke-miterlimit:10;stroke-width:0.5px" />
                        <rect x="0.25" y="127.64" width="436.31" height="453.62" rx="80.8"
                            style="fill:#878787;stroke:#010101;stroke-miterlimit:10;stroke-width:0.5px" />
                        <path d="M62.13,579s-1.21,33.26,19.05,43.55c0,0-4.57-30-3.88-41.4A63.2,63.2,0,0,1,62.13,579Z"
                            style="fill:#878787;stroke:#010101;stroke-miterlimit:10;stroke-width:0.5px" />
                        <path
                            d="M373.09,129.5s1-33.15-19.23-43.44c0,0,4.57,30,3.88,41.4A61.11,61.11,0,0,1,373.09,129.5Z"
                            style="fill:#878787;stroke:#010101;stroke-miterlimit:10;stroke-width:0.5px" />
                        <path
                            d="M375.78,578.25s1.21,33.26-19,43.55c0,0,4.57-29.95,3.88-41.4A63.2,63.2,0,0,0,375.78,578.25Z"
                            style="fill:#878787;stroke:#010101;stroke-miterlimit:10;stroke-width:0.5px" />
                        <path d="M64,129.16S62.82,96.29,83.08,86c0,0-4.57,30-3.88,41.41A104.42,104.42,0,0,0,64,129.16Z"
                            style="fill:#878787;stroke:#010101;stroke-miterlimit:10;stroke-width:0.5px" />
                    </g>
                    <g id="Ecran">
                        <rect x="38.11" y="161.45" width="362.23" height="384.26" rx="65.21"
                            style="fill:#b4b4b4;stroke:#010101;stroke-miterlimit:10;stroke-width:0.5px" />
                        <use width="66.17" height="72" transform="translate(114.03 395.54) scale(0.64)"
                            xlink:href="#Orb_-_Gris" />
                        <use width="48" height="48" transform="translate(194.41 394.61)" xlink:href="#Puce_6_-_Gris" />
                        <text transform="translate(85.34 329.53)"
                            style="font-size:98px;fill:#010101;font-family:ArialMT, Arial;letter-spacing:-0.10799984056122448em">1O:1O</text><text
                            transform="translate(134.66 221.78)"
                            style="font-size:30px;fill:#010101;font-family:ArialMT, Arial;letter-spacing:-0.01201171875em">
                            <tspan xml:space="preserve">Lun. 24 oct.</tspan>
                        </text><text transform="translate(171.18 493.03)"
                            style="font-size:32.68701171875px;fill:#010101;font-family:Break-Bold, Break;font-weight:700;letter-spacing:-0.011995279566198109em">TiK-TaK</text>
                        <use width="35.92" height="35.92" transform="translate(274.47 396.61) scale(1.22)"
                            xlink:href="#Chargement_4" />
                    </g>
                </g>
            </g>
        </g>
    </svg>
</template>