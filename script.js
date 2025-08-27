// --- DATA ---
const cityStripeLinks = {
     "Houston": [
    "https://square.link/u/2By0tWs5", "https://square.link/u/2WQRg7Px", "https://square.link/u/XNsop8jV", "https://square.link/u/ZLeGO0DS",  "https://square.link/u/MXc0BDGu", "https://square.link/u/vyfOIzOh", "https://square.link/u/4eTrELJq", "https://square.link/u/3VQysuov",
    "https://square.link/u/2By0tWs5", "https://square.link/u/2WQRg7Px", "https://square.link/u/XNsop8jV",  "https://square.link/u/ZLeGO0DS", "https://square.link/u/MXc0BDGu", "https://square.link/u/vyfOIzOh", "https://square.link/u/4eTrELJq", "https://square.link/u/3VQysuov"
],

    "San Antonio": [
    "https://square.link/u/kHQ0GZpc", "https://square.link/u/nSCYiwYy", "https://square.link/u/2B7fyIsl",  "https://square.link/u/Xe331gLh",  "https://square.link/u/O88ONlz3", "https://square.link/u/0kOAxApR", "https://square.link/u/1cYXWPD4", "https://square.link/u/yiCbdFIT",
    "https://square.link/u/kHQ0GZpc", "https://square.link/u/nSCYiwYy", "https://square.link/u/2B7fyIsl",  "https://square.link/u/Xe331gLh",  "https://square.link/u/O88ONlz3", "https://square.link/u/0kOAxApR", "https://square.link/u/1cYXWPD4", "https://square.link/u/yiCbdFIT"
],
    
"Orlando": [
    "https://square.link/u/HWDbfX6H", "https://square.link/u/gBY8l0uH", "https://square.link/u/Abfy6LpD", "https://square.link/u/Abfy6LpD", "https://buy.stripe.com/eVq5kDdVG0Q8gENfUj0oN06", "https://buy.stripe.com/4gM3cv9FqfL24W5eQf0oN05", "https://buy.stripe.com/8x214n5pacyQgENgYn0oN04",
    "https://square.link/u/HWDbfX6H", "https://square.link/u/USOnSGmt", "https://square.link/u/gBY8l0uH", "https://square.link/u/Abfy6LpD",  "https://buy.stripe.com/9B6aEX3h22Yg88h7nN0oM44", "https://buy.stripe.com/fZu8wP8BmeGY88h8rR0oM45", "https://buy.stripe.com/7sY6oH9Fq2Yg1JTdMb0oM46", "https://buy.stripe.com/dRmeVdaJu2Yg6098rR0oM47"
],
"Tampa": [
    "https://square.link/u/HWDbfX6H", "https://square.link/u/l6Lnv1zn", "https://square.link/u/EGintChv", "https://square.link/u/SlxG6YJy",  "https://buy.stripe.com/4gMaEX3h256ocox0Zp0oN0b", "https://buy.stripe.com/6oU6oHbNy42kbktazZ0oN0a", "https://buy.stripe.com/eVq3cv9Fq0Q89clfUj0oN09", "https://buy.stripe.com/3cI4gzg3O7ewgENgYn0oN08",
    "https://square.link/u/HWDbfX6H", "https://square.link/u/l6Lnv1zn", "https://square.link/u/EGintChv", "https://square.link/u/SlxG6YJy",  "https://buy.stripe.com/3cI00jdVG9mEgEN9vV0oN0j", "https://buy.stripe.com/28EdR9aJueGYagpcI70oN0i", "https://buy.stripe.com/7sY6oHdVG1UcdsB37x0oN0h", "https://buy.stripe.com/8x23cvcRC0Q8fAJgYn0oN0g"
],
"Jacksonville": [
    "https://square.link/u/nLnc4X2z", "https://square.link/u/VCkWFu20", "https://square.link/u/uytXfaTD", "https://square.link/u/LHJQjFOJ",  "https://buy.stripe.com/14A6oH04Q8iA0FPcI70oN0s", "https://buy.stripe.com/fZubJ18Bm6asewF37x0oN0t", "https://buy.stripe.com/14A14n7xifL24W57nN0oN0u", "https://buy.stripe.com/bJebJ15pa7ewewF7nN0oN0v",
    "https://square.link/u/nLnc4X2z", "https://square.link/u/VCkWFu20", "https://square.link/u/uytXfaTD", "https://square.link/u/LHJQjFOJ",  "https://buy.stripe.com/aFabJ1g3O7ewagp37x0oN0z", "https://buy.stripe.com/aFabJ15pabuMcoxazZ0oN0A", "https://buy.stripe.com/eVq14n4l67ew609bE30oN0B", "https://buy.stripe.com/bJe8wP04Q8iAfAJ9vV0oN0C"
],
"Lexington-Fayette": [
    "https://square.link/u/IC0arZiC", "https://square.link/u/VWX6dBWj", "https://square.link/u/e714j6TZ", "https://square.link/u/8cDFOBBL", "https://square.link/u/RWGBzsX5", "https://buy.stripe.com/28E6oHcRCcyQ0FPeQf0oN0J", "https://buy.stripe.com/aFa3cveZK2Yg0FPdMb0oN0H", "https://buy.stripe.com/6oU00j4l656o88hdMb0oN0F",
    "https://square.link/u/IC0arZiC", "https://square.link/u/VWX6dBWj", "https://square.link/u/e714j6TZ", "https://square.link/u/8cDFOBBL", "https://square.link/u/RWGBzsX5", "https://buy.stripe.com/6oUcN5cRCeGYfAJ0Zp0oN0I", "https://buy.stripe.com/aFa4gz8Bm7ewcox0Zp0oN0G", "https://buy.stripe.com/5kQ7sL3h28iA4W537x0oN0E"
],
"Minneapolis": [
    "https://square.link/u/szMnpCDr", "https://square.link/u/1SqJPEBW", "https://square.link/u/kQYPpNKO", "https://square.link/u/d1BD8YW0", "https://square.link/u/4Hns5VBh", "https://buy.stripe.com/4gMcN56te2YgewFdMb0oN0Z", "https://buy.stripe.com/dRmeVdcRC42k4W59vV0oN0X", "https://buy.stripe.com/3cIeVddVGcyQ1JT8rR0oN0V",
    "https://square.link/u/szMnpCDr", "https://square.link/u/1SqJPEBW", "https://square.link/u/kQYPpNKO", "https://square.link/u/d1BD8YW0", "https://square.link/u/4Hns5VBh", "https://buy.stripe.com/aFa7sL3h21UcdsBbE30oN0Y", "https://buy.stripe.com/dRm8wP7xi2Yg3S1bE30oN0W", "https://buy.stripe.com/9B600jaJu42kewFazZ0oN0U"
],
"Indianapolis": [
    "https://square.link/u/3rY4vvCb", "https://square.link/u/Zeaz9JoJ", "https://square.link/u/yRFaBaFC", "https://square.link/u/PkBD0wj0", "https://square.link/u/rytc56xK", "https://buy.stripe.com/dRm5kD6te0Q82NXfUj0oN3N", "https://buy.stripe.com/28E6oHbNygP6fAJdMb0oN3O", "https://buy.stripe.com/4gM5kD2cYcyQ0FP8rR0oN3P",
    "https://square.link/u/3rY4vvCb", "https://square.link/u/Zeaz9JoJ", "https://square.link/u/yRFaBaFC", "https://square.link/u/PkBD0wj0", "https://square.link/u/rytc56xK", "https://buy.stripe.com/3cI28r4l656o6095fF0oN3S", "https://buy.stripe.com/28E00j6te2YgfAJdMb0oN3R", "https://buy.stripe.com/00w8wP5pa8iA0FPfUj0oN3Q"
],
"Detroit": [
    "https://square.link/u/AGUoS27H", "https://square.link/u/zK0hH2Ki", "https://square.link/u/EBByxboJ", "https://square.link/u/BBSRi1Me", "https://square.link/u/yVPZGZOt", "https://buy.stripe.com/dRmeVd18UbuMewF0Zp0oO2U", "https://buy.stripe.com/9B614n2cY42k3S1cI70oO2V", "https://buy.stripe.com/cNi5kDcRC7ew9clcI70oO2W",
    "https://square.link/u/AGUoS27H", "https://square.link/u/zK0hH2Ki", "https://square.link/u/EBByxboJ", "https://square.link/u/BBSRi1Me", "https://square.link/u/yVPZGZOt", "https://buy.stripe.com/28E00jbNyaqI609eQf0oO2Z", "https://buy.stripe.com/5kQ3cvcRCgP69cl37x0oO2Y", "https://buy.stripe.com/fZucN56te2Yg74d9vV0oO2X"
],
"Warren": [
    "https://square.link/u/9uLtXCWS", "https://square.link/u/VdneblGu", "https://square.link/u/xOhJweJa", "https://square.link/u/wjVe7bgT", "https://square.link/u/pQexYBTR", "https://buy.stripe.com/4gMfZhcRCbuM88h23t0oP0m", "https://buy.stripe.com/5kQeVd5pa1Uc3S14bB0oP0n", "https://buy.stripe.com/dRmcN5dVGeGYewF37x0oP0o",
    "https://square.link/u/9uLtXCWS", "https://square.link/u/VdneblGu", "https://square.link/u/xOhJweJa", "https://square.link/u/wjVe7bgT", "https://square.link/u/pQexYBTR", "https://buy.stripe.com/fZu28reZK6ascoxbE30oP0u", "https://buy.stripe.com/00wdR94l66asewF6jJ0oP0w", "https://buy.stripe.com/4gM8wP04Q56o1JTcI70oP0v"
],
"Omaha": [
    "https://square.link/u/eezClRtF", "https://square.link/u/TUExenJn", "https://square.link/u/kmmsvikl", "https://square.link/u/B7FejaWe", "https://square.link/u/am4kr866", "https://buy.stripe.com/dRmbJ1eZKdCU9cl23t0oO45", "https://buy.stripe.com/9B66oHdVG9mE6090Zp0oO44", "https://buy.stripe.com/9B6fZh5pa7ewbktgYn0oO43",
    "https://square.link/u/eezClRtF", "https://square.link/u/TUExenJn", "https://square.link/u/kmmsvikl", "https://square.link/u/B7FejaWe", "https://square.link/u/am4kr866", "https://buy.stripe.com/28E8wP8BmbuMewF5fF0oO40", "https://buy.stripe.com/cNi6oH5paaqIcoxazZ0oO41", "https://buy.stripe.com/3cI3cv3h2fL274d4bB0oO42"
],
"Kansas City": [
    "https://square.link/u/NSnDEpjo", "https://square.link/u/TAlKaQUX", "https://square.link/u/I0pFfNgc", "https://square.link/u/A9xSrDzV", "https://square.link/u/HEcZzgqi", "https://buy.stripe.com/bJe5kDaJu42kdsBeQf0oN2N", "https://buy.stripe.com/00w3cv04QdCU9cl8rR0oN2K", "https://buy.stripe.com/14A9AT8Bm7ew2NXgYn0oN2M",
    "https://square.link/u/NSnDEpjo", "https://square.link/u/TAlKaQUX", "https://square.link/u/I0pFfNgc", "https://square.link/u/A9xSrDzV", "https://square.link/u/HEcZzgqi", "https://buy.stripe.com/3cIfZh18U1Ucbkt23t0oN2R", "https://buy.stripe.com/9B64gzcRC9mEcox37x0oN2Q", "https://buy.stripe.com/cNieVdcRCbuMbktgYn0oN2P"
],
"Milwaukee": [
    "https://square.link/u/Kp84kLNN", "https://square.link/u/ziLTBXqO", "https://square.link/u/ur4xDExc", "https://square.link/u/5JpBsc5p", "https://square.link/u/GSL7tXLv", "https://buy.stripe.com/8x2bJ104QcyQ4W523t0oN2m", "https://buy.stripe.com/9B614n18UaqI1JT23t0oN2l", "https://buy.stripe.com/dRm6oHeZK42kgEN9vV0oN2k",
    "https://square.link/u/Kp84kLNN", "https://square.link/u/ziLTBXqO", "https://square.link/u/ur4xDExc", "https://square.link/u/5JpBsc5p", "https://square.link/u/GSL7tXLv", "https://buy.stripe.com/4gMeVdbNygP69clfUj0oN2e", "https://buy.stripe.com/bJecN504Q9mE9cldMb0oN2d", "https://buy.stripe.com/6oU3cv4l66as0FP8rR0oN2c"
],
"Portland": [
    "https://square.link/u/vpITi3K7", "https://square.link/u/3auYJnEu", "https://square.link/u/hRAtXxlA", "https://square.link/u/dfDbtcyp", "https://square.link/u/FaNbfIh6", "https://buy.stripe.com/fZubJ1g3O2Yg609dMb0oN3z", "https://buy.stripe.com/4gM9AT3h256o6090Zp0oN3x", "https://buy.stripe.com/8x2eVddVGgP6dsBgYn0oN3u",
    "https://square.link/u/vpITi3K7", "https://square.link/u/3auYJnEu", "https://square.link/u/hRAtXxlA", "https://square.link/u/dfDbtcyp", "https://square.link/u/FaNbfIh6", "https://buy.stripe.com/eVq28r9Fq56ocox23t0oN3y", "https://buy.stripe.com/3cI14n18UdCU4W59vV0oN3w", "https://buy.stripe.com/5kQdR904QbuMcox7nN0oN3v"
],
"Seattle": [
    "https://square.link/u/NnbefvrW", "https://square.link/u/urGDFINy", "https://square.link/u/qBaHTy8X", "https://square.link/u/kkjycd9B", "https://square.link/u/aQmDHDwN", "https://buy.stripe.com/eVqaEXeZKcyQfAJcI70oO0b", "https://buy.stripe.com/4gMeVd3h20Q84W5bE30oO0c", "https://buy.stripe.com/cNifZh5pacyQfAJ4bB0oO0d",
    "https://square.link/u/NnbefvrW", "https://square.link/u/urGDFINy", "https://square.link/u/qBaHTy8X", "https://square.link/u/kkjycd9B", "https://square.link/u/aQmDHDwN", "https://buy.stripe.com/3cIfZhbNy9mE88h4bB0oO0j", "https://buy.stripe.com/8x214nbNy56o4W56jJ0oO0k", "https://buy.stripe.com/28E9ATaJu0Q8ewFcI70oO0l"
],
"El Paso": [
    "https://square.link/u/I2C7WdBR", "https://square.link/u/5ZGPmN82", "https://square.link/u/KPAFuchm", "https://square.link/u/epPmScrE", "https://square.link/u/qA9O5rMw", "https://buy.stripe.com/4gM28reZK56o4W50Zp0oP12", "https://buy.stripe.com/14A28r6tebuM9clazZ0oP13", "https://buy.stripe.com/aFa6oH3h2fL20FPgYn0oP14",
    "https://square.link/u/I2C7WdBR", "https://square.link/u/5ZGPmN82", "https://square.link/u/KPAFuchm", "https://square.link/u/epPmScrE", "https://square.link/u/qA9O5rMw", "https://buy.stripe.com/4gMcN5eZK56ocoxeQf0oP0T", "https://buy.stripe.com/cNiaEXcRC2Yg3S18rR0oP0U", "https://buy.stripe.com/7sY8wP3h21UccoxeQf0oP0R"
],
   "San Antonio": [
    "https://square.link/u/s8GrXiMw", "https://square.link/u/vPasADYO", "https://square.link/u/zL3D9tSN", "https://square.link/u/cEdZIqS6", "https://square.link/u/g5E6OIE5", "https://buy.stripe.com/dRm00j18U6as60923t0oM0m", "https://buy.stripe.com/14AfZhdVG42k1JT5fF0oM0n", "https://buy.stripe.com/7sYdR9g3OfL2dsB5fF0oM0o",
    "https://square.link/u/s8GrXiMw", "https://square.link/u/vPasADYO", "https://square.link/u/zL3D9tSN", "https://square.link/u/cEdZIqS6", "https://square.link/u/g5E6OIE5", "https://buy.stripe.com/00wbJ12cYbuMagp5fF0oM0u", "https://buy.stripe.com/00waEX3h2aqI74d8rR0oM0v", "https://buy.stripe.com/aFa8wP2cY1Uc4W5bE30oM0w"
],
    "Dallas": [
    "https://square.link/u/dGsTDRsa", "https://square.link/u/Pv4UAm7C", "https://square.link/u/PMYWMXwI", "https://square.link/u/uxAAfRfY", "https://square.link/u/cWB6IZoa", "https://buy.stripe.com/7sY6oHbNyaqIfAJ23t0oM0C", "https://buy.stripe.com/cNi3cv4l6dCUgEN37x0oM0D", "https://buy.stripe.com/bJe9ATaJu6asewFazZ0oM0E",
    "https://square.link/u/dGsTDRsa", "https://square.link/u/Pv4UAm7C", "https://square.link/u/PMYWMXwI", "https://square.link/u/uxAAfRfY", "https://square.link/u/cWB6IZoa", "https://buy.stripe.com/9B6eVd6tefL26094bB0oM0L", "https://buy.stripe.com/9B65kD5pa9mE0FP0Zp0oM0M", "https://buy.stripe.com/bJeaEX04Q1Uc0FPcI70oM0N"
    ],
    "Fort Worth": [
    "https://square.link/u/GcWV8Fqk", "https://square.link/u/plfv78Y0", "https://square.link/u/3NcKpxOg", "https://square.link/u/2CBh2LnI", "https://square.link/u/B7sbkHmB", "https://buy.stripe.com/28EeVd3h2buM88h6jJ0oM0T", "https://buy.stripe.com/6oU6oH4l66as609azZ0oM0U", "https://buy.stripe.com/eVq8wPbNy0Q8agp4bB0oM0W",
    "https://square.link/u/GcWV8Fqk", "https://square.link/u/plfv78Y0", "https://square.link/u/3NcKpxOg", "https://square.link/u/2CBh2LnI", "https://square.link/u/B7sbkHmB", "https://buy.stripe.com/dRm5kD8BmeGY88hcI70oM12", "https://buy.stripe.com/00wdR9eZK1Uccox7nN0oM13", "https://buy.stripe.com/5kQ5kD9FqgP6fAJ7nN0oM14"
    ],
    "Austin": [
    "https://square.link/u/pqL0lTM4", "https://square.link/u/pn261R71", "https://square.link/u/ecO8mqY5", "https://square.link/u/vZXoqhlq", "https://square.link/u/owl0jF8y", "https://buy.stripe.com/cNiaEX5pa42kdsB0Zp0oM1a", "https://buy.stripe.com/eVqbJ118U7ewcox8rR0oM1b", "https://buy.stripe.com/dRm00j7xi2Yg0FP37x0oM1c",
    "https://square.link/u/pqL0lTM4", "https://square.link/u/pn261R71", "https://square.link/u/ecO8mqY5", "https://square.link/u/vZXoqhlq", "https://square.link/u/owl0jF8y", "https://buy.stripe.com/00wdR95pabuMfAJ9vV0oM1j", "https://buy.stripe.com/4gM6oH4l6eGY4W57nN0oM1k", "https://buy.stripe.com/cNi4gz9Fq1Uc0FPcI70oM1l"
    ],
    
    "Los Angeles": [
    "https://square.link/u/jRN760Bt", "https://square.link/u/BPRGe1U4", "https://square.link/u/MgSVbIgK", "https://square.link/u/NfnVPzk6", "https://square.link/u/rdIvkA7Y", "https://buy.stripe.com/6oUbJ1cRC8iAbkt37x0oM1t", "https://buy.stripe.com/cNi4gzcRC9mE88hfUj0oM1p", "https://buy.stripe.com/14A00jeZK2Yg0FP23t0oM1n",
    "https://square.link/u/jRN760Bt", "https://square.link/u/BPRGe1U4", "https://square.link/u/MgSVbIgK", "https://square.link/u/NfnVPzk6", "https://square.link/u/rdIvkA7Y", "https://buy.stripe.com/3cI9AT18U42kgEN7nN0oM1s", "https://buy.stripe.com/bJe14n04Q7ew2NX37x0oM1o", "https://buy.stripe.com/eVq7sL3h21Uc88h4bB0oM1m"
    ],
    "San Diego": [
    "https://square.link/u/q8F9PROO", "https://square.link/u/OMK0qDG0", "https://square.link/u/TXOsoapF", "https://square.link/u/MQFdGsLe", "https://square.link/u/6IT5mHVB", "https://buy.stripe.com/7sY9AT5pa56o4W54bB0oM1Z", "https://buy.stripe.com/28EdR95pa2Yg2NX23t0oM21", "https://buy.stripe.com/3cI9ATcRC6asewF37x0oM20",
    "https://square.link/u/q8F9PROO", "https://square.link/u/OMK0qDG0", "https://square.link/u/TXOsoapF", "https://square.link/u/MQFdGsLe", "https://square.link/u/6IT5mHVB", "https://buy.stripe.com/7sY9AT5pa56o4W54bB0oM1Z", "https://buy.stripe.com/fZu9AT7xigP62NX23t0oM28", "https://buy.stripe.com/cNi3cv8BmaqI74dfUj0oM27"
    ],
    "San Francisco": [
    "https://square.link/u/DBxdV4cW", "https://square.link/u/aCyPKEir", "https://square.link/u/Uzn42YS0", "https://square.link/u/qGLAlTVv", "https://square.link/u/ES8X61Ve", "https://buy.stripe.com/14AcN57xidCU6097nN0oM1T", "https://buy.stripe.com/cNiaEX5pa6asgEN5fF0oM1S", "https://buy.stripe.com/dRm14n4l6fL22NX23t0oM1R",
    "https://square.link/u/DBxdV4cW", "https://square.link/u/aCyPKEir", "https://square.link/u/Uzn42YS0", "https://square.link/u/qGLAlTVv", "https://square.link/u/ES8X61Ve", "https://buy.stripe.com/cNi9AT7xi9mEbktazZ0oM1O", "https://buy.stripe.com/5kQ3cvdVG9mEfAJ7nN0oM1P", "https://buy.stripe.com/28EcN5dVGfL2agpbE30oM1Q"
    ],
    "Sacramento": [
    "https://square.link/u/Za6s0IRx", "https://square.link/u/n6Dhpne7", "https://square.link/u/skrNJdtq", "https://square.link/u/pPh2MDn8", "https://square.link/u/0EyLC49H", "https://buy.stripe.com/cNicN59FqeGY88h8rR0oM2f", "https://buy.stripe.com/fZu14n7xieGY3S1azZ0oM2i", "https://buy.stripe.com/6oUdR93h27ewfAJ7nN0oM2h",
    "https://square.link/u/Za6s0IRx", "https://square.link/u/n6Dhpne7", "https://square.link/u/skrNJdtq", "https://square.link/u/pPh2MDn8", "https://square.link/u/0EyLC49H", "https://buy.stripe.com/aFa3cveZK6asagpcI70oM2o", "https://buy.stripe.com/7sY8wPaJu9mEewFdMb0oM2p", "https://buy.stripe.com/28E14n7xi1Uc88hbE30oM2q"
    ],
   "San Jose": [
    "https://square.link/u/NkqRKc56", "https://square.link/u/7woMgJcI", "https://square.link/u/4wF824Tj", "https://square.link/u/frTANHnT", "https://square.link/u/WeSAyckt", "https://buy.stripe.com/aFa8wPaJucyQgEN9vV0oM2w", "https://buy.stripe.com/dRm8wPbNy2YgewFeQf0oM2x", "https://buy.stripe.com/00w6oHdVG6as9clgYn0oM2y",
    "https://square.link/u/NkqRKc56", "https://square.link/u/7woMgJcI", "https://square.link/u/4wF824Tj", "https://square.link/u/frTANHnT", "https://square.link/u/WeSAyckt", "https://buy.stripe.com/3cIeVd3h2cyQ9clfUj0oM2E", "https://buy.stripe.com/eVqcN53h2gP6gEN8rR0oM2F", "https://buy.stripe.com/3cI00jbNy9mE4W5dMb0oM2G"
    ],
    "New York City": [
    "https://square.link/u/FFI038j4", "https://square.link/u/cNuett94", "https://square.link/u/Pd04sSjN", "https://square.link/u/yTmUkq6A", "https://square.link/u/cdtWH7PB", "https://buy.stripe.com/dRmeVd5pabuM9cl23t0oM2M", "https://buy.stripe.com/9B69AT18UcyQ4W5bE30oM2N", "https://buy.stripe.com/14A14n8BmgP6bktgYn0oM2O",
    "https://square.link/u/FFI038j4", "https://square.link/u/cNuett94", "https://square.link/u/Pd04sSjN", "https://square.link/u/yTmUkq6A", "https://square.link/u/cdtWH7PB", "https://buy.stripe.com/dRm7sLbNy8iAewFdMb0oM2U", "https://buy.stripe.com/14A5kDg3OcyQbkt8rR0oM2V", "https://buy.stripe.com/4gM28r04QaqIdsBeQf0oM2W"
    ],
    "Chicago": [
    "https://square.link/u/KOhgOu93", "https://square.link/u/2uXkj9O5", "https://square.link/u/BKtgEAod", "https://square.link/u/xwRpZChn", "https://square.link/u/2bcaUCxx", "https://buy.stripe.com/7sY5kD9Fq7ewfAJ37x0oM3C", "https://buy.stripe.com/14A3cv7xi6asagp4bB0oM3A", "https://buy.stripe.com/5kQ00j04QfL29clazZ0oM3x",
    "https://square.link/u/KOhgOu93", "https://square.link/u/2uXkj9O5", "https://square.link/u/BKtgEAod", "https://square.link/u/xwRpZChn", "https://square.link/u/2bcaUCxx", "https://buy.stripe.com/5kQbJ19FqaqIfAJgYn0oM3B", "https://buy.stripe.com/aFa6oH4l656ocoxfUj0oM3z", "https://buy.stripe.com/7sY5kDg3ObuM88h37x0oM3y"
    ],
    "Phoenix": [
    "https://square.link/u/f4j6ILqh", "https://square.link/u/8RyedXkI", "https://square.link/u/GsUnn5Jb", "https://square.link/u/C3tt5rAZ", "https://square.link/u/9lhcISwi", "https://buy.stripe.com/dRm5kDg3O1Uc3S1gYn0oM32", "https://buy.stripe.com/4gMbJ1cRC9mE0FP8rR0oM33", "https://buy.stripe.com/bJebJ1aJu0Q82NXeQf0oM34",
    "https://square.link/u/f4j6ILqh", "https://square.link/u/8RyedXkI", "https://square.link/u/GsUnn5Jb", "https://square.link/u/C3tt5rAZ", "https://square.link/u/9lhcISwi", "https://buy.stripe.com/eVq28rdVG8iAagp23t0oM3a", "https://buy.stripe.com/4gMcN5aJueGYdsB9vV0oM3b", "https://buy.stripe.com/aFacN55pabuM4W58rR0oM3c"
    ],
    "Philadelphia": [
    "https://square.link/u/snwhMv7C", "https://square.link/u/FCM6w9cw", "https://square.link/u/G8DV3SpD", "https://square.link/u/cr1rNkbq", "https://square.link/u/MRRe8WMZ", "https://buy.stripe.com/eVq14n3h2fL2agp5fF0oM3i", "https://buy.stripe.com/14AbJ13h256o2NX37x0oM3j", "https://buy.stripe.com/eVq14naJu9mE1JT23t0oM3k",
    "https://square.link/u/snwhMv7C", "https://square.link/u/FCM6w9cw", "https://square.link/u/G8DV3SpD", "https://square.link/u/cr1rNkbq", "https://square.link/u/MRRe8WMZ", "https://buy.stripe.com/8x200jeZKdCU4W58rR0oM3q", "https://buy.stripe.com/4gM6oH18U9mEagp5fF0oM3r", "https://buy.stripe.com/aFa5kD2cY9mEagp8rR0oM3s"
    ],
    "Miami": [
    "https://square.link/u/2NdTYOiw", "https://square.link/u/b1nvrjv0", "https://square.link/u/bcqMl8LZ", "https://buy.stripe.com/4gM6oH9Fq56o2NXbE30oM3N", "https://buy.stripe.com/6oUbJ14l6dCUbkteQf0oM3M", "https://buy.stripe.com/bJe5kDg3O0Q8ewFbE30oM3L", "https://buy.stripe.com/14AbJ1bNy8iA4W5dMb0oM3K", "https://buy.stripe.com/eVqcN5eZK56o88hdMb0oM3J",
    "https://square.link/u/2NdTYOiw", "https://square.link/u/b1nvrjv0", "https://square.link/u/bcqMl8LZ", "https://buy.stripe.com/00waEX4l656obkt9vV0oM3X", "https://buy.stripe.com/00w28r7xi9mEbkt0Zp0oM3Y", "https://buy.stripe.com/7sYaEX2cYeGY0FP4bB0oM3T", "https://buy.stripe.com/cNi7sL04QgP64W537x0oM3S", "https://buy.stripe.com/cNieVd2cYgP688hbE30oM3R"
 ],
 "Worcester": [
    "https://square.link/u/P1Yp36En", "https://square.link/u/YdQfjJyY", "https://square.link/u/n0YG0QZb", "https://buy.stripe.com/9B6aEX6tedCUcox37x0oO2y", "https://buy.stripe.com/9B6bJ14l67ew0FPdMb0oO2z", "https://buy.stripe.com/fZucN518U6as6097nN0oO2A", "https://buy.stripe.com/7sYaEXaJu0Q8fAJgYn0oO2B", "https://buy.stripe.com/cNi5kDeZK8iA4W5eQf0oO2C",
    "https://square.link/u/P1Yp36En", "https://square.link/u/YdQfjJyY", "https://square.link/u/n0YG0QZb", "https://buy.stripe.com/8x29AT6te8iAgEN7nN0oO2H", "https://buy.stripe.com/28E9AT4l68iAbkt7nN0oO2G", "https://buy.stripe.com/eVq9ATdVGaqIgEN5fF0oO2F", "https://buy.stripe.com/7sY4gz04QcyQ3S1fUj0oO2E", "https://buy.stripe.com/4gM9AT2cY6as9cl0Zp0oO2D"
],
    "Virginia Beach": [
    "https://square.link/u/7sFct2Yz", "https://square.link/u/7stsTIOi", "https://square.link/u/ORG83Hna", "https://buy.stripe.com/cNifZhg3O56o3S1fUj0oO2N", "https://buy.stripe.com/eVq00j04QeGYfAJ8rR0oO2O", "https://buy.stripe.com/8x28wP9Fq8iAbktdMb0oO2P", "https://buy.stripe.com/9B6eVd18U42kdsBfUj0oO2Q", "https://buy.stripe.com/dRmcN504QfL23S1azZ0oO2R",
    "https://square.link/u/7sFct2Yz", "https://square.link/u/7stsTIOi", "https://square.link/u/ORG83Hna", "https://buy.stripe.com/28EeVdbNy6as609bE30oO3S", "https://buy.stripe.com/14A00j2cYfL2gEN8rR0oO2L", "https://buy.stripe.com/00w14nbNy6ascox4bB0oO2K", "https://buy.stripe.com/3cI5kD9FqcyQ3S123t0oO2J", "https://buy.stripe.com/aFa8wP5pa6ascox0Zp0oO2I"
],
"San Diego": [
    "https://square.link/u/UN29zK9d", "https://square.link/u/wlDhkEz5", "https://square.link/u/cNV5floz", "https://buy.stripe.com/dRm4gz4l642kfAJfUj0oM1X", "https://buy.stripe.com/fZu6oH2cYcyQ88hazZ0oM1Y", "https://buy.stripe.com/7sY9AT5pa56o4W54bB0oM1Z", "https://buy.stripe.com/28EdR95pa2Yg2NX23t0oM21", "https://buy.stripe.com/3cI9ATcRC6asewF37x0oM20",
    "https://square.link/u/UN29zK9d", "https://square.link/u/wlDhkEz5", "https://square.link/u/cNV5floz", "https://buy.stripe.com/bJefZh4l67ew74d8rR0oM25", "https://buy.stripe.com/5kQ4gz5pabuMdsB7nN0oM26", "https://buy.stripe.com/7sY9AT5pa56o4W54bB0oM1Z", "https://buy.stripe.com/fZu9AT7xigP62NX23t0oM28", "https://buy.stripe.com/cNi3cv8BmaqI74dfUj0oM27"
],
"Philadelphia": [
    "https://square.link/u/0MfQkwGA", "https://square.link/u/E5EWCiPQ", "https://square.link/u/Qg8u6gCx", "https://square.link/u/cr1rNkbq", "https://buy.stripe.com/8x2cN53h2buMgENcI70oM3h", "https://buy.stripe.com/eVq14n3h2fL2agp5fF0oM3i", "https://buy.stripe.com/14AbJ13h256o2NX37x0oM3j", "https://buy.stripe.com/eVq14naJu9mE1JT23t0oM3k",
    "https://square.link/u/0MfQkwGA", "https://square.link/u/E5EWCiPQ", "https://square.link/u/Qg8u6gCx", "https://square.link/u/cr1rNkbq", "https://buy.stripe.com/8x2cN53h2buMgENcI70oM3h", "https://buy.stripe.com/8x200jeZKdCU4W58rR0oM3q", "https://buy.stripe.com/4gM6oH18U9mEagp5fF0oM3r", "https://buy.stripe.com/aFa5kD2cY9mEagp8rR0oM3s"
],
"Baltimore": [
    "https://square.link/u/JwAw5ONd", "https://square.link/u/X4F2fsh1", "https://square.link/u/RSwNziYm", "https://buy.stripe.com/8x23cv8BmgP674dfUj0oN1d", "https://buy.stripe.com/7sY00jeZK1UccoxeQf0oN1e", "https://buy.stripe.com/14A28r2cYaqI2NX23t0oN1f", "https://buy.stripe.com/3cI9ATcRCbuMcox0Zp0oN1g", "https://buy.stripe.com/5kQaEXcRCgP6fAJ5fF0oN1h",
    "https://square.link/u/JwAw5ONd", "https://square.link/u/X4F2fsh1", "https://square.link/u/RSwNziYm", "https://buy.stripe.com/bJefZh4l642k0FPeQf0oN1l", "https://buy.stripe.com/00weVd18U0Q83S17nN0oN1m", "https://buy.stripe.com/5kQcN5eZK0Q89cleQf0oN1n", "https://buy.stripe.com/6oUcN5aJuaqIfAJbE30oN1o", "https://buy.stripe.com/bJefZhaJu9mEdsB9vV0oN1p"
],
"Boise City": [
    "https://square.link/u/b5Z4TyJk", "https://square.link/u/0lGCvkhE", "https://square.link/u/B5qbEY3a", "https://buy.stripe.com/3cI28rbNydCU609eQf0oN1t", "https://buy.stripe.com/14A00jg3O8iA3S16jJ0oN1u", "https://buy.stripe.com/eVqcN54l6dCUgEN8rR0oN1v", "https://buy.stripe.com/bJeaEX9Fq9mE6099vV0oN1w", "https://buy.stripe.com/aFa6oH4l6fL20FP6jJ0oN1x",
    "https://square.link/u/b5Z4TyJk", "https://square.link/u/0lGCvkhE", "https://square.link/u/B5qbEY3a", "https://buy.stripe.com/eVq28r18U6as0FPeQf0oN1C", "https://buy.stripe.com/bJefZh5pa7ew2NX37x0oN1B", "https://buy.stripe.com/fZu00j04QfL2dsB6jJ0oN1A", "https://buy.stripe.com/6oU7sL6te6as0FP23t0oN1z", "https://buy.stripe.com/8x200j4l6cyQ74deQf0oN1y"
],
"Arlington": [
    "https://square.link/u/5hx4WFNo", "https://square.link/u/RSYIaIJk", "https://square.link/u/xJcQXZQe", "https://buy.stripe.com/00wfZhg3O42kagpgYn0oO3b", "https://buy.stripe.com/28E8wPcRC8iAdsBcI70oO3a", "https://buy.stripe.com/28E4gz3h2aqIagpeQf0oO39", "https://buy.stripe.com/4gM9AT9Fq1Uc6099vV0oO38", "https://buy.stripe.com/bJe8wP8BmeGYewF37x0oO37",
    "https://square.link/u/5hx4WFNo", "https://square.link/u/RSYIaIJk", "https://square.link/u/xJcQXZQe", "https://buy.stripe.com/8x2fZh6tedCU609fUj0oO36", "https://buy.stripe.com/7sY7sLg3OfL21JTcI70oO35", "https://buy.stripe.com/9B6eVd9Fq0Q89cl37x0oO34", "https://buy.stripe.com/cNicN5dVGeGY3S10Zp0oO33", "https://buy.stripe.com/3cI4gzaJudCU3S19vV0oO32"
],
 "Boston": [
    "https://square.link/u/6MweOdaC", "https://square.link/u/fy298cZj", "https://square.link/u/pucGFJrM", "https://buy.stripe.com/00w8wP4l6gP64W59vV0oO2x", "https://buy.stripe.com/4gM7sL4l69mE9cl7nN0oO2w", "https://buy.stripe.com/dRm4gz3h28iA74d8rR0oO2v", "https://buy.stripe.com/6oU14nbNybuMbkt0Zp0oO2u", "https://buy.stripe.com/6oU28r5pa42kagpfUj0oO2t",
    "https://square.link/u/6MweOdaC", "https://square.link/u/fy298cZj", "https://square.link/u/pucGFJrM", "https://buy.stripe.com/8x2eVdcRC0Q81JT9vV0oO2s", "https://buy.stripe.com/7sYdR94l6buM1JTazZ0oO2r", "https://buy.stripe.com/8x228raJu0Q8609cI70oO2q", "https://buy.stripe.com/dRm3cvbNybuM0FPdMb0oO2p", "https://buy.stripe.com/6oU28r5pa42kagpfUj0oO2t"
],
"Atlanta": [
    "https://square.link/u/lTPrmcml", "https://square.link/u/PFM6mzok", "https://square.link/u/enmPPYvq", "https://buy.stripe.com/6oUbJ17xi2Yg2NX7nN0oO1U", "https://buy.stripe.com/9B63cv4l62YgcoxcI70oO1V", "https://buy.stripe.com/eVq8wP18U1UccoxbE30oO1W", "https://buy.stripe.com/28E14neZKcyQgENeQf0oO1X", "https://buy.stripe.com/aFa7sLcRCcyQfAJazZ0oO1Y",
    "https://square.link/u/lTPrmcml", "https://square.link/u/PFM6mzok", "https://square.link/u/enmPPYvq", "https://buy.stripe.com/8x214n6tefL24W5gYn0oO23", "https://buy.stripe.com/8x27sL4l6dCUcox0Zp0oO22", "https://buy.stripe.com/8x27sL04QfL2dsBeQf0oO21", "https://buy.stripe.com/9B64gz04Q2Yg9cleQf0oO20", "https://buy.stripe.com/7sYbJ17xi2Yg74d37x0oO1Z"
],
    "Charlotte": [
    "https://square.link/u/2xUdmraV", "https://square.link/u/rMRq8cEa", "https://square.link/u/JEorbyVH", "https://buy.stripe.com/28E14ndVGeGY3S1dMb0oN41", "https://buy.stripe.com/9B600j9Fq9mEdsB8rR0oN42", "https://buy.stripe.com/9B69ATdVG6as4W56jJ0oN43", "https://buy.stripe.com/8x23cvcRCfL2ewF23t0oN44", "https://buy.stripe.com/bJedR9eZKfL288h7nN0oN45",
    "https://square.link/u/2xUdmraV", "https://square.link/u/rMRq8cEa", "https://square.link/u/JEorbyVH", "https://buy.stripe.com/9B65kD5pagP6ewFfUj0oO02", "https://buy.stripe.com/8x2eVdcRC6as609bE30oO01", "https://buy.stripe.com/8x25kDaJudCU3S1azZ0oO00", "https://buy.stripe.com/8x28wP3h2eGY9cl4bB0oN47", "https://buy.stripe.com/bJe6oH3h21Uc609azZ0oN46"
],
    "Bristol": [
    "https://square.link/u/bOmpFJTr", "https://square.link/u/RVCOCcGf", "https://square.link/u/7eY7pZ8b", "https://buy.stripe.com/fZu7sLg3ObuMagpgYn0oN37", "https://buy.stripe.com/eVqbJ1aJuaqIcox23t0oN33", "https://buy.stripe.com/5kQ5kD18UdCU609gYn0oN31", "https://buy.stripe.com/cNi3cv2cYcyQ88heQf0oN34", "https://buy.stripe.com/aFa00j18U7ew0FPdMb0oN2Y",
    "https://square.link/u/bOmpFJTr", "https://square.link/u/RVCOCcGf", "https://square.link/u/7eY7pZ8b", "https://buy.stripe.com/8x2dR918UaqI2NXeQf0oN3b", "https://buy.stripe.com/6oU00jaJu42k6098rR0oN32", "https://buy.stripe.com/dRmcN5eZK1UcgEN4bB0oN30", "https://buy.stripe.com/fZufZh4l6aqIdsB7nN0oN2Z", "https://buy.stripe.com/14AdR97xi2Yg1JT7nN0oN2X"
],
 "Bridgeport": [
    "https://square.link/u/uLav4fdG", "https://square.link/u/lktbuzZS", "https://square.link/u/JW7Dhz27", "https://buy.stripe.com/7sYdR93h26asagpfUj0oN3l", "https://buy.stripe.com/8x2aEX4l6aqIfAJ4bB0oN3j", "https://buy.stripe.com/3cI14n8BmbuM3S1bE30oN3h", "https://buy.stripe.com/bJe6oH5pabuM6096jJ0oN3f", "https://buy.stripe.com/28E3cvcRCaqI9clbE30oN3d",
    "https://square.link/u/uLav4fdG", "https://square.link/u/lktbuzZS", "https://square.link/u/JW7Dhz27", "https://buy.stripe.com/5kQeVd8Bm9mEdsB9vV0oN3k", "https://buy.stripe.com/8x25kD3h26as88h7nN0oN3i", "https://buy.stripe.com/14A6oHbNy56o1JTazZ0oN3g", "https://buy.stripe.com/5kQaEX18U0Q874d0Zp0oN3e", "https://buy.stripe.com/bJebJ1eZK2Yg609cI70oN3c"
],
    "Henderson": [
    "https://square.link/u/KnxSHzeu", "https://square.link/u/IrLclJkH", "https://square.link/u/vXE8C529", "https://buy.stripe.com/00weVdeZKeGY6095fF0oP0A", "https://buy.stripe.com/dRmfZheZK9mE9cl37x0oP0B", "https://buy.stripe.com/cNi00j2cY7ew9cl4bB0oP0C", "https://buy.stripe.com/eVq8wPeZKcyQ88h6jJ0oP0D", "https://buy.stripe.com/3cIdR95pa56o9cl9vV0oP0E",
    "https://square.link/u/KnxSHzeu", "https://square.link/u/IrLclJkH", "https://square.link/u/vXE8C529", "https://buy.stripe.com/3cI00j2cY42k9cl23t0oP0M", "https://buy.stripe.com/7sY14n8BmdCUdsB6jJ0oP0L", "https://buy.stripe.com/4gM5kD9Fq6asbkt0Zp0oP0K", "https://buy.stripe.com/5kQdR9aJubuMgENazZ0oP0J", "https://buy.stripe.com/bJe6oH4l6fL2fAJazZ0oP0I"
],
"Columbus": [
    "https://square.link/u/yDLUsZn5", "https://square.link/u/X6iGiC7h", "https://square.link/u/lOxg5erH1", "https://buy.stripe.com/6oU28rbNy6as4W5fUj0oO2n", "https://buy.stripe.com/00w6oHdVG8iAbkt6jJ0oO2m", "https://buy.stripe.com/aFaaEX4l60Q80FPcI70oO2l", "https://buy.stripe.com/cNi3cvcRC2Yg74d4bB0oO2k", "https://buy.stripe.com/aFa5kD7xi56o9cl4bB0oO2j",
    "https://square.link/u/yDLUsZn5", "https://square.link/u/X6iGiC7h", "https://square.link/u/lOxg5erH", "https://buy.stripe.com/7sYdR99FqaqIdsB4bB0oO2i", "https://buy.stripe.com/3cI4gzg3O1Uc88h9vV0oO2h", "https://buy.stripe.com/14AcN52cY8iAfAJ9vV0oO2g", "https://buy.stripe.com/14A6oHeZKdCUewF37x0oO2f", "https://buy.stripe.com/fZufZh18U8iAdsBcI70oO2e"
],
"Denver": [
    "https://square.link/u/V6yurspc", "https://square.link/u/vBHITOE3", "hhttps://square.link/u/LohzPa61", "https://buy.stripe.com/8x2eVd4l642k88hfUj0oO0p", "https://buy.stripe.com/eVq4gz9Fq56oagpeQf0oO0q", "https://buy.stripe.com/aFa7sLg3O9mEcoxgYn0oO0r", "https://buy.stripe.com/fZu3cveZK7ewagpcI70oO0s", "https://buy.stripe.com/dRm7sL7xifL2fAJ6jJ0oO0t",
    "https://square.link/u/V6yurspc", "https://square.link/u/vBHITOE3", "https://square.link/u/LohzPa61", "https://buy.stripe.com/bJe9ATg3OeGYfAJ6jJ0oO0x", "https://buy.stripe.com/aFacN5g3ObuM0FP7nN0oO0y", "https://buy.stripe.com/3cI4gz04QbuMbktfUj0oO0z", "https://buy.stripe.com/eVqbJ1eZK9mE609eQf0oO0A", "https://buy.stripe.com/6oU00j5paaqI9clfUj0oO0B"
],
"Jackson": [
    "https://square.link/u/YFzuELnn", "https://square.link/u/k2JYkTfT", "https://square.link/u/9Mz3jRjs", "https://buy.stripe.com/7sYfZhdVGaqIagp4bB0oN2B", "https://buy.stripe.com/eVq5kDeZKaqIcoxfUj0oN2z", "https://buy.stripe.com/00wcN5dVGeGY88hdMb0oN2x", "https://buy.stripe.com/4gM14naJu9mEewF5fF0oN2v", "https://buy.stripe.com/fZu5kD2cY56o0FP8rR0oN2t",
    "https://square.link/u/YFzuELnn", "https://square.link/u/k2JYkTfT", "https://square.link/u/9Mz3jRjs", "https://buy.stripe.com/9B628reZK1Uc2NX4bB0oN2A", "https://buy.stripe.com/cNi3cv8Bm0Q89cl9vV0oN2y", "https://buy.stripe.com/5kQ4gz3h20Q8cox0Zp0oN2w", "https://buy.stripe.com/dRmeVd6te56o0FPazZ0oN2u", "https://buy.stripe.com/14A5kD8Bm2Ygagp5fF0oN2s"
],
"Jersey City": [
    "https://square.link/u/QewWIFys", "https://square.link/u/sJ69Nnng", "https://square.link/u/RW9yMYoG", "https://buy.stripe.com/3cIaEX6te7ewdsBfUj0oO1H", "https://buy.stripe.com/cNi4gz8Bm1UcgEN7nN0oO1I", "https://buy.stripe.com/8x24gz9Fq56o0FP0Zp0oO1J", "https://buy.stripe.com/aFadR93h29mE0FP9vV0oO1K", "https://buy.stripe.com/9B64gz4l6buM74d9vV0oO1L",
    "https://square.link/u/QewWIFys", "https://square.link/u/sJ69Nnng", "https://square.link/u/RW9yMYoG", "https://buy.stripe.com/fZu5kD04QbuMfAJ37x0oO1P", "https://buy.stripe.com/9B68wPg3O7ew74dgYn0oO1Q", "https://buy.stripe.com/3cIcN5aJubuMagpazZ0oO1R", "https://buy.stripe.com/3cI9AT4l6aqI3S1dMb0oO1S", "https://buy.stripe.com/3cIbJ1cRC0Q8gENeQf0oO1T"
],
"Las Vegas": [
    "https://square.link/u/3TtaN7nc", "https://square.link/u/HfcsovfX", "https://square.link/u/b8h4iy8c", "https://buy.stripe.com/cNifZhg3ObuMgEN37x0oP0c", "https://buy.stripe.com/4gM4gzcRCeGYgEN5fF0oP0d", "https://buy.stripe.com/14A00j2cY2Yg4W5bE30oP0e", "https://buy.stripe.com/7sY7sL9Fq2Yg74ddMb0oP0f", "https://buy.stripe.com/aFa9AT7xi8iAgENbE30oP01",
    "https://square.link/u/3TtaN7nc", "https://square.link/u/HfcsovfX", "https://square.link/u/b8h4iy8c", "https://buy.stripe.com/5kQcN54l6fL22NX7nN0oP05", "https://buy.stripe.com/28E5kDcRC7ew2NXdMb0oP04", "https://buy.stripe.com/dRm7sL2cY0Q81JT23t0oP03", "https://buy.stripe.com/7sYcN56tefL288h7nN0oP02", "https://buy.stripe.com/9B6eVdcRC0Q8fAJfUj0oP0g"
],
"Little Rock": [
    "https://square.link/u/tTRxvx1c", "https://square.link/u/CD2ZjsHG", "https://buy.stripe.com/eVq9ATbNyfL2agp8rR0oN26", "https://buy.stripe.com/cNifZhbNycyQcox23t0oN27", "https://buy.stripe.com/dRm9AT2cY8iAewF0Zp0oN28", "https://buy.stripe.com/3cIfZh8BmbuM74d4bB0oN29", "https://buy.stripe.com/4gMfZhdVG2Yg1JT37x0oN2a", "https://buy.stripe.com/8x2eVd3h2cyQ88h9vV0oN2b",
    "https://square.link/u/tTRxvx1c", "https://square.link/u/CD2ZjsHG", "https://buy.stripe.com/8x26oHdVG6as88h6jJ0oN21", "https://buy.stripe.com/cNi4gzdVG6asgENazZ0oN20", "https://buy.stripe.com/dRm5kDg3OdCU9cl4bB0oN1Z", "https://buy.stripe.com/6oU7sLcRC56oewF7nN0oN1Y", "https://buy.stripe.com/4gM4gzcRC7ew1JT37x0oN1X", "https://buy.stripe.com/00waEX3h2cyQ3S17nN0oN1W"
],
"New Orleans": [
    "https://square.link/u/4MoQNEcB", "https://square.link/u/DlPISqyo", "https://square.link/u/r4o4BCKO", "https://square.link/u/Eb6uyGYi", "https://square.link/u/ao4BOszK", "https://square.link/u/Nc2xOswB", "https://square.link/u/MIyM4Kx5", "https://square.link/u/t3eEE2Kq",
    "https://square.link/u/4MoQNEcB", "https://square.link/u/DlPISqyo", "https://square.link/u/r4o4BCKO", "https://square.link/u/Eb6uyGYi", "https://square.link/u/ao4BOszK", "https://square.link/u/Nc2xOswB", "https://square.link/u/MIyM4Kx5", "https://square.link/u/t3eEE2Kq"
],
"Newark": [
    "https://square.link/u/xJZxEu0o", "https://square.link/u/fTcce5sc", "https://square.link/u/5HxRZDj6", "https://square.link/u/EgYBIsEr", "https://square.link/u/xHAyvqog", "https://square.link/u/eGMmCGdK", "https://square.link/u/I4nVHrvK", "https://square.link/u/LGKe8zcL",
    "https://square.link/u/xJZxEu0o", "https://square.link/u/fTcce5sc", "https://square.link/u/5HxRZDj6", "https://square.link/u/EgYBIsEr", "https://square.link/u/xHAyvqog", "https://square.link/u/eGMmCGdK", "https://square.link/u/I4nVHrvK", "https://square.link/u/LGKe8zcL"
],
"Paterson": [
    "https://square.link/u/UPWkNCuh", "https://square.link/u/xEY1n1Z5", "https://square.link/u/T3F1vObZ", "https://square.link/u/UnZhm7We", "https://square.link/u/8MIcxhHy", "https://square.link/u/MJJapgOR", "https://square.link/u/rDfpl7Qf", "https://square.link/u/qMsyCYlC",
    "https://square.link/u/UPWkNCuh", "https://square.link/u/xEY1n1Z5", "https://square.link/u/T3F1vObZ", "https://square.link/u/UnZhm7We", "https://square.link/u/8MIcxhHy", "https://square.link/u/MJJapgOR", "https://square.link/u/rDfpl7Qf", "https://square.link/u/qMsyCYlC"
],
    "Pittsburgh": [
    "https://square.link/u/IVVwi4Ly","https://square.link/u/Xg4NI05g", "https://square.link/u/LdO7oJXX", "https://square.link/u/XrOWXHsL", "https://square.link/u/ZLkTD7LN", "https://square.link/u/xoBC674F", "https://square.link/u/YuEahn53", "https://square.link/u/6jeJMFRu",
    "https://square.link/u/IVVwi4Ly","https://square.link/u/Xg4NI05g", "https://square.link/u/LdO7oJXX", "https://square.link/u/XrOWXHsL", "https://square.link/u/ZLkTD7LN", "https://square.link/u/xoBC674F", "https://square.link/u/YuEahn53", "https://square.link/u/6jeJMFRu",
],
    "New Haven": [
    "https://square.link/u/xGm5YOKs", "https://square.link/u/BJhqoN2T", "https://square.link/u/YGy9GGpP", "https://square.link/u/gdQ8YsAl", "https://square.link/u/A2FMNPGk", "https://square.link/u/OcNde4KD", "https://square.link/u/8HUTBzBO", "https://square.link/u/OxrzQIFO",
    "https://square.link/u/xGm5YOKs", "https://square.link/u/BJhqoN2T", "https://square.link/u/YGy9GGpP", "https://square.link/u/gdQ8YsAl", "https://square.link/u/A2FMNPGk", "https://square.link/u/OcNde4KD", "https://square.link/u/8HUTBzBO", "https://square.link/u/OxrzQIFO"
],

};
const eventTimes = {
    "Hiking Speed Date": ["8:00 AM - 10:30 AM", "12:00 PM - 2:00 PM"],
    "Mini Yoga & Mingle": ["8:45 AM - 10:30 AM", "4:30 PM - 6:30 PM"],
    "Paint & Date": ["2:00 PM - 4:30 PM", "5:00 PM - 6:30 PM"],
    "Book Lovers Date": ["6:00 PM - 8:30 PM"],
    "Dance & Date": ["7:30 PM - 10:00 PM"],
    "Chill & Chat Spa Date": ["1:00 PM - 3:30 PM", "4:00 PM - 6:30 PM"],
    "Luxury Resort Experience": ["7:00 PM - 9:30 PM"],
    "Black Tie Event": ["8:00 PM - 10:30 PM"]
};

