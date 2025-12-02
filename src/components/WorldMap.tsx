export function WorldMap() {
  return (
    <svg
      viewBox="0 0 1200 600"
      className="world-map-svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Ocean background - blue */}
      <rect width="100%" height="100%" fill="#0a1628" />
      
      {/* Continents - black with subtle border */}
      <g fill="#050608" stroke="rgba(126, 200, 227, 0.3)" strokeWidth="0.5">
        {/* North America */}
        <path d="M 120 80 L 180 60 L 220 70 L 280 90 L 300 100 L 290 130 L 260 150 L 240 180 L 200 200 L 180 250 L 160 280 L 140 300 L 100 290 L 80 260 L 60 220 L 50 180 L 60 140 L 80 100 Z" />
        <path d="M 140 300 L 180 320 L 200 350 L 220 380 L 200 400 L 160 390 L 130 360 L 120 330 Z" />
        {/* Central America */}
        <path d="M 200 400 L 220 420 L 240 450 L 230 470 L 210 460 L 190 430 L 195 410 Z" />
        
        {/* South America */}
        <path d="M 230 470 L 270 480 L 300 500 L 320 540 L 310 580 L 280 600 L 250 580 L 240 540 L 250 500 L 235 485 Z" />
        <path d="M 320 540 L 340 520 L 350 540 L 340 570 L 320 580 L 315 560 Z" />
        
        {/* Europe */}
        <path d="M 480 80 L 520 70 L 560 80 L 600 100 L 620 130 L 600 160 L 560 170 L 520 160 L 480 140 L 460 110 Z" />
        <path d="M 520 160 L 540 180 L 560 200 L 540 220 L 500 210 L 490 190 L 500 170 Z" />
        {/* UK & Ireland */}
        <path d="M 460 110 L 475 100 L 490 110 L 485 130 L 465 135 L 455 120 Z" />
        <path d="M 445 115 L 455 110 L 460 125 L 450 130 L 440 125 Z" />
        {/* Scandinavia */}
        <path d="M 520 50 L 540 40 L 560 50 L 570 80 L 550 100 L 530 90 L 520 70 Z" />
        <path d="M 560 50 L 590 40 L 610 60 L 600 90 L 575 80 L 565 60 Z" />
        {/* Italy */}
        <path d="M 530 180 L 540 200 L 535 230 L 520 240 L 515 220 L 520 195 Z" />
        {/* Iberian Peninsula */}
        <path d="M 460 160 L 490 155 L 500 180 L 490 210 L 455 215 L 445 190 L 450 170 Z" />
        
        {/* Africa */}
        <path d="M 490 220 L 540 210 L 600 230 L 640 280 L 650 350 L 620 420 L 560 480 L 500 500 L 460 460 L 440 400 L 460 340 L 480 280 L 475 240 Z" />
        {/* Madagascar */}
        <path d="M 660 420 L 680 410 L 690 440 L 680 480 L 660 485 L 650 450 Z" />
        
        {/* Asia */}
        <path d="M 620 80 L 700 60 L 800 70 L 900 100 L 1000 120 L 1050 150 L 1080 200 L 1100 250 L 1080 300 L 1020 320 L 950 300 L 880 280 L 820 250 L 780 200 L 720 160 L 680 140 L 640 130 L 620 110 Z" />
        {/* Middle East */}
        <path d="M 640 200 L 700 190 L 740 220 L 720 260 L 680 280 L 640 270 L 620 240 L 630 210 Z" />
        {/* India */}
        <path d="M 780 260 L 820 250 L 850 290 L 830 350 L 790 380 L 760 350 L 770 300 Z" />
        {/* Southeast Asia */}
        <path d="M 880 280 L 920 270 L 960 300 L 940 350 L 900 360 L 870 330 L 875 300 Z" />
        {/* Japan */}
        <path d="M 1040 180 L 1060 170 L 1075 190 L 1070 220 L 1050 230 L 1035 210 Z" />
        <path d="M 1050 230 L 1065 240 L 1060 260 L 1045 255 L 1045 240 Z" />
        {/* Korean Peninsula */}
        <path d="M 1010 180 L 1025 175 L 1035 200 L 1025 220 L 1010 215 L 1005 195 Z" />
        {/* Taiwan */}
        <path d="M 1020 280 L 1035 275 L 1040 295 L 1030 305 L 1020 295 Z" />
        {/* Philippines */}
        <path d="M 1000 320 L 1015 315 L 1020 340 L 1010 360 L 995 350 L 995 330 Z" />
        
        {/* Australia */}
        <path d="M 920 420 L 1000 400 L 1080 430 L 1100 500 L 1050 560 L 960 550 L 910 500 L 900 450 Z" />
        {/* New Zealand */}
        <path d="M 1130 520 L 1145 515 L 1155 540 L 1145 560 L 1130 555 L 1125 535 Z" />
        <path d="M 1140 560 L 1155 565 L 1150 585 L 1135 580 L 1135 570 Z" />
        
        {/* Indonesia */}
        <path d="M 940 380 L 980 375 L 1020 390 L 1000 420 L 960 425 L 930 410 Z" />
        <path d="M 1020 390 L 1060 385 L 1090 400 L 1070 430 L 1030 425 L 1015 410 Z" />
        
        {/* Greenland */}
        <path d="M 340 30 L 400 20 L 440 40 L 450 80 L 420 110 L 370 100 L 340 70 Z" />
        
        {/* Iceland */}
        <path d="M 420 70 L 445 65 L 455 80 L 445 95 L 425 90 L 415 80 Z" />
      </g>
      
      {/* Ocean wave pattern for texture */}
      <defs>
        <pattern id="oceanPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="rgba(126, 200, 227, 0.05)" />
          <circle cx="50" cy="30" r="1" fill="rgba(126, 200, 227, 0.05)" />
          <circle cx="30" cy="60" r="1" fill="rgba(126, 200, 227, 0.05)" />
          <circle cx="70" cy="80" r="1" fill="rgba(126, 200, 227, 0.05)" />
          <circle cx="90" cy="50" r="1" fill="rgba(126, 200, 227, 0.05)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#oceanPattern)" />
    </svg>
  )
}

