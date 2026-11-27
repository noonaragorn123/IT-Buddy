/* =====================================================
   PRODUCT DATA
===================================================== */

const products = [

    /* =================================================
       MOUSE
    ================================================= */

    {
        id: 1,
        category: "Mouse",
        brand: "Logitech",
        name: "Logitech G304 LIGHTSPEED",
        price: 1290,
        spec: "Wireless 2.4GHz; 12,000 DPI; 99 g",
        use: "Gaming / FPS",
        stock: 4,
        image: "images/Mouse/Logitech G304 LIGHTSPEED.jpg"
    },

    {
        id: 2,
        category: "Mouse",
        brand: "Logitech",
        name: "Logitech G502 HERO",
        price: 1690,
        spec: "Wired USB; HERO sensor สูงสุด 25,600 DPI; ปุ่มตั้งโปรแกรมได้",
        use: "Gaming / ใช้งานหลายรูปแบบ",
        stock: 3,
        image: "images/Mouse/Logitech G502 HERO.jpg"
    },

    {
        id: 3,
        category: "Mouse",
        brand: "Logitech",
        name: "Logitech M650",
        price: 1090,
        spec: "Bluetooth / USB Receiver; SilentTouch; 4,000 DPI",
        use: "ทำงาน / Office",
        stock: 4,
        image: "images/Mouse/Logitech M650.jpg"
    },

    {
        id: 4,
        category: "Mouse",
        brand: "Razer",
        name: "Razer DeathAdder Essential",
        price: 590,
        spec: "Wired USB; 6,400 DPI; Ergonomic",
        use: "Gaming / ใช้งานทั่วไป",
        stock: 3,
        image: "images/Mouse/Razer DeathAdder Essential.jpg"
    },

    {
        id: 5,
        category: "Mouse",
        brand: "Razer",
        name: "Razer Viper Mini",
        price: 990,
        spec: "Wired USB; Optical sensor; น้ำหนักเบา",
        use: "Gaming / FPS",
        stock: 4,
        image: "images/Mouse/Razer Viper Mini.jpg"
    },

    {
        id: 6,
        category: "Mouse",
        brand: "Razer",
        name: "Razer Basilisk V3",
        price: 1990,
        spec: "Wired USB; ปุ่มตั้งโปรแกรมได้; Razer Chroma RGB",
        use: "Gaming / ปรับแต่งปุ่ม",
        stock: 3,
        image: "images/Mouse/Razer Basilisk V3.jpg"
    },

    {
        id: 7,
        category: "Mouse",
        brand: "SteelSeries",
        name: "SteelSeries Rival 3",
        price: 1090,
        spec: "Wired USB; TrueMove Core; 8,500 CPI",
        use: "Gaming",
        stock: 4,
        image: "images/Mouse/SteelSeries Rival 3.jpg"
    },

    {
        id: 8,
        category: "Mouse",
        brand: "SteelSeries",
        name: "SteelSeries Aerox 3",
        price: 2490,
        spec: "Wireless 2.4GHz / Bluetooth ในรุ่น Wireless; น้ำหนักเบา",
        use: "Gaming",
        stock: 3,
        image: "images/Mouse/SteelSeries Aerox 3.jpg"
    },

    {
        id: 9,
        category: "Mouse",
        brand: "SteelSeries",
        name: "SteelSeries Prime",
        price: 1990,
        spec: "Wired USB; TrueMove Pro; ดีไซน์สำหรับจับถนัดมือ",
        use: "Gaming / Esports",
        stock: 4,
        image: "images/Mouse/SteelSeries Prime.jpg"
    },

    {
        id: 10,
        category: "Mouse",
        brand: "Corsair",
        name: "Corsair HARPOON RGB",
        price: 890,
        spec: "Wired USB; 6,000 DPI; RGB",
        use: "Gaming / เริ่มต้น",
        stock: 3,
        image: "images/Mouse/Corsair HARPOON RGB.jpg"
    },

    {
        id: 11,
        category: "Mouse",
        brand: "Corsair",
        name: "Corsair M65 RGB ELITE",
        price: 1890,
        spec: "Wired USB; 18,000 DPI; ปรับน้ำหนักได้",
        use: "Gaming / FPS",
        stock: 4,
        image: "images/Mouse/Corsair M65 RGB ELITE.jpg"
    },

    {
        id: 12,
        category: "Mouse",
        brand: "Corsair",
        name: "Corsair KATAR PRO Wireless",
        price: 1490,
        spec: "Wireless 2.4GHz; น้ำหนักเบา; 10,000 DPI",
        use: "Gaming / พกพา",
        stock: 3,
        image: "images/Mouse/Corsair KATAR PRO Wireless.jpg"
    },


    /* =================================================
       KEYBOARD
    ================================================= */

    {
        id: 13,
        category: "Keyboard",
        brand: "Keychron",
        name: "Keychron K2 V2",
        price: 2790,
        spec: "Bluetooth / USB-C; Mechanical; 84 keys",
        use: "พิมพ์งาน / Gaming",
        stock: 4,
        image: "images/Keyboard/Keychron K2 V2.jpg"
    },

    {
        id: 14,
        category: "Keyboard",
        brand: "Keychron",
        name: "Keychron K6",
        price: 2990,
        spec: "Bluetooth / USB-C; Mechanical; 65%",
        use: "โต๊ะทำงานพื้นที่จำกัด",
        stock: 3,
        image: "images/Keyboard/Keychron K6.jpg"
    },

    {
        id: 15,
        category: "Keyboard",
        brand: "Keychron",
        name: "Keychron K8",
        price: 3190,
        spec: "Bluetooth / USB-C; Mechanical; 87 keys",
        use: "พิมพ์งาน / Gaming",
        stock: 4,
        image: "images/Keyboard/Keychron K8.jpg"
    },

    {
        id: 16,
        category: "Keyboard",
        brand: "Logitech",
        name: "Logitech K380",
        price: 1190,
        spec: "Bluetooth; เชื่อมต่อหลายอุปกรณ์; Compact",
        use: "พิมพ์งาน / พกพา",
        stock: 3,
        image: "images/Keyboard/Logitech K380.jpg"
    },

    {
        id: 17,
        category: "Keyboard",
        brand: "Logitech",
        name: "Logitech G213",
        price: 1690,
        spec: "Wired USB; Gaming membrane; RGB",
        use: "Gaming / ใช้งานทั่วไป",
        stock: 4,
        image: "images/Keyboard/Logitech G213.jpg"
    },

    {
        id: 18,
        category: "Keyboard",
        brand: "Logitech",
        name: "Logitech G413 SE",
        price: 2490,
        spec: "Wired USB; Mechanical; Full-size",
        use: "พิมพ์งาน / Gaming",
        stock: 3,
        image: "images/Keyboard/Logitech G413 SE.jpg"
    },

    {
        id: 19,
        category: "Keyboard",
        brand: "Royal Kludge",
        name: "Royal Kludge RK84",
        price: 2190,
        spec: "Bluetooth / 2.4GHz / USB-C; Mechanical; 84 keys",
        use: "Gaming / ทำงาน",
        stock: 4,
        image: "images/Keyboard/Royal Kludge RK84.jpg"
    },

    {
        id: 20,
        category: "Keyboard",
        brand: "Royal Kludge",
        name: "Royal Kludge RK61",
        price: 1590,
        spec: "Bluetooth / USB-C; Mechanical; 61 keys",
        use: "โต๊ะพื้นที่จำกัด",
        stock: 3,
        image: "images/Keyboard/Royal Kludge RK61.jpg"
    },

    {
        id: 21,
        category: "Keyboard",
        brand: "Royal Kludge",
        name: "Royal Kludge RK87",
        price: 1990,
        spec: "Bluetooth / 2.4GHz / USB-C; Mechanical; 87 keys",
        use: "Gaming / ทำงาน",
        stock: 4,
        image: "images/Keyboard/Royal Kludge RK87.jpg"
    },

    {
        id: 22,
        category: "Keyboard",
        brand: "ASUS",
        name: "ASUS TUF Gaming K1",
        price: 1590,
        spec: "Wired USB; Membrane; Full-size; RGB",
        use: "Gaming / ใช้งานทั่วไป",
        stock: 3,
        image: "images/Keyboard/ASUS TUF Gaming K1.jpg"
    },

    {
        id: 23,
        category: "Keyboard",
        brand: "ASUS",
        name: "ASUS ROG Strix Scope RX",
        price: 3990,
        spec: "Wired USB; Optical Mechanical; Full-size",
        use: "Gaming",
        stock: 4,
        image: "images/Keyboard/ASUS ROG Strix Scope RX.jpg"
    },

    {
        id: 24,
        category: "Keyboard",
        brand: "ASUS",
        name: "ASUS ROG Falchion",
        price: 4490,
        spec: "Wireless / USB-C; Mechanical; 65%",
        use: "Gaming / พกพา",
        stock: 3,
        image: "images/Keyboard/ASUS ROG FalchionASUS ROG Falchion.jpg"
    },


    /* =================================================
       HEADSET
    ================================================= */

    {
        id: 25,
        category: "Headset",
        brand: "HyperX",
        name: "HyperX Cloud Stinger 2",
        price: 1690,
        spec: "Wired 3.5mm; Over-ear; ไมโครโฟน",
        use: "Gaming",
        stock: 4,
        image: "images/Headset/HyperX Cloud Stinger 2.jpg"
    },

    {
        id: 26,
        category: "Headset",
        brand: "HyperX",
        name: "HyperX Cloud II",
        price: 2990,
        spec: "Wired USB / 3.5mm; Virtual 7.1; Over-ear",
        use: "Gaming / สื่อสาร",
        stock: 3,
        image: "images/Headset/HyperX Cloud II.jpg"
    },

    {
        id: 27,
        category: "Headset",
        brand: "HyperX",
        name: "HyperX Cloud Alpha",
        price: 3290,
        spec: "Wired 3.5mm; Dual Chamber Drivers; Over-ear",
        use: "Gaming / ฟังเพลง",
        stock: 4,
        image: "images/Headset/HyperX Cloud Alpha.jpg"
    },

    {
        id: 28,
        category: "Headset",
        brand: "Logitech",
        name: "Logitech G435",
        price: 2490,
        spec: "Wireless LIGHTSPEED / Bluetooth; ไมค์ในตัว; 165 g",
        use: "Gaming / ฟังเพลง",
        stock: 3,
        image: "images/Headset/Logitech G435.jpg"
    },

    {
        id: 29,
        category: "Headset",
        brand: "Logitech",
        name: "Logitech G733 LIGHTSPEED",
        price: 4990,
        spec: "Wireless LIGHTSPEED; ไมโครโฟน; RGB",
        use: "Gaming / สตรีม",
        stock: 4,
        image: "images/Headset/Logitech G733 LIGHTSPEED.jpg"
    },

    {
        id: 30,
        category: "Headset",
        brand: "Logitech",
        name: "Logitech H390",
        price: 990,
        spec: "Wired USB; ไมโครโฟนตัดเสียงรบกวน",
        use: "ประชุมออนไลน์ / เรียน",
        stock: 3,
        image: "images/Headset/Logitech H390.jpg"
    },

    {
        id: 31,
        category: "Headset",
        brand: "Razer",
        name: "Razer BlackShark V2 X",
        price: 1490,
        spec: "Wired 3.5mm; Over-ear; ไมโครโฟน",
        use: "Gaming",
        stock: 4,
        image: "images/Headset/Razer BlackShark V2 X.jpg"
    },

    {
        id: 32,
        category: "Headset",
        brand: "Razer",
        name: "Razer Kraken X",
        price: 1690,
        spec: "Wired 3.5mm; Over-ear; น้ำหนักเบา",
        use: "Gaming",
        stock: 3,
        image: "images/Headset/Razer Kraken X.jpg"
    },

    {
        id: 33,
        category: "Headset",
        brand: "Razer",
        name: "Razer Barracuda X",
        price: 2990,
        spec: "Wireless 2.4GHz / Bluetooth ในบางรุ่น; ไมโครโฟนถอดได้",
        use: "Gaming / ใช้งานทั่วไป",
        stock: 4,
        image: "images/Headset/Razer Barracuda X.jpg"
    },

    {
        id: 34,
        category: "Headset",
        brand: "JBL",
        name: "JBL Quantum 100",
        price: 1090,
        spec: "Wired 3.5mm; Over-ear; ไมโครโฟนถอดได้",
        use: "Gaming / ประชุมออนไลน์",
        stock: 3,
        image: "images/Headset/JBL Quantum 100.jpg"
    },

    {
        id: 35,
        category: "Headset",
        brand: "JBL",
        name: "JBL Quantum 200",
        price: 1690,
        spec: "Wired 3.5mm; Over-ear; ไมโครโฟน Flip-up",
        use: "Gaming",
        stock: 4,
        image: "images/Headset/JBL Quantum 200.jpg"
    },

    {
        id: 36,
        category: "Headset",
        brand: "JBL",
        name: "JBL Tune 520BT",
        price: 1590,
        spec: "Bluetooth; On-ear; ไมโครโฟนในตัว",
        use: "ฟังเพลง / เรียนออนไลน์",
        stock: 3,
        image: "images/Headset/JBL Tune 520BT.jpg"
    },


    /* =================================================
       MONITOR
    ================================================= */

    {
        id: 37,
        category: "Monitor",
        brand: "AOC",
        name: "AOC 24G2SP",
        price: 4990,
        spec: "23.8\"; IPS; Full HD; 165Hz; HDMI / DisplayPort",
        use: "Gaming",
        stock: 4,
        image: "images/Monitor/AOC 24G2SP.jpg"
    },

    {
        id: 38,
        category: "Monitor",
        brand: "AOC",
        name: "AOC 24B2XH",
        price: 3290,
        spec: "23.8\"; IPS; Full HD; 75Hz; HDMI / VGA",
        use: "ทำงาน / เรียน",
        stock: 3,
        image: "images/Monitor/AOC 24B2XH.jpg"
    },

    {
        id: 39,
        category: "Monitor",
        brand: "AOC",
        name: "AOC 27G2SP",
        price: 5990,
        spec: "27\"; IPS; Full HD; 165Hz; HDMI / DisplayPort",
        use: "Gaming",
        stock: 4,
        image: "images/Monitor/AOC 27G2SP.jpg"
    },

    {
        id: 40,
        category: "Monitor",
        brand: "LG",
        name: "LG 24MP400",
        price: 3290,
        spec: "23.8\"; IPS; Full HD; 75Hz; HDMI",
        use: "ทำงาน / เรียน",
        stock: 3,
        image: "images/Monitor/LG 24MP400.jpg"
    },

    {
        id: 41,
        category: "Monitor",
        brand: "LG",
        name: "LG 27MP400",
        price: 3990,
        spec: "27\"; IPS; Full HD; 75Hz; HDMI",
        use: "ทำงาน / ดูสื่อ",
        stock: 4,
        image: "images/Monitor/LG 27MP400.jpg"
    },

    {
        id: 42,
        category: "Monitor",
        brand: "LG",
        name: "LG 24GN60R",
        price: 4990,
        spec: "23.8\"; IPS; Full HD; 144Hz; HDMI / DisplayPort",
        use: "Gaming",
        stock: 3,
        image: "images/Monitor/LG 24GN60R.jpg"
    },

    {
        id: 43,
        category: "Monitor",
        brand: "ASUS",
        name: "ASUS TUF VG27AQ",
        price: 8990,
        spec: "27\"; IPS; QHD; 165Hz; HDMI / DisplayPort",
        use: "Gaming",
        stock: 4,
        image: "images/Monitor/ASUS TUF VG27AQ.jpg"
    },

    {
        id: 44,
        category: "Monitor",
        brand: "ASUS",
        name: "ASUS VA24EHF",
        price: 3490,
        spec: "23.8\"; IPS; Full HD; 100Hz; HDMI",
        use: "ทำงาน / เรียน",
        stock: 3,
        image: "images/Monitor/ASUS VA24EHF.jpg"
    },

    {
        id: 45,
        category: "Monitor",
        brand: "ASUS",
        name: "ASUS TUF VG249Q1A",
        price: 5990,
        spec: "23.8\"; IPS; Full HD; 165Hz; HDMI / DisplayPort",
        use: "Gaming",
        stock: 4,
        image: "images/Monitor/ASUS TUF VG249Q1A.jpg"
    },

    {
        id: 46,
        category: "Monitor",
        brand: "Samsung",
        name: "Samsung Essential Monitor S3 24",
        price: 3690,
        spec: "24\"; Full HD; 100Hz; HDMI",
        use: "ทำงาน / เรียน",
        stock: 3,
        image: "images/Monitor/Samsung Essential Monitor S3 24.jpg"
    },

    {
        id: 47,
        category: "Monitor",
        brand: "Samsung",
        name: "Samsung Odyssey G3 24",
        price: 4990,
        spec: "24\"; Full HD; 144Hz; HDMI / DisplayPort",
        use: "Gaming",
        stock: 4,
        image: "images/Monitor/Samsung Odyssey G3 24.jpg"
    },

    {
        id: 48,
        category: "Monitor",
        brand: "Samsung",
        name: "Samsung Odyssey G5 27",
        price: 7990,
        spec: "27\"; QHD; 165Hz; HDMI / DisplayPort",
        use: "Gaming / งานภาพ",
        stock: 3,
        image: "images/Monitor/Samsung Odyssey G5 27.jpg"
    },


    /* =================================================
       ram
    ================================================= */

    {
        id: 49,
        category: "ram",
        brand: "Kingston",
        name: "Kingston FURY Beast DDR4 16GB",
        price: 1490,
        spec: "16GB (2x8GB); DDR4; 3200MT/s; DIMM",
        use: "อัปเกรดคอมตั้งโต๊ะ",
        stock: 4,
        image: "images/ram/Kingston FURY Beast DDR4 16GB.jpg"
    },

    {
        id: 50,
        category: "ram",
        brand: "Kingston",
        name: "Kingston FURY Beast DDR5 32GB",
        price: 3290,
        spec: "32GB (2x16GB); DDR5; 5600MT/s; DIMM",
        use: "คอมตั้งโต๊ะที่รองรับ DDR5",
        stock: 3,
        image: "images/ram/Kingston FURY Beast DDR5 32GB.jpg"
    },

    {
        id: 51,
        category: "ram",
        brand: "Kingston",
        name: "Kingston FURY Impact DDR4 16GB",
        price: 1690,
        spec: "16GB; DDR4; 3200MT/s; SO-DIMM",
        use: "อัปเกรดโน้ตบุ๊กที่รองรับ",
        stock: 4,
        image: "images/ram/Kingston FURY Impact DDR4 16GB.jpg"
    },

    {
        id: 52,
        category: "ram",
        brand: "Corsair",
        name: "Corsair Vengeance DDR5 32GB",
        price: 3490,
        spec: "32GB (2x16GB); DDR5; 5600MT/s; DIMM",
        use: "คอมรุ่นที่รองรับ DDR5",
        stock: 3,
        image: "images/ram/Corsair Vengeance DDR5 32GB.jpg"
    },

    {
        id: 53,
        category: "ram",
        brand: "Corsair",
        name: "Corsair Vengeance LPX DDR4 16GB",
        price: 1590,
        spec: "16GB (2x8GB); DDR4; 3200MT/s; DIMM",
        use: "คอมตั้งโต๊ะ",
        stock: 4,
        image: "images/ram/Corsair Vengeance LPX DDR4 16GB.jpg"
    },

    {
        id: 54,
        category: "ram",
        brand: "Corsair",
        name: "Corsair Vengeance RGB DDR5 32GB",
        price: 3990,
        spec: "32GB (2x16GB); DDR5; RGB; DIMM",
        use: "Gaming / คอมตั้งโต๊ะ",
        stock: 3,
        image: "images/ram/Corsair Vengeance RGB DDR5 32GB.jpg"
    },

    {
        id: 55,
        category: "ram",
        brand: "G.Skill",
        name: "G.Skill Ripjaws V DDR4 16GB",
        price: 1490,
        spec: "16GB (2x8GB); DDR4; 3200MT/s; DIMM",
        use: "คอมตั้งโต๊ะ",
        stock: 4,
        image: "images/ram/G.Skill Ripjaws V DDR4 16GB.jpg"
    },

    {
        id: 56,
        category: "ram",
        brand: "G.Skill",
        name: "G.Skill Trident Z5 DDR5 32GB",
        price: 4290,
        spec: "32GB (2x16GB); DDR5; DIMM",
        use: "Gaming / งานประมวลผล",
        stock: 3,
        image: "images/ram/G.Skill Trident Z5 DDR5 32GB.jpg"
    },

    {
        id: 57,
        category: "ram",
        brand: "G.Skill",
        name: "G.Skill Aegis DDR4 16GB",
        price: 1390,
        spec: "16GB (2x8GB); DDR4; DIMM",
        use: "อัปเกรดคอมทั่วไป",
        stock: 4,
        image: "images/ram/G.Skill Aegis DDR4 16GB.jpg"
    },

    {
        id: 58,
        category: "ram",
        brand: "Crucial",
        name: "Crucial Pro DDR4 16GB",
        price: 1390,
        spec: "16GB; DDR4; 3200MT/s; DIMM",
        use: "คอมตั้งโต๊ะ",
        stock: 3,
        image: "images/ram/Crucial Pro DDR4 16GB.jpg"
    },

    {
        id: 59,
        category: "ram",
        brand: "Crucial",
        name: "Crucial Pro DDR5 32GB",
        price: 2990,
        spec: "32GB; DDR5; 5600MT/s; DIMM",
        use: "คอมที่รองรับ DDR5",
        stock: 4,
        image: "images/ram/Crucial Pro DDR5 32GB.jpg"
    },

    {
        id: 60,
        category: "ram",
        brand: "Crucial",
        name: "Crucial Basics DDR4 8GB SO-DIMM",
        price: 790,
        spec: "8GB; DDR4; SO-DIMM",
        use: "อัปเกรดโน้ตบุ๊กที่รองรับ",
        stock: 3,
        image: "images/ram/Crucial Basics DDR4 8GB SO-DIMM.jpg"
    },


    /* =================================================
       SSD
    ================================================= */

    {
        id: 61,
        category: "SSD",
        brand: "Samsung",
        name: "Samsung 990 EVO 1TB",
        price: 3290,
        spec: "M.2 NVMe PCIe; 1TB; M.2 2280",
        use: "เพิ่มพื้นที่และความเร็วให้เครื่องที่รองรับ",
        stock: 4,
        image: "images/SSD/Samsung 990 EVO 1TB.jpg"
    },

    {
        id: 62,
        category: "SSD",
        brand: "Samsung",
        name: "Samsung 990 PRO 1TB",
        price: 3990,
        spec: "M.2 NVMe PCIe 4.0; 1TB; M.2 2280",
        use: "Gaming / งานประมวลผล",
        stock: 3,
        image: "images/SSD/Samsung 990 PRO 1TB.jpg"
    },

    {
        id: 63,
        category: "SSD",
        brand: "Samsung",
        name: "Samsung 870 EVO 1TB",
        price: 2990,
        spec: "SATA III; 1TB; 2.5\"",
        use: "อัปเกรดเครื่องที่ใช้ SATA",
        stock: 4,
        image: "images/SSD/Samsung 870 EVO 1TB.png"
    },

    {
        id: 64,
        category: "SSD",
        brand: "Western Digital",
        name: "Western Digital WD Blue SN580 1TB",
        price: 2490,
        spec: "M.2 NVMe PCIe; 1TB; M.2 2280",
        use: "ใช้งานทั่วไป / เล่นเกม",
        stock: 3,
        image: "images/SSD/Western Digital WD Blue SN580 1TB.jpg"
    },

    {
        id: 65,
        category: "SSD",
        brand: "Western Digital",
        name: "Western Digital WD_BLACK SN770 1TB",
        price: 2990,
        spec: "M.2 NVMe PCIe; 1TB; M.2 2280",
        use: "Gaming / งานหนัก",
        stock: 4,
        image: "images/SSD/Western Digital WD_BLACK SN770 1TB.jpg"
    },

    {
        id: 66,
        category: "SSD",
        brand: "Western Digital",
        name: "WD Blue SA510 1TB",
        price: 2690,
        spec: "SATA III; 1TB; 2.5\"",
        use: "อัปเกรดเครื่องที่ใช้ SATA",
        stock: 3,
        image: "images/SSD/Western Digital WD Blue SA510 1TB.jpg"
    },

    {
        id: 67,
        category: "SSD",
        brand: "Crucial",
        name: "Crucial BX500 1TB",
        price: 2190,
        spec: "SATA III; 1TB; 2.5\"",
        use: "อัปเกรดเครื่องที่ใช้ SATA",
        stock: 4,
        image: "images/SSD/Crucial BX500 1TB.jpg"
    },

    {
        id: 68,
        category: "SSD",
        brand: "Crucial",
        name: "Crucial P3 Plus 1TB",
        price: 2490,
        spec: "M.2 NVMe PCIe 4.0; 1TB; M.2 2280",
        use: "ใช้งานทั่วไป / Gaming",
        stock: 3,
        image: "images/SSD/Crucial P3 Plus 1TB.jpg"
    },

    {
        id: 69,
        category: "SSD",
        brand: "Crucial",
        name: "Crucial MX500 1TB",
        price: 2990,
        spec: "SATA III; 1TB; 2.5\"",
        use: "อัปเกรดคอมและโน้ตบุ๊กที่รองรับ",
        stock: 4,
        image: "images/SSD/Crucial MX500 1TB.jpg"
    },

    {
        id: 70,
        category: "SSD",
        brand: "Kingston",
        name: "Kingston NV2 1TB",
        price: 2290,
        spec: "M.2 NVMe PCIe; 1TB; M.2 2280",
        use: "ใช้งานทั่วไป",
        stock: 3,
        image: "images/SSD/Kingston NV2 1TB.png"
    },

    {
        id: 71,
        category: "SSD",
        brand: "Kingston",
        name: "Kingston KC3000 1TB",
        price: 3990,
        spec: "M.2 NVMe PCIe 4.0; 1TB; M.2 2280",
        use: "Gaming / งานสร้างสรรค์",
        stock: 4,
        image: "images/SSD/Kingston KC3000 1TB.png"
    },

    {
        id: 72,
        category: "SSD",
        brand: "Kingston",
        name: "Kingston A400 960GB",
        price: 1990,
        spec: "SATA III; 960GB; 2.5\"",
        use: "อัปเกรดเครื่องที่ใช้ SATA",
        stock: 3,
        image: "images/SSD/Kingston A400 960GB.png"
    },


    /* =================================================
       GPU
    ================================================= */

    {
        id: 73,
        category: "GPU",
        brand: "ASUS",
        name: "ASUS Dual GeForce RTX 4060 8GB",
        price: 11990,
        spec: "PCIe 4.0; 8GB GDDR6; Dual Fan",
        use: "Gaming Full HD / งานกราฟิก",
        stock: 4,
        image: "images/GPU/ASUS Dual GeForce RTX 4060 8GB.jpg"
    },

    {
        id: 74,
        category: "GPU",
        brand: "ASUS",
        name: "ASUS Dual GeForce RTX 4060 Ti 8GB",
        price: 15990,
        spec: "PCIe 4.0; 8GB GDDR6; Dual Fan",
        use: "Gaming / งานสร้างสรรค์",
        stock: 3,
        image: "images/GPU/ASUS Dual GeForce RTX 4060 Ti 8GB.jpg"
    },

    {
        id: 75,
        category: "GPU",
        brand: "ASUS",
        name: "ASUS TUF Gaming GeForce RTX 4070 12GB",
        price: 23990,
        spec: "PCIe 4.0; 12GB GDDR6X; Triple Fan",
        use: "Gaming / งานกราฟิก",
        stock: 4,
        image: "images/GPU/ASUS TUF Gaming GeForce RTX 4070 12GB.png"
    },

    {
        id: 76,
        category: "GPU",
        brand: "MSI",
        name: "MSI GeForce RTX 4060 Ti 8GB",
        price: 15990,
        spec: "PCIe 4.0; 8GB GDDR6; 2-slot",
        use: "Gaming / งานสร้างสรรค์",
        stock: 3,
        image: "images/GPU/MSI GeForce RTX 4060 Ti 8GB.jpg"
    },

    {
        id: 77,
        category: "GPU",
        brand: "MSI",
        name: "MSI GeForce RTX 4070 SUPER 12GB",
        price: 25990,
        spec: "PCIe 4.0; 12GB GDDR6X",
        use: "Gaming / งานกราฟิก",
        stock: 4,
        image: "images/GPU/MSI GeForce RTX 4070 SUPER 12GB.png"
    },

    {
        id: 78,
        category: "GPU",
        brand: "MSI",
        name: "MSI Ventus GeForce RTX 4060 8GB",
        price: 11990,
        spec: "PCIe 4.0; 8GB GDDR6; Dual Fan",
        use: "Gaming Full HD",
        stock: 3,
        image: "images/GPU/MSI Ventus GeForce RTX 4060 8GB.png"
    },

    {
        id: 79,
        category: "GPU",
        brand: "Gigabyte",
        name: "Gigabyte GeForce RTX 4060 WINDFORCE OC 8G",
        price: 11990,
        spec: "PCIe 4.0; 8GB GDDR6; Dual Fan",
        use: "Gaming Full HD",
        stock: 4,
        image: "images/GPU/Gigabyte GeForce RTX 4060 WINDFORCE OC 8G.jpg"
    },

    {
        id: 80,
        category: "GPU",
        brand: "Gigabyte",
        name: "Gigabyte GeForce RTX 4060 Ti EAGLE 8G",
        price: 15990,
        spec: "PCIe 4.0; 8GB GDDR6; Triple Fan",
        use: "Gaming / งานสร้างสรรค์",
        stock: 3,
        image: "images/GPU/Gigabyte GeForce RTX 4060 Ti EAGLE 8G.jpg"
    },

    {
        id: 81,
        category: "GPU",
        brand: "Gigabyte",
        name: "Gigabyte GeForce RTX 4070 SUPER WINDFORCE OC 12G",
        price: 25990,
        spec: "PCIe 4.0; 12GB GDDR6X; Triple Fan",
        use: "Gaming / งานกราฟิก",
        stock: 4,
        image: "images/GPU/Gigabyte GeForce RTX 4070 SUPER WINDFORCE OC 12G.png"
    },

    {
        id: 82,
        category: "GPU",
        brand: "Sapphire",
        name: "Sapphire Pulse Radeon RX 7600 8GB",
        price: 9990,
        spec: "PCIe 4.0; 8GB GDDR6; Dual Fan",
        use: "Gaming Full HD",
        stock: 3,
        image: "images/GPU/Sapphire Pulse Radeon RX 7600 8GB.png"
    },

    {
        id: 83,
        category: "GPU",
        brand: "Sapphire",
        name: "Sapphire Pulse Radeon RX 7700 XT 12GB",
        price: 16990,
        spec: "PCIe 4.0; 12GB GDDR6; Dual Fan",
        use: "Gaming 1440p",
        stock: 4,
        image: "images/GPU/Sapphire Pulse Radeon RX 7700 XT 12GB.jpg"
    },

    {
        id: 84,
        category: "GPU",
        brand: "Sapphire",
        name: "Sapphire Nitro+ Radeon RX 7800 XT 16GB",
        price: 20990,
        spec: "PCIe 4.0; 16GB GDDR6; Triple Fan",
        use: "Gaming 1440p / งานกราฟิก",
        stock: 3,
        image: "images/GPU/Sapphire Nitro+ Radeon RX 7800 XT 16GB.jpg"
    },


    /* =================================================
       MICROPHONE
    ================================================= */

    {
        id: 85,
        category: "Microphone",
        brand: "FIFINE",
        name: "FIFINE K669B",
        price: 990,
        spec: "USB; Condenser; ตั้งโต๊ะ",
        use: "ประชุมออนไลน์ / สตรีมเริ่มต้น",
        stock: 4,
        image: "images/Microphone/FIFINE K669B.jpg"
    },

    {
        id: 86,
        category: "Microphone",
        brand: "FIFINE",
        name: "FIFINE AM8",
        price: 1990,
        spec: "USB / XLR; Dynamic; ตั้งโต๊ะ",
        use: "สตรีม / บันทึกเสียง",
        stock: 3,
        image: "images/Microphone/FIFINE AM8.png"
    },

    {
        id: 87,
        category: "Microphone",
        brand: "FIFINE",
        name: "FIFINE A6V",
        price: 1590,
        spec: "USB; Condenser; RGB",
        use: "Gaming / สตรีม",
        stock: 4,
        image: "images/Microphone/FIFINE A6V.jpg"
    },

    {
        id: 88,
        category: "Microphone",
        brand: "HyperX",
        name: "HyperX SoloCast",
        price: 1990,
        spec: "USB-C; Condenser; Tap-to-Mute",
        use: "สตรีม / บันทึกเสียง",
        stock: 3,
        image: "images/Microphone/HyperX SoloCast.png"
    },

    {
        id: 89,
        category: "Microphone",
        brand: "HyperX",
        name: "HyperX QuadCast S",
        price: 4990,
        spec: "USB; Condenser; RGB; ปรับรูปแบบรับเสียงได้",
        use: "สตรีม / พอดแคสต์",
        stock: 4,
        image: "images/Microphone/HyperX QuadCast S.jpg"
    },

    {
        id: 90,
        category: "Microphone",
        brand: "HyperX",
        name: "HyperX Duocast",
        price: 3490,
        spec: "USB; Dual Polar Patterns; RGB",
        use: "สตรีม / ประชุม",
        stock: 3,
        image: "images/Microphone/HyperX Duocast.png"
    },

    {
        id: 91,
        category: "Microphone",
        brand: "Razer",
        name: "Razer Seiren Mini",
        price: 1490,
        spec: "USB; Condenser; ขนาดกะทัดรัด",
        use: "ประชุม / สตรีม",
        stock: 4,
        image: "images/Microphone/Razer Seiren Mini.png"
    },

    {
        id: 92,
        category: "Microphone",
        brand: "Razer",
        name: "Razer Seiren V3 Mini",
        price: 1690,
        spec: "USB; Condenser; Tap-to-Mute",
        use: "ประชุม / สตรีม",
        stock: 3,
        image: "images/Microphone/Razer Seiren V3 Mini.jpg"
    },

    {
        id: 93,
        category: "Microphone",
        brand: "Razer",
        name: "Razer Seiren V2 X",
        price: 2990,
        spec: "USB; Condenser; Supercardioid",
        use: "สตรีม / บันทึกเสียง",
        stock: 4,
        image: "images/Microphone/Razer Seiren V2 X.png"
    },

    {
        id: 94,
        category: "Microphone",
        brand: "Maono",
        name: "Maono AU-A04",
        price: 1290,
        spec: "USB; Condenser; ชุดไมโครโฟนตั้งโต๊ะ",
        use: "ประชุม / บันทึกเสียง",
        stock: 3,
        image: "images/Microphone/Maono AU-A04.jpg"
    },

    {
        id: 95,
        category: "Microphone",
        brand: "Maono",
        name: "Maono DM30",
        price: 1990,
        spec: "USB; Condenser; RGB",
        use: "Gaming / สตรีม",
        stock: 4,
        image: "images/Microphone/Maono DM30.jpg"
    },

    {
        id: 96,
        category: "Microphone",
        brand: "Maono",
        name: "Maono PD200X",
        price: 2490,
        spec: "USB / XLR; Dynamic",
        use: "สตรีม / พอดแคสต์",
        stock: 3,
        image: "images/Microphone/Maono PD200X.jpg"
    },


    /* =================================================
       WEBCAM
    ================================================= */

    {
        id: 97,
        category: "Webcam",
        brand: "Logitech",
        name: "Logitech C920 HD Pro",
        price: 2490,
        spec: "USB-A; 1080p 30fps; ไมโครโฟนคู่",
        use: "ประชุมออนไลน์ / สอนออนไลน์",
        stock: 4,
        image: "images/Webcam/Logitech C920 HD Pro.png"
    },

    {
        id: 98,
        category: "Webcam",
        brand: "Logitech",
        name: "Logitech Brio 500",
        price: 4190,
        spec: "USB-C; 1080p 30fps; ไมโครโฟนคู่",
        use: "ประชุม / สตรีม",
        stock: 3,
        image: "images/Webcam/Logitech Brio 500.png"
    },

    {
        id: 99,
        category: "Webcam",
        brand: "Logitech",
        name: "Logitech C270 HD",
        price: 890,
        spec: "USB-A; 720p 30fps; ไมโครโฟนในตัว",
        use: "เรียนออนไลน์ / ประชุม",
        stock: 4,
        image: "images/Webcam/Logitech C270 HD.jpg"
    },

    {
        id: 100,
        category: "Webcam",
        brand: "Anker",
        name: "Anker PowerConf C200",
        price: 2990,
        spec: "USB-C; 2K 30fps; ไมโครโฟนคู่",
        use: "ประชุมออนไลน์",
        stock: 3,
        image: "images/Webcam/Anker PowerConf C200.jpg"
    },

    {
        id: 101,
        category: "Webcam",
        brand: "Anker",
        name: "Anker PowerConf C300",
        price: 3990,
        spec: "USB-C; 1080p 60fps; AI Framing",
        use: "ประชุม / ทำงาน",
        stock: 4,
        image: "images/Webcam/Anker PowerConf C300.jpg"
    },

    {
        id: 102,
        category: "Webcam",
        brand: "Anker",
        name: "Anker PowerConf C310",
        price: 2490,
        spec: "USB; 2K; ไมโครโฟนคู่",
        use: "ประชุมออนไลน์",
        stock: 3,
        image: "images/Webcam/Anker PowerConf C310.jpg"
    },

    {
        id: 103,
        category: "Webcam",
        brand: "Razer",
        name: "Razer Kiyo",
        price: 2990,
        spec: "USB; 1080p 30fps / 720p 60fps; ไฟวงแหวน",
        use: "สตรีม / ประชุม",
        stock: 4,
        image: "images/Webcam/Razer Kiyo.jpg"
    },

    {
        id: 104,
        category: "Webcam",
        brand: "Razer",
        name: "Razer Kiyo X",
        price: 1990,
        spec: "USB; 1080p 30fps; Autofocus",
        use: "สตรีมเริ่มต้น",
        stock: 3,
        image: "images/Webcam/Razer Kiyo X.jpg"
    },

    {
        id: 105,
        category: "Webcam",
        brand: "Razer",
        name: "Razer Kiyo Pro",
        price: 5990,
        spec: "USB; 1080p 60fps; Adaptive Light Sensor",
        use: "สตรีม / สร้างคอนเทนต์",
        stock: 4,
        image: "images/Webcam/Razer Kiyo Pro.jpg"
    },

    {
        id: 106,
        category: "Webcam",
        brand: "AVerMedia",
        name: "AVerMedia PW315",
        price: 2990,
        spec: "USB; 1080p 60fps; ไมโครโฟนคู่",
        use: "ประชุม / สตรีม",
        stock: 3,
        image: "images/Webcam/AVerMedia PW315.jpg"
    },

    {
        id: 107,
        category: "Webcam",
        brand: "AVerMedia",
        name: "AVerMedia Live Streamer CAM 513",
        price: 5990,
        spec: "USB; 4K; มุมมองกว้าง",
        use: "สตรีม / สร้างคอนเทนต์",
        stock: 4,
        image: "images/Webcam/AVerMedia Live Streamer CAM 513.png"
    },

    {
        id: 108,
        category: "Webcam",
        brand: "AVerMedia",
        name: "AVerMedia PW315B",
        price: 3290,
        spec: "USB; 1080p 60fps; ไมโครโฟนคู่",
        use: "ประชุมออนไลน์",
        stock: 3,
        image: "images/Webcam/AVerMedia PW315B.jpg"
    }

];