const themedEventDetails = {
    "Chill & Chat Spa Date": { 
        image: "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//spadate.webp",
        description: `
            <p class="mb-6">Escape the hustle and bustle with our Chill & Chat Spa Date, an event designed for ultimate relaxation and genuine connection. This isn't your typical speed dating event; it's a unique opportunity to meet sophisticated singles in a serene, low-pressure spa setting where the focus is on good vibes and great company.</p>
            <h3 class="text-2xl font-bold mb-3">What to Expect:</h3>
            <ul class="list-disc list-inside space-y-2">
                <li><strong>Matched Mini-Dates:</strong> You'll be matched with and go on approximately 8 curated mini-dates throughout the event.</li>
                <li><strong>Relaxing Atmosphere:</strong> Connect with others while enjoying calming music, light refreshments, and the serene spa environment. You get a manicures & pedicures, facials and hand massages all on us .</li>
                <li><strong>Post-Event Connections:</strong> We provide a personal touch to your dating experience. After the event, our team will finalize the results, and a dedicated representative will reach out to you personally via email and phone to share your matches contact information.</li>
            </ul>
            <p class="mt-6 italic">The specific venue details will be disclosed to ticket holders after purchase.</p>
        `
    },
    "Luxury Resort Experience": { 
        image: "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//resort.webp",
        description: `
            <p class="mb-6">Elevate your dating life with the American Speed Dating Tour's Luxury Resort Experience. This exclusive event is designed for those who appreciate the finer things in life and provides the perfect backdrop for making a memorable connection in a high-class atmosphere.</p>
             <p class="mb-6">You will mingle with sophisticated singles over craft cocktails by the poolside or in an elegant lounge at one of the city's most exclusive and beautiful resorts.</p>
            <h3 class="text-2xl font-bold mb-3">What to Expect:</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>An evening of curated introductions in a stunning, high-class resort setting.</li>
                <li>A series of approximately 8 matched mini-dates with other sophisticated singles.</li>
                <li>The ability to message your mutual matches after the event</li>
            </ul>
            <p class="mt-6 italic">To maintain the exclusive atmosphere of the evening, the specific resort venue will be disclosed to ticket holders after purchase.</p>
        `
    },
    "Mini Yoga & Mingle": { 
        image: "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//yogadate.webp",
        description: `
            <p class="mb-6">Find your center and maybe your center-mate with our Mini Yoga & Mingle event. This event is designed to help you connect with like-minded individuals in a relaxed and positive atmosphere.</p>
            <p class="mb-6">The evening begins with a light, beginner-friendly yoga session led by a professional instructor, which serves as a perfect icebreaker to get everyone feeling refreshed. Absolutely no yoga experience is necessary to attend and enjoy the session.</p>
            <h3 class="text-2xl font-bold mb-3">What's Included:</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>A professionally-led, beginner-friendly yoga class to start the event.</li>
                <li>Healthy smoothies and snacks while you mingle after the yoga session.</li>
                <li>A series of approximately 8 curated dates with your matches.</li>
                <li>The ability to message your mutual matches the following day.</li>
            </ul>
            <p class="mt-6 italic">The specific venue will be disclosed to ticket holders after purchase.</p>
        `
    },
    "Dance & Date": { 
        image: "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//dance%20lover.webp",
        description: `
            <p class="mb-6">Let the rhythm guide you to your next romance with our Dance & Date night! This high-energy, interactive experience is a fun and natural way to meet new people.</p>
            <p class="mb-6">The event features a group dance lesson where you'll learn fun moves like salsa or swing from a professional instructor. You will rotate partners throughout the lesson, making it easy to meet everyone in the room. After the lesson, the floor is open for more dancing and mingling.</p>
            <h3 class="text-2xl font-bold mb-3">What Your Ticket Includes:</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>A professionally-led group dance lesson.</li>
                <li>Open-floor dancing and mingling after the lesson.</li>
                <li>A series of approximately 8 curated dates with matched singles.</li>
                <li>The opportunity to connect with your mutual matches through our platform after the event</li>
            </ul>
            <p class="mt-6 italic">The specific venue will be disclosed to ticket holders after the purchase is complete.</p>
        `
    },
    "Paint & Date": { 
        image: "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//paint.webp",
        description: `
            <p class="mb-6">Unleash your inner artist and spark a new connection at our Paint & Date event. It's a perfect way to break the ice and see a different side of someone as you share a fun, creative activity.</p>
            <p class="mb-6">You'll be guided step-by-step by a local artist to create your own masterpiece. As you paint, you'll be seated with your dates, making for a unique and interactive experience. No artistic talent is required!</p>
            <h3 class="text-2xl font-bold mb-3">What Your Ticket Includes:</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>A professionally-led painting session.</li>
                <li>A series of approximately 8 curated dates with people you have been matched to.</li>
                <li>The opportunity to connect with your mutual matches through our platform after the event</li>
            </ul>
            <p class="mt-6 italic">To maintain a private experience, the specific venue will be disclosed to ticket holders after purchase.</p>
        `
    },
    "Book Lovers Date": { 
        image: "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//booklovers.webp",
        description: `
            <p class="mb-6">For those who believe a great story is the best icebreaker, our Book Lovers Date is the perfect chapter. This event brings together literary-minded singles in a quiet, intimate setting designed for deep and meaningful conversations.</p>
            <p class="mb-6">Held in a cozy bookstore or quiet cafe, this event is your chance to discuss your favorite genres, debate classic characters, and maybe even find someone to start a new story with.</p>
            <h3 class="text-2xl font-bold mb-3">What's Included:</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>An intimate event in a cozy bookstore or quiet cafe setting.</li>
                <li>A series of approximately 8 curated dates with people you have been matched to.</li>
                <li>The opportunity to message your mutual matches after the event</li>
            </ul>
            <p class="mt-6 italic">The specific venue will be disclosed to ticket holders after purchase.</p>
        `
    },
    "Black Tie Event": { 
        image: "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//black%20tie.webp",
        description: `
            <p class="mb-6">Join us for our most exclusive and sophisticated event. The Black Tie night is an evening of elegance, class, and high-quality connections, held at one of the city's premier, upscale venues. This is more than just speed dating; it's a night to remember.</p>
            <p class="mb-6">This event calls for your finest attire. You can expect champagne, hors d'oeuvres, and curated introductions with some of the city's most eligible singles.</p>
            <h3 class="text-2xl font-bold mb-3">What Your Ticket Includes:</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>An evening of elegance at a premier, upscale venue.</li>
                <li>Champagne and hors d'oeuvres.</li>
                <li>A series of approximately 8 curated dates with people you have been matched to.</li>
                <li>The opportunity to connect with your mutual matches through our platform after the event</li>
            </ul>
            <p class="mt-6 italic">To maintain the exclusive nature of the event, the specific venue location will be disclosed to ticket holders after purchase.</p>
        `
    },
    "Hiking Speed Date": {
        image: "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//hiking%20date.webp",
        description: `
            <p class="mb-6">Take a walk on the wild side with our Hiking Speed Date! This event is perfect for adventurous singles who love the outdoors and are looking for a healthy, fun, and unique way to meet someone new.</p>
            <p class="mb-6">We will take you on a scenic, guided hike where you'll have plenty of opportunities to chat with your matches while enjoying breathtaking views.</p>
            <h3 class="text-2xl font-bold mb-3">What's Included:</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>A scenic, guided hike with other adventurous singles.</li>
                <li>A series of approximately 8 curated dates with people you have been matched to.</li>
                <li>The opportunity to message your mutual matches after the event</li>
            </ul>
            <p class="mt-6 italic">The specific trail name and meeting point will be disclosed to ticket holders after purchase.</p>
        `
    }
};

