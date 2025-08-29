// --- DATA ---
const cityStripeLinks = {
     "Houston": [
    "https://square.link/u/2By0tWs5", "https://square.link/u/2WQRg7Px", "https://square.link/u/XNsop8jV", "https://square.link/u/ZLeGO0DS",  "https://square.link/u/MXc0BDGu", "https://square.link/u/vyfOIzOh", "https://square.link/u/4eTrELJq", "https://square.link/u/3VQysuov",
    "https://square.link/u/2By0tWs5", "https://square.link/u/2WQRg7Px", "https://square.link/u/XNsop8jV",  "https://square.link/u/ZLeGO0DS", "https://square.link/u/MXc0BDGu", "https://square.link/u/vyfOIzOh", "https://square.link/u/4eTrELJq", "https://square.link/u/3VQysuov"
],
    "San Antonio": [
    "https://square.link/u/s8GrXiMw", "https://square.link/u/vPasADYO", "https://square.link/u/zL3D9tSN", "https://square.link/u/cEdZIqS6", "https://square.link/u/g5E6OIE5", "https://square.link/u/I8j2ifiC", "https://square.link/u/co55Jya2", "https://square.link/u/HpaSueWn",
    "https://square.link/u/s8GrXiMw", "https://square.link/u/vPasADYO", "https://square.link/u/zL3D9tSN", "https://square.link/u/cEdZIqS6", "https://square.link/u/g5E6OIE5", "https://square.link/u/I8j2ifiC", "https://square.link/u/co55Jya2", "https://square.link/u/HpaSueWn"
],
    
"Orlando": [
    "https://square.link/u/HWDbfX6H", "https://square.link/u/USOnSGmt", "https://square.link/u/gBY8l0uH", "https://square.link/u/Abfy6LpD", "https://square.link/u/v1VLULQV", "https://square.link/u/lvuTiaF4", "https://square.link/u/0YhMvL4k",  "https://square.link/u/537eXAr3",
    "https://square.link/u/HWDbfX6H", "https://square.link/u/USOnSGmt", "https://square.link/u/gBY8l0uH", "https://square.link/u/Abfy6LpD", "https://square.link/u/v1VLULQV", "https://square.link/u/lvuTiaF4", "https://square.link/u/0YhMvL4k", "https://square.link/u/537eXAr3"
],
"Tampa": [
    "https://square.link/u/HWDbfX6H", "https://square.link/u/l6Lnv1zn", "https://square.link/u/EGintChv", "https://square.link/u/SlxG6YJy",  "https://square.link/u/OMLrqISP", "https://square.link/u/vddCNJHX", "https://square.link/u/0o3qqI98", "https://square.link/u/ysQvvNfE",
    "https://square.link/u/HWDbfX6H", "https://square.link/u/l6Lnv1zn", "https://square.link/u/EGintChv", "https://square.link/u/SlxG6YJy",  "https://square.link/u/OMLrqISP", "https://square.link/u/vddCNJHX", "https://square.link/u/0o3qqI98", "https://square.link/u/ysQvvNfE"
],
"Jacksonville": [
    "https://square.link/u/nLnc4X2z", "https://square.link/u/VCkWFu20", "https://square.link/u/uytXfaTD", "https://square.link/u/LHJQjFOJ",  "https://square.link/u/759Svigl", "https://square.link/u/QArGVBBP", "https://square.link/u/QTuem7Yl", "https://square.link/u/Zw5iYjjZ",
    "https://square.link/u/nLnc4X2z", "https://square.link/u/VCkWFu20", "https://square.link/u/uytXfaTD", "https://square.link/u/LHJQjFOJ",  "https://square.link/u/759Svigl", "https://square.link/u/QArGVBBP", "https://square.link/u/QTuem7Yl", "https://square.link/u/Zw5iYjjZ"
],
"Lexington-Fayette": [
    "https://square.link/u/IC0arZiC", "https://square.link/u/VWX6dBWj", "https://square.link/u/e714j6TZ", "https://square.link/u/8cDFOBBL", "https://square.link/u/RWGBzsX5", "https://square.link/u/e3HIyADL", "https://square.link/u/S4Hf2WMt", "https://square.link/u/3WCazRkf",
    "https://square.link/u/IC0arZiC", "https://square.link/u/VWX6dBWj", "https://square.link/u/e714j6TZ", "https://square.link/u/8cDFOBBL", "https://square.link/u/RWGBzsX5", "https://square.link/u/e3HIyADL", "https://square.link/u/S4Hf2WMt", "https://square.link/u/3WCazRkf"
],
"Minneapolis": [
    "https://square.link/u/szMnpCDr", "https://square.link/u/1SqJPEBW", "https://square.link/u/kQYPpNKO", "https://square.link/u/d1BD8YW0", "https://square.link/u/4Hns5VBh", "https://square.link/u/ecgVhE3H", "https://square.link/u/pWvGYGSd", "https://square.link/u/3a2iEDjw",
    "https://square.link/u/szMnpCDr", "https://square.link/u/1SqJPEBW", "https://square.link/u/kQYPpNKO", "https://square.link/u/d1BD8YW0", "https://square.link/u/4Hns5VBh", "https://square.link/u/ecgVhE3H", "https://square.link/u/pWvGYGSd", "https://square.link/u/3a2iEDjw"
],
"Indianapolis": [
    "https://square.link/u/3rY4vvCb", "https://square.link/u/Zeaz9JoJ", "https://square.link/u/yRFaBaFC", "https://square.link/u/PkBD0wj0", "https://square.link/u/rytc56xK", "https://square.link/u/nGYqGm0A", "https://square.link/u/LngZ863h", "https://square.link/u/EjZgFjrN",
    "https://square.link/u/3rY4vvCb", "https://square.link/u/Zeaz9JoJ", "https://square.link/u/yRFaBaFC", "https://square.link/u/PkBD0wj0", "https://square.link/u/rytc56xK", "https://square.link/u/nGYqGm0A", "https://square.link/u/LngZ863h", "https://square.link/u/EjZgFjrN"
],
"Detroit": [
    "https://square.link/u/AGUoS27H", "https://square.link/u/zK0hH2Ki", "https://square.link/u/EBByxboJ", "https://square.link/u/BBSRi1Me", "https://square.link/u/yVPZGZOt", "https://square.link/u/dT13ocK7", "https://square.link/u/3G7unnTD", "https://square.link/u/jiHe6aFY",
    "https://square.link/u/AGUoS27H", "https://square.link/u/zK0hH2Ki", "https://square.link/u/EBByxboJ", "https://square.link/u/BBSRi1Me", "https://square.link/u/yVPZGZOt", "https://square.link/u/dT13ocK7", "https://square.link/u/3G7unnTD", "https://square.link/u/jiHe6aFY"
],
"Warren": [
    "https://square.link/u/9uLtXCWS", "https://square.link/u/VdneblGu", "https://square.link/u/xOhJweJa", "https://square.link/u/wjVe7bgT", "https://square.link/u/pQexYBTR", "https://square.link/u/MlAQn1G7", "https://square.link/u/CIaGI4Fg", "https://square.link/u/eo8ZfSlB",
    "https://square.link/u/9uLtXCWS", "https://square.link/u/VdneblGu", "https://square.link/u/xOhJweJa", "https://square.link/u/wjVe7bgT", "https://square.link/u/pQexYBTR", "https://square.link/u/MlAQn1G7", "https://square.link/u/CIaGI4Fg", "https://square.link/u/eo8ZfSlB"
],
"Omaha": [
    "https://square.link/u/eezClRtF", "https://square.link/u/TUExenJn", "https://square.link/u/kmmsvikl", "https://square.link/u/B7FejaWe", "https://square.link/u/am4kr866", "https://square.link/u/J7masFA8", "https://square.link/u/85AAYtgL", "https://square.link/u/gAElXhNW",
    "https://square.link/u/eezClRtF", "https://square.link/u/TUExenJn", "https://square.link/u/kmmsvikl", "https://square.link/u/B7FejaWe", "https://square.link/u/am4kr866", "https://square.link/u/J7masFA8", "https://square.link/u/85AAYtgL", "https://square.link/u/gAElXhNW"
],
"Kansas City": [
    "https://square.link/u/NSnDEpjo", "https://square.link/u/TAlKaQUX", "https://square.link/u/I0pFfNgc", "https://square.link/u/A9xSrDzV", "https://square.link/u/HEcZzgqi", "https://square.link/u/WZCmkkZ8", "https://square.link/u/eV23Orxk", "https://square.link/u/IXOBj2uI",
    "https://square.link/u/NSnDEpjo", "https://square.link/u/TAlKaQUX", "https://square.link/u/I0pFfNgc", "https://square.link/u/A9xSrDzV", "https://square.link/u/HEcZzgqi", "https://square.link/u/WZCmkkZ8", "https://square.link/u/eV23Orxk", "https://square.link/u/IXOBj2uI"
],
"Milwaukee": [
    "https://square.link/u/Kp84kLNN", "https://square.link/u/ziLTBXqO", "https://square.link/u/ur4xDExc", "https://square.link/u/5JpBsc5p", "https://square.link/u/GSL7tXLv", "https://square.link/u/C8Y4195o", "https://square.link/u/LoCmiDJE", "https://square.link/u/xRVkhEa1",
    "https://square.link/u/Kp84kLNN", "https://square.link/u/ziLTBXqO", "https://square.link/u/ur4xDExc", "https://square.link/u/5JpBsc5p", "https://square.link/u/GSL7tXLv", "https://square.link/u/C8Y4195o", "https://square.link/u/LoCmiDJE", "https://square.link/u/xRVkhEa1"
],
"Portland": [
    "https://square.link/u/vpITi3K7", "https://square.link/u/3auYJnEu", "https://square.link/u/hRAtXxlA", "https://square.link/u/dfDbtcyp", "https://square.link/u/FaNbfIh6", "https://square.link/u/2sYpTA7i", "https://square.link/u/XDbxf3Ai", "https://square.link/u/3nRqOhiT",
    "https://square.link/u/vpITi3K7", "https://square.link/u/3auYJnEu", "https://square.link/u/hRAtXxlA", "https://square.link/u/dfDbtcyp", "https://square.link/u/FaNbfIh6", "https://square.link/u/2sYpTA7i", "https://square.link/u/XDbxf3Ai", "https://square.link/u/3nRqOhiT"
],
"Seattle": [
    "https://square.link/u/NnbefvrW", "https://square.link/u/urGDFINy", "https://square.link/u/qBaHTy8X", "https://square.link/u/kkjycd9B", "https://square.link/u/aQmDHDwN", "https://square.link/u/i8rY5oQQ", "https://square.link/u/vEffZBkg", "https://square.link/u/AHBoCo6p",
    "https://square.link/u/NnbefvrW", "https://square.link/u/urGDFINy", "https://square.link/u/qBaHTy8X", "https://square.link/u/kkjycd9B", "https://square.link/u/aQmDHDwN", "https://square.link/u/i8rY5oQQ", "https://square.link/u/vEffZBkg", "hhttps://square.link/u/AHBoCo6p"
],
"El Paso": [
    "https://square.link/u/I2C7WdBR", "https://square.link/u/5ZGPmN82", "https://square.link/u/KPAFuchm", "https://square.link/u/epPmScrE", "https://square.link/u/qA9O5rMw", "https://square.link/u/Fa8wnm9T", "https://square.link/u/DjBIi45P", "https://square.link/u/xX87hRnI",
    "https://square.link/u/I2C7WdBR", "https://square.link/u/5ZGPmN82", "https://square.link/u/KPAFuchm", "https://square.link/u/epPmScrE", "https://square.link/u/qA9O5rMw", "https://square.link/u/Fa8wnm9T", "https://square.link/u/DjBIi45P", "https://square.link/u/xX87hRnI"
],
   "San Antonio": [
    "https://square.link/u/s8GrXiMw", "https://square.link/u/vPasADYO", "https://square.link/u/zL3D9tSN", "https://square.link/u/cEdZIqS6", "https://square.link/u/g5E6OIE5", "https://square.link/u/I8j2ifiC", "https://square.link/u/co55Jya2", "https://square.link/u/HpaSueWn",
    "https://square.link/u/s8GrXiMw", "https://square.link/u/vPasADYO", "https://square.link/u/zL3D9tSN", "https://square.link/u/cEdZIqS6", "https://square.link/u/g5E6OIE5", "https://square.link/u/I8j2ifiC", "https://square.link/u/co55Jya2", "https://square.link/u/HpaSueWn"
],
    "Dallas": [
    "https://square.link/u/dGsTDRsa", "https://square.link/u/Pv4UAm7C", "https://square.link/u/PMYWMXwI", "https://square.link/u/uxAAfRfY", "https://square.link/u/cWB6IZoa", "https://square.link/u/skpNNeUt", "https://square.link/u/DzFLMeZQ", "https://square.link/u/QGK4LdS0",
    "https://square.link/u/dGsTDRsa", "https://square.link/u/Pv4UAm7C", "https://square.link/u/PMYWMXwI", "https://square.link/u/uxAAfRfY", "https://square.link/u/cWB6IZoa", "https://square.link/u/skpNNeUt", "https://square.link/u/DzFLMeZQ", "https://square.link/u/QGK4LdS0"
    ],
    "Fort Worth": [
    "https://square.link/u/GcWV8Fqk", "https://square.link/u/plfv78Y0", "https://square.link/u/3NcKpxOg", "https://square.link/u/2CBh2LnI", "https://square.link/u/B7sbkHmB", "https://square.link/u/umkATuux", "https://square.link/u/kX3zBqa7", "https://square.link/u/RUxgAKLv",
    "https://square.link/u/GcWV8Fqk", "https://square.link/u/plfv78Y0", "https://square.link/u/3NcKpxOg", "https://square.link/u/2CBh2LnI", "https://square.link/u/B7sbkHmB", "https://square.link/u/umkATuux", "https://square.link/u/kX3zBqa7", "https://square.link/u/RUxgAKLv"
    ],
    "Austin": [
    "https://square.link/u/pqL0lTM4", "https://square.link/u/pn261R71", "https://square.link/u/ecO8mqY5", "https://square.link/u/vZXoqhlq", "https://square.link/u/owl0jF8y", "https://square.link/u/9mDNBmfx", "https://square.link/u/kvpzH9HS", "https://square.link/u/h7NgwKZj",
    "https://square.link/u/pqL0lTM4", "https://square.link/u/pn261R71", "https://square.link/u/ecO8mqY5", "https://square.link/u/vZXoqhlq", "https://square.link/u/owl0jF8y", "https://square.link/u/9mDNBmfx", "https://square.link/u/kvpzH9HS", "https://square.link/u/h7NgwKZj"
    ],
    
    "Los Angeles": [
    "https://square.link/u/jRN760Bt", "https://square.link/u/BPRGe1U4", "https://square.link/u/MgSVbIgK", "https://square.link/u/NfnVPzk6", "https://square.link/u/rdIvkA7Y", "https://square.link/u/LCzdzrJR", "https://square.link/u/IRmaW9LH", "https://square.link/u/x4Z1HSFv",
    "https://square.link/u/jRN760Bt", "https://square.link/u/BPRGe1U4", "https://square.link/u/MgSVbIgK", "https://square.link/u/NfnVPzk6", "https://square.link/u/rdIvkA7Y", "https://square.link/u/LCzdzrJR", "https://square.link/u/IRmaW9LH", "https://square.link/u/x4Z1HSFv"
    ],
    "San Diego": [
    "https://square.link/u/q8F9PROO", "https://square.link/u/OMK0qDG0", "https://square.link/u/TXOsoapF", "https://square.link/u/MQFdGsLe", "https://square.link/u/6IT5mHVB", "https://square.link/u/2gQ1Bj6e", "https://square.link/u/4cK4rPoc", "https://square.link/u/TLQLPzak",
    "https://square.link/u/q8F9PROO", "https://square.link/u/OMK0qDG0", "https://square.link/u/TXOsoapF", "https://square.link/u/MQFdGsLe", "https://square.link/u/6IT5mHVB", "https://square.link/u/2gQ1Bj6e", "https://square.link/u/4cK4rPoc", "https://square.link/u/TLQLPzak"
    ],
    "San Francisco": [
    "https://square.link/u/DBxdV4cW", "https://square.link/u/aCyPKEir", "https://square.link/u/Uzn42YS0", "https://square.link/u/qGLAlTVv", "https://square.link/u/ES8X61Ve", "https://square.link/u/TZcWLH6i", "https://square.link/u/JcT2PQma", "https://square.link/u/4goRGROP",
    "https://square.link/u/DBxdV4cW", "https://square.link/u/aCyPKEir", "https://square.link/u/Uzn42YS0", "https://square.link/u/qGLAlTVv", "https://square.link/u/ES8X61Ve", "https://square.link/u/TZcWLH6i", "https://square.link/u/JcT2PQma", "https://square.link/u/4goRGROP"
    ],
    "Sacramento": [
    "https://square.link/u/Za6s0IRx", "https://square.link/u/n6Dhpne7", "https://square.link/u/skrNJdtq", "https://square.link/u/pPh2MDn8", "https://square.link/u/0EyLC49H", "https://square.link/u/9y03BQZH", "https://square.link/u/uWo4bPxz", "https://square.link/u/uWYqFC3z",
    "https://square.link/u/Za6s0IRx", "https://square.link/u/n6Dhpne7", "https://square.link/u/skrNJdtq", "https://square.link/u/pPh2MDn8", "https://square.link/u/0EyLC49H", "https://square.link/u/9y03BQZH", "https://square.link/u/uWo4bPxz", "https://square.link/u/uWYqFC3z"
    ],
   "San Jose": [
    "https://square.link/u/NkqRKc56", "https://square.link/u/7woMgJcI", "https://square.link/u/4wF824Tj", "https://square.link/u/frTANHnT", "https://square.link/u/WeSAyckt", "https://square.link/u/aGp0YIit", "https://square.link/u/8zOS4sHl", "https://square.link/u/evowkMCm",
    "https://square.link/u/NkqRKc56", "https://square.link/u/7woMgJcI", "https://square.link/u/4wF824Tj", "https://square.link/u/frTANHnT", "https://square.link/u/WeSAyckt", "https://square.link/u/aGp0YIit", "https://square.link/u/8zOS4sHl", "https://square.link/u/evowkMCm"
    ],
    "New York City": [
    "https://square.link/u/FFI038j4", "https://square.link/u/cNuett94", "https://square.link/u/Pd04sSjN", "https://square.link/u/yTmUkq6A", "https://square.link/u/cdtWH7PB", "https://square.link/u/IIp9N49S", "https://square.link/u/XHAQpMJd", "https://square.link/u/MqHoMRNh",
    "https://square.link/u/FFI038j4", "https://square.link/u/cNuett94", "https://square.link/u/Pd04sSjN", "https://square.link/u/yTmUkq6A", "https://square.link/u/cdtWH7PB", "https://square.link/u/IIp9N49S", "https://square.link/u/XHAQpMJd", "https://square.link/u/MqHoMRNh"
    ],
    "Chicago": [
    "https://square.link/u/KOhgOu93", "https://square.link/u/2uXkj9O5", "https://square.link/u/BKtgEAod", "https://square.link/u/xwRpZChn", "https://square.link/u/2bcaUCxx", "https://square.link/u/PgHp6iwp", "https://square.link/u/VHdUEWrw", "https://square.link/u/Bv2nuWwv",
    "https://square.link/u/KOhgOu93", "https://square.link/u/2uXkj9O5", "https://square.link/u/BKtgEAod", "https://square.link/u/xwRpZChn", "https://square.link/u/2bcaUCxx", "https://square.link/u/PgHp6iwp", "https://square.link/u/VHdUEWrw", "https://square.link/u/Bv2nuWwv"
    ],
    "Phoenix": [
    "https://square.link/u/f4j6ILqh", "https://square.link/u/8RyedXkI", "https://square.link/u/GsUnn5Jb", "https://square.link/u/C3tt5rAZ", "https://square.link/u/9lhcISwi", "https://square.link/u/GCAg6b2o", "https://square.link/u/2XC3npgB", "https://square.link/u/TzTZc5zK",
    "https://square.link/u/f4j6ILqh", "https://square.link/u/8RyedXkI", "https://square.link/u/GsUnn5Jb", "https://square.link/u/C3tt5rAZ", "https://square.link/u/9lhcISwi", "https://square.link/u/GCAg6b2o", "https://square.link/u/2XC3npgB", "https://square.link/u/TzTZc5zK"
    ],
    "Philadelphia": [
    "https://square.link/u/snwhMv7C", "https://square.link/u/FCM6w9cw", "https://square.link/u/G8DV3SpD", "https://square.link/u/cr1rNkbq", "https://square.link/u/MRRe8WMZ", "https://square.link/u/dqGn2mMg", "https://square.link/u/45MN9UVy", "https://square.link/u/6PlTS5TF",
    "https://square.link/u/snwhMv7C", "https://square.link/u/FCM6w9cw", "https://square.link/u/G8DV3SpD", "https://square.link/u/cr1rNkbq", "https://square.link/u/MRRe8WMZ", "https://square.link/u/dqGn2mMg", "https://square.link/u/45MN9UVy", "https://square.link/u/6PlTS5TF"
    ],
    "Miami": [
    "https://square.link/u/2NdTYOiw", "https://square.link/u/b1nvrjv0", "https://square.link/u/bcqMl8LZ", "https://square.link/u/qewaa9Fv", "https://square.link/u/jrbYljM3", "https://square.link/u/hOFMaC6r", "https://square.link/u/6B21v6BQ", "https://square.link/u/SAW6Hl5h",
    "https://square.link/u/2NdTYOiw", "https://square.link/u/b1nvrjv0", "https://square.link/u/bcqMl8LZ", "https://square.link/u/qewaa9Fv", "https://square.link/u/jrbYljM3", "https://square.link/u/hOFMaC6r", "https://square.link/u/6B21v6BQ", "https://square.link/u/SAW6Hl5h"
 ],
 "Worcester": [
    "https://square.link/u/P1Yp36En", "https://square.link/u/YdQfjJyY", "https://square.link/u/n0YG0QZb", "https://square.link/u/dqitRf8I", "https://square.link/u/BRNBoVOQ", "https://square.link/u/PkMBjbMx", "https://square.link/u/g8JzbNww", "https://square.link/u/Rmv1ewhV",
    "https://square.link/u/P1Yp36En", "https://square.link/u/YdQfjJyY", "https://square.link/u/n0YG0QZb", "https://square.link/u/dqitRf8I", "https://square.link/u/BRNBoVOQ", "https://square.link/u/PkMBjbMx", "https://square.link/u/g8JzbNww", "https://square.link/u/Rmv1ewhV"
],
    "Virginia Beach": [
    "https://square.link/u/7sFct2Yz", "https://square.link/u/7stsTIOi", "https://square.link/u/ORG83Hna", "https://square.link/u/opeWPzIL", "https://square.link/u/rmdP4yef", "https://square.link/u/OJrW4cum", "https://square.link/u/a69IVjuc", "https://square.link/u/CnJhyhQv",
    "https://square.link/u/7sFct2Yz", "https://square.link/u/7stsTIOi", "https://square.link/u/ORG83Hna", "https://square.link/u/opeWPzIL", "https://square.link/u/rmdP4yef", "https://square.link/u/OJrW4cum", "https://square.link/u/a69IVjuc", "https://square.link/u/CnJhyhQv"
],
"San Diego": [
    "https://square.link/u/q8F9PROO", "https://square.link/u/OMK0qDG0", "https://square.link/u/TXOsoapF", "https://square.link/u/MQFdGsLe", "https://square.link/u/6IT5mHVB", "https://square.link/u/2gQ1Bj6e", "https://square.link/u/4cK4rPoc", "https://square.link/u/TLQLPzak",
    "https://square.link/u/q8F9PROO", "https://square.link/u/OMK0qDG0", "https://square.link/u/TXOsoapF", "https://square.link/u/MQFdGsLe", "https://square.link/u/6IT5mHVB", "https://square.link/u/2gQ1Bj6e", "https://square.link/u/4cK4rPoc", "https://square.link/u/TLQLPzak"
    ],
"Philadelphia": [
    "https://square.link/u/snwhMv7C", "https://square.link/u/FCM6w9cw", "https://square.link/u/G8DV3SpD", "https://square.link/u/cr1rNkbq", "https://square.link/u/MRRe8WMZ", "https://square.link/u/dqGn2mMg", "https://square.link/u/45MN9UVy", "https://square.link/u/6PlTS5TF",
    "https://square.link/u/snwhMv7C", "https://square.link/u/FCM6w9cw", "https://square.link/u/G8DV3SpD", "https://square.link/u/cr1rNkbq", "https://square.link/u/MRRe8WMZ", "https://square.link/u/dqGn2mMg", "https://square.link/u/45MN9UVy", "https://square.link/u/6PlTS5TF"
    ],
"Baltimore": [
    "https://square.link/u/JwAw5ONd", "https://square.link/u/X4F2fsh1", "https://square.link/u/RSwNziYm", "https://square.link/u/8W7NOUtl", "https://square.link/u/C2WjA9Tv", "https://square.link/u/bSHxZsSW", "https://square.link/u/SBL793rF", "https://square.link/u/hdWFGFUP",
    "https://square.link/u/JwAw5ONd", "https://square.link/u/X4F2fsh1", "https://square.link/u/RSwNziYm", "https://square.link/u/8W7NOUtl", "https://square.link/u/C2WjA9Tv", "https://square.link/u/bSHxZsSW", "https://square.link/u/SBL793rF", "https://square.link/u/hdWFGFUP"
],
"Boise City": [
    "https://square.link/u/b5Z4TyJk", "https://square.link/u/0lGCvkhE", "https://square.link/u/B5qbEY3a", "https://square.link/u/Wn9UgFmn", "https://square.link/u/VIcdUFkS", "https://square.link/u/Cnd00hUc", "https://square.link/u/TsZcah0F", "https://square.link/u/H4VBobwL",
    "https://square.link/u/b5Z4TyJk", "https://square.link/u/0lGCvkhE", "https://square.link/u/B5qbEY3a", "https://square.link/u/Wn9UgFmn", "https://square.link/u/VIcdUFkS", "https://square.link/u/Cnd00hUc", "https://square.link/u/TsZcah0F", "https://square.link/u/H4VBobwL"
],
"Arlington": [
    "https://square.link/u/5hx4WFNo", "https://square.link/u/RSYIaIJk", "https://square.link/u/xJcQXZQe", "https://square.link/u/i4I8p9Tc", "https://square.link/u/TxE1owDy", "https://square.link/u/TxE1owDy", "https://square.link/u/cVQSEeon", "https://square.link/u/Y2tW0SXc",
    "https://square.link/u/5hx4WFNo", "https://square.link/u/RSYIaIJk", "https://square.link/u/xJcQXZQe", "https://square.link/u/i4I8p9Tc", "https://square.link/u/TxE1owDy", "https://square.link/u/TxE1owDy", "https://square.link/u/cVQSEeon", "https://square.link/u/Y2tW0SXc"
],
 "Boston": [
    "https://square.link/u/6MweOdaC", "https://square.link/u/fy298cZj", "https://square.link/u/pucGFJrM", "https://square.link/u/F9Ny997k", "https://square.link/u/WMG7TJvz", "https://square.link/u/eM4u3CPv", "https://square.link/u/Ji3fzrno", "https://square.link/u/RZAxGjXT",
    "https://square.link/u/6MweOdaC", "https://square.link/u/fy298cZj", "https://square.link/u/pucGFJrM", "https://square.link/u/F9Ny997k", "https://square.link/u/WMG7TJvz", "https://square.link/u/eM4u3CPv", "https://square.link/u/Ji3fzrno", "https://square.link/u/RZAxGjXT"
],
"Atlanta": [
    "https://square.link/u/lTPrmcml", "https://square.link/u/PFM6mzok", "https://square.link/u/enmPPYvq", "https://square.link/u/EmXsC2Ot", "https://square.link/u/UYEgKI4C", "https://square.link/u/G3ECPu2A", "https://square.link/u/QBWfzLcu", "https://square.link/u/gq9I44Vd",
    "https://square.link/u/lTPrmcml", "https://square.link/u/PFM6mzok", "https://square.link/u/enmPPYvq", "https://square.link/u/EmXsC2Ot", "https://square.link/u/UYEgKI4C", "https://square.link/u/G3ECPu2A", "https://square.link/u/QBWfzLcu", "https://square.link/u/gq9I44Vd"
],
    "Charlotte": [
    "https://square.link/u/2xUdmraV", "https://square.link/u/rMRq8cEa", "https://square.link/u/JEorbyVH", "https://square.link/u/IXXTZglr", "https://square.link/u/gHEUVfaG", "https://square.link/u/P8gb8Qz0", "https://square.link/u/LAs74RUK", "https://square.link/u/BqSbrhE7",
    "https://square.link/u/2xUdmraV", "https://square.link/u/rMRq8cEa", "https://square.link/u/JEorbyVH", "https://square.link/u/IXXTZglr", "https://square.link/u/gHEUVfaG", "https://square.link/u/P8gb8Qz0", "https://square.link/u/LAs74RUK", "https://square.link/u/BqSbrhE7"
],
    "Bristol": [
    "https://square.link/u/bOmpFJTr", "https://square.link/u/RVCOCcGf", "https://square.link/u/7eY7pZ8b", "https://square.link/u/iat3j2wt", "https://square.link/u/2ZPOUoAy", "https://square.link/u/PL5KHO4B", "https://square.link/u/psU7Zdc7", "https://square.link/u/uH1bdgIO",
    "https://square.link/u/bOmpFJTr", "https://square.link/u/RVCOCcGf", "https://square.link/u/7eY7pZ8b", "https://square.link/u/iat3j2wt", "https://square.link/u/2ZPOUoAy", "https://square.link/u/PL5KHO4B", "https://square.link/u/psU7Zdc7", "https://square.link/u/uH1bdgIO"
],
 "Bridgeport": [
    "https://square.link/u/uLav4fdG", "https://square.link/u/lktbuzZS", "https://square.link/u/JW7Dhz27", "https://square.link/u/yzKA9tiR", "https://square.link/u/60YuX0MF", "https://square.link/u/wD9yk38N", "https://square.link/u/US1hMjIt", "https://square.link/u/LmJ0qT9v",
    "https://square.link/u/uLav4fdG", "https://square.link/u/lktbuzZS", "https://square.link/u/JW7Dhz27", "https://square.link/u/yzKA9tiR", "https://square.link/u/60YuX0MF", "https://square.link/u/wD9yk38N", "https://square.link/u/US1hMjIt", "https://square.link/u/LmJ0qT9v"
],
    "Henderson": [
    "https://square.link/u/KnxSHzeu", "https://square.link/u/IrLclJkH", "https://square.link/u/vXE8C529", "https://square.link/u/mqLFI9iX", "https://square.link/u/SsLoDdaT", "https://square.link/u/a0Sey1QL", "https://square.link/u/tSLohhvx", "https://square.link/u/Rn3uFkR8",
    "https://square.link/u/KnxSHzeu", "https://square.link/u/IrLclJkH", "https://square.link/u/vXE8C529", "https://square.link/u/mqLFI9iX", "https://square.link/u/SsLoDdaT", "https://square.link/u/a0Sey1QL", "https://square.link/u/tSLohhvx", "https://square.link/u/Rn3uFkR8"
],
"Columbus": [
    "https://square.link/u/yDLUsZn5", "https://square.link/u/X6iGiC7h", "https://square.link/u/lOxg5erH", "https://square.link/u/Ih9Q5lBP", "https://square.link/u/1WMuPCg5", "https://square.link/u/9jEEqku1", "https://square.link/u/KiBH5CsG", "https://square.link/u/3FYK2rXV",
    "https://square.link/u/yDLUsZn5", "https://square.link/u/X6iGiC7h", "https://square.link/u/lOxg5erH", "https://square.link/u/Ih9Q5lBP", "https://square.link/u/1WMuPCg5", "https://square.link/u/9jEEqku1", "https://square.link/u/KiBH5CsG", "https://square.link/u/3FYK2rXV"
],
"Denver": [
    "https://square.link/u/V6yurspc", "https://square.link/u/vBHITOE3", "https://square.link/u/LohzPa61", "https://square.link/u/GyNyM3in", "https://square.link/u/K9EQuoVV", "https://square.link/u/6DhE4nfP", "https://square.link/u/YhVxpJJs", "https://square.link/u/wxR7Z8iS",
    "https://square.link/u/V6yurspc", "https://square.link/u/vBHITOE3", "https://square.link/u/LohzPa61", "https://square.link/u/GyNyM3in", "https://square.link/u/K9EQuoVV", "https://square.link/u/6DhE4nfP", "https://square.link/u/YhVxpJJs", "https://square.link/u/wxR7Z8iS"
],
"Jackson": [
    "https://square.link/u/YFzuELnn", "https://square.link/u/k2JYkTfT", "https://square.link/u/9Mz3jRjs", "https://square.link/u/b9mhzV5O", "https://square.link/u/U8hfgHMj", "https://square.link/u/8s2Ib7rK", "https://square.link/u/Fw7MYz4V", "https://square.link/u/qg3elDPM",
    "https://square.link/u/YFzuELnn", "https://square.link/u/k2JYkTfT", "https://square.link/u/9Mz3jRjs", "https://square.link/u/b9mhzV5O", "https://square.link/u/U8hfgHMj", "https://square.link/u/8s2Ib7rK", "https://square.link/u/Fw7MYz4V", "https://square.link/u/qg3elDPM"
],
"Jersey City": [
    "https://square.link/u/QewWIFys", "https://square.link/u/sJ69Nnng", "https://square.link/u/RW9yMYoG", "https://square.link/u/VG29e6po", "https://square.link/u/ibzvPZ0x", "https://square.link/u/aJyjtThP", "https://square.link/u/htNifpoS", "https://square.link/u/ckl6Bjlb",
    "https://square.link/u/QewWIFys", "https://square.link/u/sJ69Nnng", "https://square.link/u/RW9yMYoG", "https://square.link/u/VG29e6po", "https://square.link/u/ibzvPZ0x", "https://square.link/u/aJyjtThP", "https://square.link/u/htNifpoS", "https://square.link/u/ckl6Bjlb"
],
"Las Vegas": [
    "https://square.link/u/3TtaN7nc", "https://square.link/u/HfcsovfX", "https://square.link/u/b8h4iy8c", "https://square.link/u/g3x3Eszc", "https://square.link/u/keIVdyhf", "https://square.link/u/nw5YbC7l", "https://square.link/u/JcAtbcAt", "https://square.link/u/tr1Db93u",
    "https://square.link/u/3TtaN7nc", "https://square.link/u/HfcsovfX", "https://square.link/u/b8h4iy8c", "https://square.link/u/g3x3Eszc", "https://square.link/u/keIVdyhf", "https://square.link/u/nw5YbC7l", "https://square.link/u/JcAtbcAt", "https://square.link/u/tr1Db93u"
],
"Little Rock": [
    "https://square.link/u/tTRxvx1c", "https://square.link/u/CD2ZjsHG", "https://square.link/u/lOvJ8izN", "https://square.link/u/ZJmfVOU5", "https://square.link/u/S2x1iCaw", "https://square.link/u/oQkMHgdU", "https://square.link/u/LOeLD6xz", "https://square.link/u/vM0nLiwo",
    "https://square.link/u/tTRxvx1c", "https://square.link/u/CD2ZjsHG", "https://square.link/u/lOvJ8izN", "https://square.link/u/ZJmfVOU5", "https://square.link/u/S2x1iCaw", "https://square.link/u/oQkMHgdU", "https://square.link/u/LOeLD6xz", "https://square.link/u/vM0nLiwo"
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
    "Pittsburgh": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//pheonix.jpg?width=400",
    "New Haven": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//boston.jpg?width=400",
    "Oakland": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//baltimore.jpg?width=400",

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