/* =====================================================
   CART
===================================================== */

let cart = [];


/* =====================================================
   CATEGORIES
===================================================== */

const categories = [
    "ทั้งหมด",
    "Mouse",
    "Keyboard",
    "Headset",
    "Monitor",
    "ram",
    "SSD",
    "GPU",
    "Microphone",
    "Webcam"
];


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    createCategoryButtons();

    displayProducts(products);

    updateCartCount();

});


/* =====================================================
   CATEGORY BUTTONS
===================================================== */

function createCategoryButtons() {

    const container =
        document.getElementById("category-buttons");

    container.innerHTML = "";

    categories.forEach((category, index) => {

        const button =
            document.createElement("button");

        button.className =
            "category-button";

        if (index === 0) {

            button.classList.add("active");

        }

        button.textContent = category;


        button.onclick = function () {

            document
                .querySelectorAll(".category-button")
                .forEach(btn => {

                    btn.classList.remove("active");

                });


            button.classList.add("active");


            if (category === "ทั้งหมด") {

                displayProducts(products);

            } else {

                const filtered = products.filter(product =>
    product.category.trim().toLowerCase() ===
    category.trim().toLowerCase()
);

                displayProducts(filtered);

            }

        };


        container.appendChild(button);

    });

}


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(productList) {

    const grid =
        document.getElementById("product-grid");

    grid.innerHTML = "";


    if (productList.length === 0) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:50px;
                color:#9ca3af;
            ">
                ไม่พบสินค้าที่ค้นหา
            </div>
        `;

        return;

    }


    productList.forEach(product => {

        const card =
            document.createElement("div");

        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image">

                ${
                    product.image
                    ?
                    `<img src="${product.image}"
                          alt="${product.name}">`
                    :
                    `<div class="image-placeholder">
                        ใส่รูปสินค้า
                    </div>`
                }

            </div>


            <div class="product-info">

                <div class="product-brand">
                    ${product.brand}
                </div>


                <div class="product-name">
                    ${product.name}
                </div>


                <div class="product-spec">
                    ${product.spec}
                </div>


                <div class="product-use">
                    เหมาะสำหรับ: ${product.use}
                </div>


                <div class="product-price">
                    ฿${product.price.toLocaleString()}
                </div>


                <div class="product-stock">
                    เหลือ ${product.stock} ชิ้น
                </div>


                <button
                    class="add-cart-button"
                    onclick="addToCart(${product.id})"
                    ${product.stock <= 0 ? "disabled" : ""}
                >
                    🛒 เพิ่มลงตะกร้า
                </button>

            </div>

        `;


        grid.appendChild(card);

    });

}