const cityImageUrls = {
    // Texas
    "Houston": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//houston%20(1).webp?width=400",
    "San Antonio": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//San%20Antonio.jpg?width=400",
    "Dallas": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//dallas.jpg?width=400",
    "Fort Worth": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Fort%20Worth.jpg?width=400",
    "Austin": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Austin.webp?width=400",
    "El Paso": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//El%20paso.jpg?width=400",

    // California
    "Los Angeles": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Los%20angeles.jpg?width=400",
    "San Diego": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//san%20diego.jpg?width=400",
    "San Francisco": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//San%20Francisco.jpg?width=400",
    "Sacramento": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//sacramento.jpg?width=400",
    "San Jose": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//san%20jose.jpg?width=400",

    // Other Major Cities
    "New York City": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//new%20york.jpg?width=400",
    "Chicago": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//chicago.jpg?width=400",
    "Phoenix": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//pheonix.jpg?width=400",
    "Philadelphia": "https://wsrv.nl/?url=https://images.pexels.com/photos/2362030/pexels-photo-2362030.jpeg&w=400&h=400&fit=cover&q=80&output=webp",
    "Pittsburgh": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media/pittsburg.jpg",
    "New Haven": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media/New%20Haven.jpeg?width=400",
    "Oakland": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media/oakland.jpg?width=400",
    
    // Florida
    "Miami": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//miami.jpg?width=400",
    "Orlando": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//orlando.jpg?width=400",
    "Tampa": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//tampa.jpg?width=400",
    "Jacksonville": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//tampa.jpg?width=400",
    
    // Kentucky
    "Louisville": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Louisville.jpg?width=400",
    "Lexington-Fayette": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Lexington-Fayette.jpg?width=400",
    
    // Midwest
    "Minneapolis": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Minneapolis.jpg?width=400",
    "Indianapolis": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Indianapolis.jpg?width=400",
    "Columbus": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Columbus.jpg?width=400",
    "Detroit": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Detroit.webp?width=400",
    "Warren": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Warren.png?width=400",
    "Omaha": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Omaha-%20Spa%20and%20Chill.jpg?width=400",
    "Kansas City": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Kansas%20City.jpg?width=400",
    "Milwaukee": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Milwaukee.jpg?width=400",

    // West
    "Portland": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//portland.jpg?width=400",
    "Seattle": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Seattle.jpg?width=400",
    "Denver": "https://wsrv.nl/?url=https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg&w=400&h=400&fit=cover&q=80&output=webp",
    "Las Vegas": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media/Las%20Vegas%20(1).webp?width=400",
    "Henderson": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//henderson.webp?width=400",
    "Boise City": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Boise%20City.jpg?width=400",

    // South
    "Charlotte": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Charlotte.jpg?width=400",
    "Oklahoma City": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Oklahoma%20City-.jpg?width=400",
    "Nashville": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Nashville.jpeg?width=400",
    "Atlanta": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Atlanta.jpg?width=400",
    "Jackson": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Jackson.jpg?width=400",
    "Little Rock": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Little%20Rock.jpg?width=400",
    "New Orleans": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//New%20Orleans.jpg?width=400",

    // East Coast
    "Washington": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Washington.jpg?width=400",
    "Newark": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Newark.jpg?width=400",
    "Jersey City": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Jersey%20City-.jpg?width=400",
    "Paterson": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Paterson%20City.jpg?width=400",
    "Boston": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Boston.jpg?width=400",
    "Worcester": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Worcester.jpg?width=400",
    "Virginia Beach": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Virginia%20Beach.jpg?width=400",
    "Arlington": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Arlington%20city.jpg?width=400",
    "Bridgeport": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Bridgeport.jpg?width=400",
    "Bristol": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Bristol.jpg?width=400",
    "Baltimore": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Baltimore.jpg?width=400"
};

const themeKeys = Object.keys(themedEventDetails);
let eventIdCounter = 1;
const allEvents = [];
const cityLinkCounters = {};

const firstEventDates = [17, 18, 19];
const secondEventDates = [24, 25, 26];
const eventYear = 2025;
const eventMonth = 9;

if (typeof cityData !== 'undefined' && cityData) {
    cityData.forEach(cityInfo => {
        const cityName = cityInfo.city;
        cityLinkCounters[cityName] = 0;
        const dateGroups = [firstEventDates, secondEventDates];
        dateGroups.forEach((dateGroup, weekIndex) => {
            themeKeys.forEach((theme, themeIndex) => {
                const eventId = eventIdCounter++;
                let stripeLink = `https://example.com/ticket-placeholder-for-event-${eventId}`;

                // This check allows the code to run without the cityStripeLinks object.
                // It will use the placeholder link above.
                if (typeof cityStripeLinks !== 'undefined' && cityStripeLinks[cityName]) {
                    const linkIndex = cityLinkCounters[cityName];
                    stripeLink = cityStripeLinks[cityName][linkIndex] || stripeLink;
                    cityLinkCounters[cityName]++;
                }

                const eventDay = dateGroup[themeIndex % dateGroup.length];
                const date = new Date(eventYear, eventMonth, eventDay);
                const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                const availableTimes = eventTimes[theme] || ["Time TBD"];
                const timeSlot = weekIndex === 1 && availableTimes.length > 1 ? availableTimes[1] : availableTimes[0];
                allEvents.push({
                    id: eventId,
                    state: cityInfo.state,
                    city: cityInfo.city,
                    date: `${formattedDate} (${timeSlot})`,
                    venue: 'To be disclosed after purchase',
                    image: themedEventDetails[theme].image,
                    title: theme,
                    price: 60.00,
                    stripeLink: stripeLink
                });
            });
        });
    });
} else {
    console.error("cityData is not defined. Make sure auth.js is loaded correctly before script.js.");
}