/* =====================================================
   SEARCH
===================================================== */

function searchProducts() {

    const keyword =
        document
            .getElementById("search-input")
            .value
            .toLowerCase();


    const result =
        products.filter(product => {

            return (

                product.name
                    .toLowerCase()
                    .includes(keyword)

                ||

                product.brand
                    .toLowerCase()
                    .includes(keyword)

                ||

                product.category
                    .toLowerCase()
                    .includes(keyword)

            );

        });


    displayProducts(result);

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(productId) {

    const product =
        products.find(
            product =>
                product.id === productId
        );


    if (!product) {
        return;
    }


    const existing =
        cart.find(
            item =>
                item.id === productId
        );


    if (existing) {

        if (existing.quantity < product.stock) {

            existing.quantity++;

        } else {

            alert(
                "สินค้าในสต็อกมีไม่เพียงพอ"
            );

            return;

        }

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    updateCartCount();

}


/* =====================================================
   UPDATE CART COUNT
===================================================== */

function updateCartCount() {

    const count =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    const cartCount =
        document.getElementById("cart-count");


    if (cartCount) {

        cartCount.textContent =
            count;

    }

}


/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

    renderCart();

    document
        .getElementById("cart-modal")
        .classList.add("active");

}


/* =====================================================
   CLOSE CART
===================================================== */

function closeCart() {

    document
        .getElementById("cart-modal")
        .classList.remove("active");

}


/* =====================================================
   RENDER CART
===================================================== */

function renderCart() {

    const container =
        document.getElementById("cart-items");

    container.innerHTML = "";


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                🛒

                <br><br>

                ยังไม่มีสินค้าในตะกร้า

            </div>

        `;


        document.getElementById("cart-total")
            .textContent = "฿0";


        return;

    }


    let total = 0;


    cart.forEach(item => {

        total +=
            item.price *
            item.quantity;


        const div =
            document.createElement("div");

        div.className =
            "cart-item";


        div.innerHTML = `

            <div class="cart-item-image">

                ${
                    item.image
                    ?
                    `<img src="${item.image}"
                          alt="${item.name}">`
                    :
                    ``
                }

            </div>


            <div class="cart-item-info">

                <div class="cart-item-name">
                    ${item.name}
                </div>

                <div class="cart-item-price">
                    ฿${item.price.toLocaleString()}
                </div>

            </div>


            <div class="quantity-control">

                <button
                    onclick="decreaseQuantity(${item.id})">
                    −
                </button>


                <span>
                    ${item.quantity}
                </span>


                <button
                    onclick="increaseQuantity(${item.id})">
                    +
                </button>

            </div>


            <button
                class="remove-button"
                onclick="removeFromCart(${item.id})">
                🗑
            </button>

        `;

        container.appendChild(div);

    });


    document.getElementById("cart-total")
        .textContent =
        `฿${total.toLocaleString()}`;

}


/* =====================================================
   INCREASE QUANTITY
===================================================== */

function increaseQuantity(productId) {

    const item =
        cart.find(
            item =>
                item.id === productId
        );


    if (!item) {
        return;
    }


    if (item.quantity < item.stock) {

        item.quantity++;

    } else {

        alert(
            "สินค้าในสต็อกมีไม่เพียงพอ"
        );

        return;

    }


    updateCartCount();

    renderCart();

}


/* =====================================================
   DECREASE QUANTITY
===================================================== */

function decreaseQuantity(productId) {

    const item =
        cart.find(
            item =>
                item.id === productId
        );


    if (!item) {
        return;
    }


    item.quantity--;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item =>
                    item.id !== productId
            );

    }


    updateCartCount();

    renderCart();

}


/* =====================================================
   REMOVE PRODUCT
===================================================== */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.id !== productId
        );


    updateCartCount();

    renderCart();

}


/* =====================================================
   CHECKOUT
===================================================== */

function checkout() {

    if (cart.length === 0) {

        alert(
            "ยังไม่มีสินค้าในตะกร้า"
        );

        return;

    }


    alert(
        "ตัวอย่างระบบสั่งซื้อ\n\n" +
        "สามารถเชื่อมต่อระบบชำระเงินได้ภายหลัง"
    );

}


/* =====================================================
   SCROLL TO PRODUCTS
===================================================== */

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}