const getElements = () => ({
    mainHeader: document.getElementById('main-header'),
    hamburgerButton: document.getElementById('hamburger-button'),
    mobileMenu: document.getElementById('mobile-menu'),
    stateFilter: document.getElementById('state-filter'),
    eventGrid: document.getElementById('event-grid'),
    locationsList: document.getElementById('locations-list'),
    animatedButtons: document.querySelectorAll('.animated-button'),
    heroCarousel: document.getElementById('hero-carousel'),
    sponsorTrack: document.querySelector('.logo-carousel-track'),
    locationGrid: document.getElementById('location-grid'),
    locationSearch: document.getElementById('location-search'),
    faqAccordion: document.getElementById('faq-accordion'),
    cityPageTitle: document.getElementById('city-page-title'),
    cityEventGrid: document.getElementById('city-event-grid'),
    cityHeadings: document.querySelectorAll('.city-name'),
    profileContent: document.getElementById('profile-content'),
    eventDetailContent: document.getElementById('event-detail-content'),
    getIcebreakersBtn: document.getElementById('get-icebreakers-btn'),
    icebreakerModal: document.getElementById('icebreaker-modal'),
    closeModalBtn: document.getElementById('close-modal-btn'),
    icebreakerContent: document.getElementById('icebreaker-content'),
    regenerateIcebreakersBtn: document.getElementById('regenerate-icebreakers-btn'),
    dreamDateInput: document.getElementById('dream-date-input'),
    generateDreamDateBtn: document.getElementById('generate-dream-date-btn'),
    dreamDateResult: document.getElementById('dream-date-result'),
    eventsHeading: document.getElementById('events-heading'),
    eventsSubheading: document.getElementById('events-subheading'),
    loginLink: document.getElementById('login-link'),
    signupLink: document.getElementById('signup-link'),
    userNameDisplay: document.getElementById('user-name-display'),
    signOutButton: document.getElementById('sign-out-button'),
    mobileAuthLinks: document.getElementById('mobile-auth-links'),
    mobileUserInfo: document.getElementById('mobile-user-info'),
    mobileUserName: document.getElementById('mobile-user-name'),
    mobileSignOutButton: document.getElementById('mobile-sign-out-button'),
    eventThemeTitle: document.getElementById('event-theme-title'),
    eventThemeSearch: document.getElementById('event-theme-search'),
    eventThemeGrid: document.getElementById('event-theme-grid')
});

async function handleAuthState() {
    const {
        loginLink, signupLink, userNameDisplay, signOutButton,
        mobileAuthLinks, mobileUserInfo, mobileUserName, mobileSignOutButton
    } = getElements();

    supabaseClient.auth.onAuthStateChange(async (event, session) => {
        if (session && session.user) {
            const user = session.user;
            const { data, error } = await supabaseClient
                .from('users')
                .select('name, city')
                .eq('id', user.id)
                .single();

            const displayName = data?.name || 'User';

            userNameDisplay.textContent = `Welcome, ${displayName}`;
            if(loginLink) loginLink.classList.add('hidden');
            if(signupLink) signupLink.classList.add('hidden');
            userNameDisplay.classList.remove('hidden');
            signOutButton.classList.remove('hidden');
            signOutButton.addEventListener('click', signOut);

            mobileUserName.textContent = `Welcome, ${displayName}`;
            mobileAuthLinks.classList.add('hidden');
            mobileUserInfo.classList.remove('hidden');
            mobileSignOutButton.addEventListener('click', signOut);

        } else {
            if(loginLink) loginLink.classList.remove('hidden');
            if(signupLink) signupLink.classList.remove('hidden');
            userNameDisplay.classList.add('hidden');
            signOutButton.classList.add('hidden');

            mobileAuthLinks.classList.remove('hidden');
            mobileUserInfo.classList.add('hidden');
        }
    });
}

async function setupHomePageEvents() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session && session.user) {
        const { data: profile, error } = await supabaseClient
            .from('users')
            .select('city')
            .eq('id', session.user.id)
            .single();
        if (profile && profile.city) {
            displayEventsForCity(profile.city);
        } else {
            displayEventsByLocation();
        }
    } else {
        displayEventsByLocation();
    }
}

function displayEventsForCity(cityName) {
    const { eventsHeading, eventsSubheading } = getElements();
    if (eventsHeading) {
        eventsHeading.textContent = `Events in Your City: ${cityName}`;
    }
    if (eventsSubheading) {
        eventsSubheading.textContent = `Showing events for your preferred city. Use the filter to see other states.`;
    }
    const cityEvents = allEvents.filter(event => event.city === cityName).slice(0, 6);
    renderEvents(cityEvents);
}

function renderEvents(eventsToRender, container) {
    const grid = container || getElements().eventGrid;
    if (!grid) return;
    grid.innerHTML = '';
    if (eventsToRender.length === 0) {
        grid.innerHTML = `<p class="text-slate-500 text-center col-span-full">No events found for this selection. Please check back soon!</p>`;
        return;
    }
    eventsToRender.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card bg-white rounded-xl shadow-lg overflow-hidden flex flex-col';
        
        card.innerHTML = `
            <img src="${event.image}" alt="Event in ${event.city}" class="w-full h-48 object-cover flex-shrink-0" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found';">
            <div class="p-6 flex flex-col flex-grow">
                <div>
                    <p class="text-sm text-violet-600 font-semibold">${event.date}</p>
                    <h3 class="text-2xl font-bold mt-1 text-slate-900">${event.city}</h3>
                    <p class="text-slate-500">${event.state}</p>
                    <p class="mt-2 text-slate-600"><span class="font-semibold">Event Type:</span> ${event.title}</p>
                </div>
                <div class="mt-auto pt-4">
                     <button 
                        class="get-ticket-button text-center bg-violet-600 text-white font-bold py-3 px-6 rounded-full w-full hover:bg-violet-700 transition-colors duration-300"
                        data-event-id="${event.id}"
                        data-stripe-link="${event.stripeLink}">
                        Get Ticket
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function populateStateFilter() {
    const { stateFilter } = getElements();
    if (!stateFilter) return;
    const states = [...new Set(allEvents.map(e => e.state))];
    states.sort();
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateFilter.appendChild(option);
    });
}

function filterAndRender() {
    const { stateFilter, eventGrid } = getElements();
    if (!eventGrid) return; 

    let eventsToShow = allEvents;

    if (stateFilter) {
        const selectedState = stateFilter.value;
        if (selectedState !== 'all') {
            eventsToShow = eventsToShow.filter(e => e.state === selectedState);
        }
    }
    
    const onHomePage = !!document.getElementById('hero-carousel');

    if (onHomePage && (!stateFilter || stateFilter.value === 'all')) {
         renderEvents(eventsToShow.slice(0, 6));
    } else {
         renderEvents(eventsToShow);
    }
}

function displayDefaultEvents() {
    const { eventsHeading, eventsSubheading } = getElements();
    if (!cityData || cityData.length === 0) {
        renderEvents([]);
        if (eventsHeading) eventsHeading.textContent = 'Upcoming Events';
        if (eventsSubheading) eventsSubheading.textContent = 'No events are scheduled. Please check back soon!';
        return;
    }
    const defaultCity = cityData[0].city;
    if (eventsHeading) {
        eventsHeading.textContent = `Upcoming Events in ${defaultCity}`;
    }
    if (eventsSubheading) {
        eventsSubheading.textContent = `Showing our featured events. Use the filter to see other states.`;
    }
    const defaultEvents = allEvents.filter(event => event.city === defaultCity).slice(0, 6);
    renderEvents(defaultEvents);
}

async function displayEventsByLocation() {
    const { eventsSubheading } = getElements();

    if (eventsSubheading) {
        eventsSubheading.textContent = 'Attempting to find events near you...';
    }

    if (!navigator.geolocation) {
        if (eventsSubheading) eventsSubheading.textContent = "Geolocation is not supported by your browser. Showing our featured events.";
        displayDefaultEvents();
        return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
            if (!response.ok) throw new Error('Failed to fetch location data');
            const data = await response.json();
            const userCity = data.address.city || data.address.town;

            if (userCity && typeof cityData !== 'undefined' && cityData) {
                const matchedCity = cityData.find(c => c.city.toLowerCase() === userCity.toLowerCase());
                if (matchedCity) {
                    displayEventsForCity(matchedCity.city);
                } else {
                    if (eventsSubheading) eventsSubheading.textContent = `We don't have events in ${userCity} yet. Showing events for our featured city.`;
                    displayDefaultEvents();
                }
            } else {
                displayDefaultEvents();
            }
        } catch (error) {
            console.error("Error with reverse geocoding:", error);
            displayDefaultEvents();
        }
    }, () => {
        if (eventsSubheading) eventsSubheading.textContent = "You've disabled location services. Showing our featured events.";
        displayDefaultEvents();
    });
}


function populateLocationsDropdown() {
    const { locationsList } = getElements();
    if (!locationsList) return;

    const states = [...new Set(allEvents.map(e => e.state))];
    states.sort();

    locationsList.innerHTML = '<li><a href="locations.html" class="dropdown-link">See All</a></li>';

    states.forEach(state => {
        locationsList.innerHTML += `<li><a href="locations.html" class="dropdown-link location-link" data-state="${state}">${state}</a></li>`;
    });
}

function startHeroCarousel() {
    const { heroCarousel } = getElements();
    if (!heroCarousel) return;

    const images = heroCarousel.querySelectorAll('.carousel-image');
    if (images.length === 0) return;
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 4000); 
}

function setupSponsorCarousel() {
    const { sponsorTrack } = getElements();
    if (!sponsorTrack) return;

    const logos = Array.from(sponsorTrack.children);
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        sponsorTrack.appendChild(clone);
    });
}

function setupLocationsPage() {
    const { locationGrid, locationSearch } = getElements();
    if (!locationGrid || !locationSearch) return;

    const uniqueCities = [...new Map(allEvents.map(event => [event.city, event])).values()];

    const renderLocations = (locations) => {
        locationGrid.innerHTML = '';
        if (locations.length === 0) {
            locationGrid.innerHTML = `<p class="text-slate-500 col-span-full text-center">No locations found.</p>`;
            return;
        }
        locations.forEach(loc => {
            const card = document.createElement('a');
            card.href = `city-events.html?city=${encodeURIComponent(loc.city)}`;
            card.className = 'location-card';
            
            const imageUrl = cityImageUrls[loc.city] || `https://placehold.co/400x400/555/fff?text=${encodeURIComponent(loc.city)}`;
            card.style.backgroundImage = `url('${imageUrl}')`;

            card.innerHTML = `
                <div class="location-card-content">
                    <h3>${loc.city}</h3>
                    <p>${loc.state}</p>
                </div>
            `;
            locationGrid.appendChild(card);
        });
    };

    locationSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredLocations = uniqueCities.filter(loc => 
            loc.city.toLowerCase().includes(searchTerm) || 
            loc.state.toLowerCase().includes(searchTerm)
        );
        renderLocations(filteredLocations);
    });

    renderLocations(uniqueCities);
}

function setupCityEventsPage() {
    const { cityPageTitle, cityEventGrid, cityHeadings } = getElements();
    if (!cityPageTitle) return;

    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');

    if (!city) {
        cityPageTitle.textContent = "City Not Found";
        return;
    }
    
    document.title = `Events in ${city} - American Speed Dating Tour`;
    cityPageTitle.textContent = `Events in ${city}`;
    cityHeadings.forEach(h => h.textContent = city);

    const cityEvents = allEvents.filter(event => event.city === city);
    renderEvents(cityEvents, cityEventGrid);
}

function setupEventThemePage() {
    const { eventThemeTitle, eventThemeSearch, eventThemeGrid } = getElements();
    if (!eventThemeTitle) return;

    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme');

    if (!theme) {
        eventThemeTitle.textContent = "Theme Not Found";
        return;
    }
    
    document.title = `${theme} Events - American Speed Dating Tour`;
    eventThemeTitle.textContent = `${theme} Events`;

    const themeEvents = allEvents.filter(event => event.title === theme);
    renderEvents(themeEvents, eventThemeGrid);
    
    eventThemeSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredEvents = themeEvents.filter(event => 
            event.city.toLowerCase().includes(searchTerm) || 
            event.state.toLowerCase().includes(searchTerm)
        );
        renderEvents(filteredEvents, eventThemeGrid);
    });
}


function setupFaqAccordion() {
    const { faqAccordion } = getElements();
    if (!faqAccordion) return;

    const faqData = [
        { q: "How do ASD Tour Events Work?", a: "Simply purchase a ticket, show up at the event venue, and check-in using your ASD Tour account on your smartphone. You'll then go on around 8 dates with people who you have been matched to. After the event, you will be able to message your matches!" },
        { q: "How is it different to other speed dating?", a: "It's matched and mobile! Events are in great bars, not stuffy back rooms. Our algorithm matches you based on your profile and feedback, so you're not just dating everyone who shows up." },
        { q: "How does the matching work?", a: "Our algorithm uses your entire profile (age, education, interests, etc.) and your feedback from past dates to match you with compatible people live at the event. The more you use it, the smarter it gets!" },
        { q: "Are there ID or minimum age requirements?", a: "Yes. Please ensure you are within the stated age limits for the event. ID may be requested by our hosts as proof of age." },
        { q: "Do I have to bring a printed ticket?", a: "There's no need for a physical copy. You can access the event simply by presenting the ticket from your email inbox." },
        { q: "What is the refund policy?", a: "No refunds. We do allow transfers to another event if you let us know 7 days in advance. See our Terms & Conditions for more details." }
    ];

    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.className = 'border-b border-slate-200 py-4';
        faqItem.innerHTML = `
            <button class="w-full text-left flex justify-between items-center focus:outline-none">
                <span class="text-lg font-medium text-slate-900">${item.q}</span>
                <svg class="w-6 h-6 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="mt-2 text-slate-600 max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                <p class="p-2">${item.a}</p>
            </div>
        `;
        faqAccordion.appendChild(faqItem);
    });

    faqAccordion.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (!button) return;
        
        const content = button.nextElementSibling;
        const icon = button.querySelector('svg');

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.style.transform = 'rotate(0deg)';
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            icon.style.transform = 'rotate(180deg)';
        }
    });
}

function setupPurchasePage() {
    const eventContent = document.getElementById('event-landing-content');
    const notFoundMessage = document.getElementById('event-not-found');

    if (!eventContent) return;

    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('eventId'));
    const event = allEvents.find(e => e.id === eventId);

    if (event) {
        const eventThemeData = themedEventDetails[event.title];

        document.title = `${event.title} in ${event.city} - ASD Tour`;
        
        const heroImage = document.getElementById('event-hero-image');
        const title = document.getElementById('event-title');
        const description = document.getElementById('event-description');
        const heroButton = document.getElementById('get-ticket-btn-hero');
        const subtitle = document.getElementById('event-subtitle');
        const footerButton = document.getElementById('get-ticket-btn-footer');
        const ctaSubtitle = document.getElementById('event-cta-subtitle');

        heroImage.style.backgroundImage = `url('${event.image}')`;
        title.innerHTML = `${event.title}<span class="block text-2xl font-normal text-slate-200 mt-2">${event.city} - ${event.date}</span>`;
        subtitle.textContent = `Get your ticket for this exclusive event.`;
        description.innerHTML = eventThemeData.description;
        
        heroButton.href = event.stripeLink || '#'; 
        footerButton.href = event.stripeLink || '#';
        
        ctaSubtitle.textContent = `Spots for ${event.title} in ${event.city} are limited. Secure your ticket now and get ready to meet someone amazing.`;

    } else {
        eventContent.classList.add('hidden');
        notFoundMessage.classList.remove('hidden');
    }
}

function setupPasswordToggles() {
    const togglePassword = document.getElementById('toggle-password');
    const password = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon-password');
    const eyeSlashIcon = document.getElementById('eye-slash-icon-password');
    
    const toggleConfirmPassword = document.getElementById('toggle-confirm-password');
    const confirmPassword = document.getElementById('confirm-password');
    const eyeIconConfirm = document.getElementById('eye-icon-confirm');
    const eyeSlashIconConfirm = document.getElementById('eye-slash-icon-confirm');

    if (togglePassword) {
        togglePassword.addEventListener('click', function () {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            eyeIcon.classList.toggle('hidden');
            eyeSlashIcon.classList.toggle('hidden');
        });
    }
    
    if (toggleConfirmPassword) {
        toggleConfirmPassword.addEventListener('click', function () {
            const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmPassword.setAttribute('type', type);
            eyeIconConfirm.classList.toggle('hidden');
            eyeSlashIconConfirm.classList.toggle('hidden');
        });
    }
}

function setupEventDetailsPage() {
    const { eventDetailContent } = getElements();
    if (!eventDetailContent) return;

    const urlParams = new URLSearchParams(window.location.search);
    const eventType = urlParams.get('event');
    const eventData = themedEventDetails[eventType];

    if (eventData) {
        document.title = `${eventData.title} - ASD Tour`;
        eventDetailContent.innerHTML = `
            <div class="py-24 bg-white">
                <div class="container mx-auto px-6 max-w-5xl">
                    <div class="text-center mb-16">
                        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900">${eventData.title}</h1>
                    </div>
                    <div class="aspect-w-16 aspect-h-9 mb-16 rounded-lg overflow-hidden shadow-xl">
                        <img src="${eventData.image}" alt="${eventData.title}" class="w-full h-full object-cover">
                    </div>
                    <div class="prose lg:prose-xl max-w-none">
                        <p>${eventData.description}</p>
                    </div>
                    <div class="mt-16 text-center">
                        <a href="locations.html" class="cta-button bg-violet-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-violet-700">Find This Event Near You</a>
                    </div>
                </div>
            </div>
        `;
    } else {
        eventDetailContent.innerHTML = `<div class="py-24 text-center"><h1 class="text-4xl font-bold">Event not found.</h1></div>`;
    }
}

async function setupProfilePage() {
    const { profileContent } = getElements();
    if (!profileContent) return;

    supabaseClient.auth.onAuthStateChange(async (event, session) => {
        if (session && session.user) {
            const user = session.user;
            const { data: userData, error } = await supabaseClient
                .from('users')
                .select('name, pronouns, gender, seeking')
                .eq('id', user.id)
                .single();

            if (error) {
                console.error("Error fetching user data:", error);
                profileContent.innerHTML = `<p class="text-center text-red-500">Error loading your profile.</p>`;
                return;
            }

            if (userData) {
                profileContent.innerHTML = `
                    <div class="border-b border-slate-200 pb-4">
                        <h3 class="text-lg font-medium text-slate-500">Full Name</h3>
                        <p class="text-xl text-slate-900">${userData.name}</p>
                    </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h3 class="text-lg font-medium text-slate-500">Email</h3>
                        <p class="text-xl text-slate-900">${user.email}</p>
                    </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h3 class="text-lg font-medium text-slate-500">Pronouns</h3>
                        <p class="text-xl text-slate-900">${userData.pronouns || 'Not specified'}</p>
                    </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h3 class="text-lg font-medium text-slate-500">Gender</h3>
                        <p class="text-xl text-slate-900">${userData.gender}</p>
                    </div>
                    <div>
                        <h3 class="text-lg font-medium text-slate-500">Interested In</h3>
                        <p class="text-xl text-slate-900">${userData.seeking}</p>
                    </div>
                `;
            } else {
                profileContent.innerHTML = `<p class="text-center">Could not find your profile data.</p>`;
            }
        } else {
            profileContent.innerHTML = `<p class="text-center">Please <a href="login.html" class="text-violet-600 font-bold">log in</a> to view your profile.</p>`;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = getElements();

    if (elements.mainHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                elements.mainHeader.classList.add('scrolled');
            } else {
                elements.mainHeader.classList.remove('scrolled');
            }
        });
    }

    if (elements.hamburgerButton && elements.mobileMenu) {
        elements.hamburgerButton.addEventListener('click', () => {
            elements.hamburgerButton.classList.toggle('open');
            elements.mobileMenu.classList.toggle('open');
        });
        elements.mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                elements.hamburgerButton.classList.remove('open');
                elements.mobileMenu.classList.remove('open');
            });
        });
    }

    if(elements.animatedButtons) {
        elements.animatedButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.add('focused');
                setTimeout(() => {
                    button.classList.remove('focused');
                }, 2000);
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1 && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    try {
        handleAuthState();
        populateLocationsDropdown();
        setupSponsorCarousel();

        if (document.getElementById('hero-carousel')) { 
            setupHomePageEvents();
            startHeroCarousel();
            if (elements.stateFilter) {
                populateStateFilter();
                elements.stateFilter.addEventListener('change', filterAndRender);
            }
        }
        
        if (document.getElementById('location-grid')) {
            setupLocationsPage();
        }

        if (document.getElementById('city-event-grid')) {
            setupCityEventsPage();
        }

        if (document.getElementById('event-theme-grid')) {
            setupEventThemePage();
        }

        if (document.getElementById('faq-accordion')) {
            setupFaqAccordion();
        }
        
        if (document.getElementById('event-landing-content')) { 
            setupPurchasePage();
        }
        
        if (document.getElementById('signup-form') || document.getElementById('login-form')) {
            setupPasswordToggles();
        }
        
        if (document.getElementById('profile-content')) {
            setupProfilePage();
        }
    } catch (error) {
        console.error("An error occurred during the dynamic setup of the page:", error);
    }
    
    // --- UPDATED MODAL LOGIC ---
    const prePaymentModal = document.getElementById('pre-payment-modal');
    const closeModalButton = document.getElementById('close-modal-button');
    const prePaymentForm = document.getElementById('pre-payment-form');
    
    if(prePaymentForm) {
        const modalEventId = document.getElementById('modal-event-id');
        const modalStripeLink = document.getElementById('modal-stripe-link');
        const modalStatus = document.getElementById('modal-status');
        const proceedButton = document.getElementById('proceed-to-payment-btn');

        function openModal(eventId, stripeLink) {
            modalEventId.value = eventId;
            modalStripeLink.value = stripeLink;
            prePaymentModal.classList.remove('hidden');
        }

        function closeModal() {
            prePaymentModal.classList.add('hidden');
            prePaymentForm.reset();
            modalStatus.textContent = '';
            proceedButton.disabled = false;
            proceedButton.textContent = 'Proceed to Payment';
        }

        document.body.addEventListener('click', function(e) {
            if (e.target.classList.contains('get-ticket-button')) {
                const eventId = e.target.dataset.eventId;
                const stripeLink = e.target.dataset.stripeLink;
                if (stripeLink && stripeLink.startsWith('http')) {
                    openModal(eventId, stripeLink);
                } else {
                    alert('Ticket link is not available for this event yet.');
                }
            }
        });

        if (closeModalButton) {
            closeModalButton.addEventListener('click', closeModal);
        }

        prePaymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            proceedButton.disabled = true;
            proceedButton.textContent = 'Redirecting...';
            
            const formData = new FormData(prePaymentForm);
            const attendeeData = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone_number: formData.get('phone'),
                gender: formData.get('gender'),
                age: parseInt(formData.get('age')),
                seeking: formData.get('seeking'),
                event_id: parseInt(modalEventId.value)
            };

            supabaseClient
                .from('attendees')
                .insert([attendeeData])
                .then(({ error }) => {
                    if (error) {
                        console.error('Supabase background save error:', error);
                    }
                });

            setTimeout(() => {
                window.location.href = modalStripeLink.value;
            }, 250);
        });
    }
});
