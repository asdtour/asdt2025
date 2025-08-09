// --- DATA ---
const cityStripeLinks = {
    "Houston": [
    "https://buy.stripe.com/eVq14neZKdCU0FPcI70oM00", "https://buy.stripe.com/8x24gzaJugP61JTfUj0oM01", "https://buy.stripe.com/28E5kDcRC1UcewFbE30oM02", "https://buy.stripe.com/3cI8wPeZKeGY6097nN0oM04", "https://buy.stripe.com/6oU3cvdVGdCU3S1dMb0oM05", "https://buy.stripe.com/dRm7sL2cY2Yg4W50Zp0oM06", "https://buy.stripe.com/14A7sL2cYbuMgENdMb0oM07", "https://buy.stripe.com/eVq6oH9Fq7ew1JT23t0oM08",
    "https://buy.stripe.com/00w8wP6te2YgdsB8rR0oM09", "https://buy.stripe.com/8x214n2cY6as1JTgYn0oM0a", "https://buy.stripe.com/cNi28r7xi9mE2NXazZ0oM0b", "https://buy.stripe.com/9B69AT7xifL20FPcI70oM0c", "https://buy.stripe.com/00w14nbNy2Yg1JTbE30oM0d", "https://buy.stripe.com/4gM9AT5padCU0FP0Zp0oM0e", "https://buy.stripe.com/3cI5kD3h27ew1JTeQf0oM0f", "https://buy.stripe.com/9B6bJ104Q6as9cl9vV0oM0g"
],

    "San Antonio": [
    "https://buy.stripe.com/eVq28reZK8iAfAJgYn0oM0h", "https://buy.stripe.com/bJe8wP5pa2Yg88hdMb0oM0i", "https://buy.stripe.com/14AdR9aJu9mEagp8rR0oM0j", "https://buy.stripe.com/8x27sL7xi56ogEN7nN0oM0l", "https://buy.stripe.com/6oU9AT9Fq0Q8bkteQf0oM0k", "https://buy.stripe.com/dRm00j18U6as60923t0oM0m", "https://buy.stripe.com/14AfZhdVG42k1JT5fF0oM0n", "https://buy.stripe.com/7sYdR9g3OfL2dsB5fF0oM0o",
    "https://buy.stripe.com/00wbJ1cRCfL23S123t0oM0p", "https://buy.stripe.com/7sYdR92cYaqIdsB5fF0oM0q", "https://buy.stripe.com/aFa3cv8Bm2Yg0FP0Zp0oM0r", "https://buy.stripe.com/9B69AT2cYgP6fAJ4bB0oM0s", "https://buy.stripe.com/7sY28rg3ObuMfAJcI70oM0t", "https://buy.stripe.com/00wbJ12cYbuMagp5fF0oM0u", "https://buy.stripe.com/00waEX3h2aqI74d8rR0oM0v", "https://buy.stripe.com/aFa8wP2cY1Uc4W5bE30oM0w"
],
"Orlando": [
    "https://buy.stripe.com/cNi8wP9Fq8iA74d8rR0oN00", "https://buy.stripe.com/28E00j8Bm7ewfAJ9vV0oN01", "https://buy.stripe.com/5kQdR918UcyQ1JTbE30oN02", "https://buy.stripe.com/aFa6oH04QbuMfAJ5fF0oN03", "https://buy.stripe.com/3cI5kD4l60Q8609eQf0oN07", "https://buy.stripe.com/eVq5kDdVG0Q8gENfUj0oN06", "https://buy.stripe.com/4gM3cv9FqfL24W5eQf0oN05", "https://buy.stripe.com/8x214n5pacyQgENgYn0oN04",
    "https://buy.stripe.com/9B600j6te42kcoxcI70oM40", "https://buy.stripe.com/eVq6oH04QfL288h7nN0oM41", "https://buy.stripe.com/28E3cvcRC8iAgEN7nN0oM42", "https://buy.stripe.com/4gMaEX3h2gP674dgYn0oM43", "https://buy.stripe.com/9B6aEX3h22Yg88h7nN0oM44", "https://buy.stripe.com/fZu8wP8BmeGY88h8rR0oM45", "https://buy.stripe.com/7sY6oH9Fq2Yg1JTdMb0oM46", "https://buy.stripe.com/dRmeVdaJu2Yg6098rR0oM47"
],
"Tampa": [
    "https://buy.stripe.com/aFa3cvbNyeGY0FPeQf0oN0f", "https://buy.stripe.com/aFa7sLg3O8iAewF23t0oN0e", "https://buy.stripe.com/00w14ng3O9mE0FPfUj0oN0d", "https://buy.stripe.com/cNi6oH18UbuMfAJ37x0oN0c", "https://buy.stripe.com/4gMaEX3h256ocox0Zp0oN0b", "https://buy.stripe.com/6oU6oHbNy42kbktazZ0oN0a", "https://buy.stripe.com/eVq3cv9Fq0Q89clfUj0oN09", "https://buy.stripe.com/3cI4gzg3O7ewgENgYn0oN08",
    "https://buy.stripe.com/7sY5kDbNy6as74dfUj0oN0n", "https://buy.stripe.com/6oUeVd9Fq8iAagp0Zp0oN0m", "https://buy.stripe.com/fZu4gzaJudCU1JTeQf0oN0l", "https://buy.stripe.com/14A28r2cY42k2NX7nN0oN0k", "https://buy.stripe.com/3cI00jdVG9mEgEN9vV0oN0j", "https://buy.stripe.com/28EdR9aJueGYagpcI70oN0i", "https://buy.stripe.com/7sY6oHdVG1UcdsB37x0oN0h", "https://buy.stripe.com/8x23cvcRC0Q8fAJgYn0oN0g"
],
"Jacksonville": [
    "https://buy.stripe.com/9B6cN518U42k2NX4bB0oN0o", "https://buy.stripe.com/aFa00jcRCaqIdsBbE30oN0p", "https://buy.stripe.com/9B6cN5eZK56o4W5fUj0oN0q", "https://buy.stripe.com/7sY14n2cYdCU4W54bB0oN0r", "https://buy.stripe.com/14A6oH04Q8iA0FPcI70oN0s", "https://buy.stripe.com/fZubJ18Bm6asewF37x0oN0t", "https://buy.stripe.com/14A14n7xifL24W57nN0oN0u", "https://buy.stripe.com/bJebJ15pa7ewewF7nN0oN0v",
    "https://buy.stripe.com/aFa8wP8Bm7ewewF9vV0oN0D", "https://buy.stripe.com/fZucN55paeGY0FPbE30oN0w", "https://buy.stripe.com/9B66oH4l66asewFfUj0oN0x", "https://buy.stripe.com/fZu00j2cY1Uccox23t0oN0y", "https://buy.stripe.com/aFabJ1g3O7ewagp37x0oN0z", "https://buy.stripe.com/aFabJ15pabuMcoxazZ0oN0A", "https://buy.stripe.com/eVq14n4l67ew609bE30oN0B", "https://buy.stripe.com/bJe8wP04Q8iAfAJ9vV0oN0C"
],
"Lexington-Fayette": [
    "https://buy.stripe.com/8x2bJ12cY0Q8agpcI70oN0P", "https://buy.stripe.com/5kQ00jdVG2Yg4W5gYn0oN0S", "https://buy.stripe.com/bJe5kD5pacyQdsBgYn0oN0R", "https://buy.stripe.com/14AfZhbNy8iAgEN23t0oN0N", "https://buy.stripe.com/bJe3cv8Bm6asagp5fF0oN0K", "https://buy.stripe.com/28E6oHcRCcyQ0FPeQf0oN0J", "https://buy.stripe.com/aFa3cveZK2Yg0FPdMb0oN0H", "https://buy.stripe.com/6oU00j4l656o88hdMb0oN0F",
    "https://buy.stripe.com/14A6oHg3OaqIcox9vV0oN0Q", "https://buy.stripe.com/14A5kDeZKcyQ4W5dMb0oN0T", "https://buy.stripe.com/cNi3cv18UgP6bkt37x0oN0O", "https://buy.stripe.com/eVq14n04Q7ew1JTgYn0oN0M", "https://buy.stripe.com/8x27sL18UeGYdsB7nN0oN0L", "https://buy.stripe.com/6oUcN5cRCeGYfAJ0Zp0oN0I", "https://buy.stripe.com/aFa4gz8Bm7ewcox0Zp0oN0G", "https://buy.stripe.com/5kQ7sL3h28iA4W537x0oN0E"
],
"Minneapolis": [
    "https://buy.stripe.com/bJe5kD7xi2Yg2NXdMb0oN18", "https://buy.stripe.com/aFa8wP4l69mE4W58rR0oN17", "https://buy.stripe.com/3cI28r4l6eGYfAJeQf0oN15", "https://buy.stripe.com/3cI4gzbNyaqI60937x0oN13", "https://buy.stripe.com/3cI14nbNy0Q8bkt6jJ0oN11", "https://buy.stripe.com/4gMcN56te2YgewFdMb0oN0Z", "https://buy.stripe.com/dRmeVdcRC42k4W59vV0oN0X", "https://buy.stripe.com/3cIeVddVGcyQ1JT8rR0oN0V",
    "https://buy.stripe.com/6oUeVd4l6eGY9cl23t0oN19", "https://buy.stripe.com/8x26oH6te8iAfAJ8rR0oN16", "https://buy.stripe.com/8x25kDdVGcyQcox9vV0oN14", "https://buy.stripe.com/14A3cv6te1Uc88hbE30oN12", "https://buy.stripe.com/cNi6oH7xi42k2NXgYn0oN10", "https://buy.stripe.com/aFa7sL3h21UcdsBbE30oN0Y", "https://buy.stripe.com/dRm8wP7xi2Yg3S1bE30oN0W", "https://buy.stripe.com/9B600jaJu42kewFazZ0oN0U"
],
"Indianapolis": [
    "https://buy.stripe.com/fZu8wP9Fq42k2NX5fF0oN3I", "https://buy.stripe.com/3cIaEX7xi8iAcox9vV0oN3J", "https://buy.stripe.com/dRm28r7xi2Yg4W5azZ0oN3K", "https://buy.stripe.com/dRm28r9FqaqIbkt0Zp0oN3L", "https://buy.stripe.com/28E14naJu6asdsB5fF0oN3M", "https://buy.stripe.com/dRm5kD6te0Q82NXfUj0oN3N", "https://buy.stripe.com/28E6oHbNygP6fAJdMb0oN3O", "https://buy.stripe.com/4gM5kD2cYcyQ0FP8rR0oN3P",
    "https://buy.stripe.com/eVq00j5pa0Q8gENbE30oN3X", "https://buy.stripe.com/bJe7sL5pa8iA3S1eQf0oN3W", "https://buy.stripe.com/9B67sL5pa7ewagp23t0oN3V", "https://buy.stripe.com/8x2bJ19Fq2Yg2NXazZ0oN3U", "https://buy.stripe.com/9B6aEXg3O7ew1JT37x0oN3T", "https://buy.stripe.com/3cI28r4l656o6095fF0oN3S", "https://buy.stripe.com/28E00j6te2YgfAJdMb0oN3R", "https://buy.stripe.com/00w8wP5pa8iA0FPfUj0oN3Q"
],
"Detroit": [
    "https://buy.stripe.com/8x2cN59FqgP69clfUj0oO3w", "https://buy.stripe.com/cNi00j3h256ogEN9vV0oO3v", "https://buy.stripe.com/4gMaEXg3O56o0FP23t0oO3u", "https://buy.stripe.com/4gMdR96te1UcbktazZ0oO2S", "https://buy.stripe.com/14A14n2cY2Yg88h4bB0oO2T", "https://buy.stripe.com/dRmeVd18UbuMewF0Zp0oO2U", "https://buy.stripe.com/9B614n2cY42k3S1cI70oO2V", "https://buy.stripe.com/cNi5kDcRC7ew9clcI70oO2W",
    "https://buy.stripe.com/4gM5kD04Q2YgdsB37x0oO3z", "https://buy.stripe.com/00w28reZK9mEfAJbE30oO3y", "https://buy.stripe.com/fZuaEX3h27ewdsB8rR0oO3x", "https://buy.stripe.com/3cI3cv2cYdCUagp0Zp0oO31", "https://buy.stripe.com/7sY5kD7xifL2fAJcI70oO30", "https://buy.stripe.com/28E00jbNyaqI609eQf0oO2Z", "https://buy.stripe.com/5kQ3cvcRCgP69cl37x0oO2Y", "https://buy.stripe.com/fZucN56te2Yg74d9vV0oO2X"
],
"Warren": [
    "https://buy.stripe.com/5kQfZh5pagP62NX4bB0oP0h", "https://buy.stripe.com/6oUcN56te0Q8bktdMb0oP0i", "https://buy.stripe.com/8x2fZh6tebuMcoxfUj0oP0j", "https://buy.stripe.com/bJe28r9Fq1Uc4W56jJ0oP0k", "https://buy.stripe.com/00w3cvbNy2YgbktbE30oP0l", "https://buy.stripe.com/4gMfZhcRCbuM88h23t0oP0m", "https://buy.stripe.com/5kQeVd5pa1Uc3S14bB0oP0n", "https://buy.stripe.com/dRmcN5dVGeGYewF37x0oP0o",
    "https://buy.stripe.com/4gM5kD5paeGY1JT4bB0oP0p", "https://buy.stripe.com/fZu5kD9FqeGY0FPazZ0oP0q", "https://buy.stripe.com/aFa14n2cY2YgbktbE30oP0r", "https://buy.stripe.com/4gMeVd2cYfL2cox23t0oP0s", "https://buy.stripe.com/7sY8wP4l6gP6bkt23t0oP0t", "https://buy.stripe.com/fZu28reZK6ascoxbE30oP0u", "https://buy.stripe.com/00wdR94l66asewF6jJ0oP0w", "https://buy.stripe.com/4gM8wP04Q56o1JTcI70oP0v"
],
"Omaha": [
    "https://buy.stripe.com/5kQbJ17xi8iA3S1gYn0oO3T", "https://buy.stripe.com/00waEX5pa56o0FPeQf0oO3V", "https://buy.stripe.com/9B6eVdcRC7ew0FPdMb0oP00", "https://buy.stripe.com/00wdR95pa9mE88hcI70oO47", "https://buy.stripe.com/8x2bJ14l66as4W55fF0oO46", "https://buy.stripe.com/dRmbJ1eZKdCU9cl23t0oO45", "https://buy.stripe.com/9B66oHdVG9mE6090Zp0oO44", "https://buy.stripe.com/9B6fZh5pa7ewbktgYn0oO43",
    "https://buy.stripe.com/eVqcN5cRCdCUfAJeQf0oO3U", "https://buy.stripe.com/9B6aEXeZK1Uc2NX37x0oO3W", "https://buy.stripe.com/3cI5kD2cY42kgEN0Zp0oO3X", "https://buy.stripe.com/9B63cv4l60Q8fAJ37x0oO3Y", "https://buy.stripe.com/28E28r4l6gP6ewF8rR0oO3Z", "https://buy.stripe.com/28E8wP8BmbuMewF5fF0oO40", "https://buy.stripe.com/cNi6oH5paaqIcoxazZ0oO41", "https://buy.stripe.com/3cI3cv3h2fL274d4bB0oO42"
],
"Kansas City": [
    "https://buy.stripe.com/28EdR93h21Uc0FP23t0oN2H", "https://buy.stripe.com/3cIeVd6tecyQ1JT4bB0oN2F", "https://buy.stripe.com/eVq14n5pa1UccoxdMb0oN2L", "https://buy.stripe.com/fZu3cvdVGdCU2NX7nN0oN2I", "https://buy.stripe.com/00wcN5eZKcyQcoxgYn0oN2J", "https://buy.stripe.com/bJe5kDaJu42kdsBeQf0oN2N", "https://buy.stripe.com/00w3cv04QdCU9cl8rR0oN2K", "https://buy.stripe.com/14A9AT8Bm7ew2NXgYn0oN2M",
    "https://buy.stripe.com/eVq5kDeZK42k4W5cI70oN2V", "https://buy.stripe.com/9B63cvbNyfL288hfUj0oN2U", "https://buy.stripe.com/cNi4gz3h2eGY4W58rR0oN2O", "https://buy.stripe.com/bJedR9eZK42k1JT6jJ0oN2T", "https://buy.stripe.com/fZueVdaJu7ewdsB6jJ0oN2S", "https://buy.stripe.com/3cIfZh18U1Ucbkt23t0oN2R", "https://buy.stripe.com/9B64gzcRC9mEcox37x0oN2Q", "https://buy.stripe.com/cNieVdcRCbuMbktgYn0oN2P"
],
"Milwaukee": [
    "https://buy.stripe.com/fZuaEX2cY0Q83S1cI70oN2n", "https://buy.stripe.com/4gMeVd2cYbuM1JT7nN0oN2o", "https://buy.stripe.com/9B66oH2cY6asdsB8rR0oN2p", "https://buy.stripe.com/fZubJ17xigP674deQf0oN2r", "https://buy.stripe.com/3cI28r18UbuMbkt23t0oN2q", "https://buy.stripe.com/8x2bJ104QcyQ4W523t0oN2m", "https://buy.stripe.com/9B614n18UaqI1JT23t0oN2l", "https://buy.stripe.com/dRm6oHeZK42kgEN9vV0oN2k",
    "https://buy.stripe.com/dRm4gz04Q9mEewFcI70oN2j", "https://buy.stripe.com/8x29ATdVGbuM4W54bB0oN2i", "https://buy.stripe.com/3cIeVd6tebuMagp9vV0oN2h", "https://buy.stripe.com/14A28r7xi9mEdsBfUj0oN2g", "https://buy.stripe.com/7sY4gzeZK8iA3S19vV0oN2f", "https://buy.stripe.com/4gMeVdbNygP69clfUj0oN2e", "https://buy.stripe.com/bJecN504Q9mE9cldMb0oN2d", "https://buy.stripe.com/6oU3cv4l66as0FP8rR0oN2c"
],
"Portland": [
    "https://buy.stripe.com/7sYaEX9Fq8iA74d0Zp0oN3t", "https://buy.stripe.com/9B67sL9FqbuM3S1dMb0oN3E", "https://buy.stripe.com/fZufZh4l68iAewFeQf0oN3F", "https://buy.stripe.com/00wfZh8BmbuMbkt37x0oN3G", "https://buy.stripe.com/5kQ8wP6te1Uc88h7nN0oN3H", "https://buy.stripe.com/fZubJ1g3O2Yg609dMb0oN3z", "https://buy.stripe.com/4gM9AT3h256o6090Zp0oN3x", "https://buy.stripe.com/8x2eVddVGgP6dsBgYn0oN3u",
    "https://buy.stripe.com/6oU6oH2cYdCUbktfUj0oN3s", "https://buy.stripe.com/3cI7sL04Q56ogENgYn0oN3B", "https://buy.stripe.com/8x28wPbNygP6agpazZ0oN3C", "https://buy.stripe.com/fZu4gz7xi42k0FP8rR0oN3D", "https://buy.stripe.com/eVq14n18U8iA1JTdMb0oN3A", "https://buy.stripe.com/eVq28r9Fq56ocox23t0oN3y", "https://buy.stripe.com/3cI14n18UdCU4W59vV0oN3w", "https://buy.stripe.com/5kQdR904QbuMcox7nN0oN3v"
],
"Seattle": [
    "https://buy.stripe.com/dRmeVdbNydCU2NX0Zp0oO06", "https://buy.stripe.com/eVqfZhdVGaqIdsBbE30oO07", "https://buy.stripe.com/8x200j4l69mEfAJdMb0oO08", "https://buy.stripe.com/5kQ3cv4l60Q84W59vV0oO09", "https://buy.stripe.com/9B6bJ1eZKaqIfAJdMb0oO0a", "https://buy.stripe.com/eVqaEXeZKcyQfAJcI70oO0b", "https://buy.stripe.com/4gMeVd3h20Q84W5bE30oO0c", "https://buy.stripe.com/cNifZh5pacyQfAJ4bB0oO0d",
    "https://buy.stripe.com/8x228r9FqbuMfAJfUj0oO0e", "https://buy.stripe.com/3cIbJ1aJu1Uc9clazZ0oO0f", "https://buy.stripe.com/14A28r2cYbuM2NXgYn0oO0g", "https://buy.stripe.com/14A28r6tefL21JT9vV0oO0h", "https://buy.stripe.com/00w9AT7xi6as74dcI70oO0i", "https://buy.stripe.com/3cIfZhbNy9mE88h4bB0oO0j", "https://buy.stripe.com/8x214nbNy56o4W56jJ0oO0k", "https://buy.stripe.com/28E9ATaJu0Q8ewFcI70oO0l"
],
"El Paso": [
    "https://buy.stripe.com/eVq6oHdVG8iAewF5fF0oP0Y", "https://buy.stripe.com/5kQcN5g3OcyQewFazZ0oP10", "https://buy.stripe.com/eVq4gz6te6asagpazZ0oP0S", "https://buy.stripe.com/28E5kD2cY8iAbktazZ0oP0X", "https://buy.stripe.com/4gMeVd4l6gP62NXgYn0oP0W", "https://buy.stripe.com/4gM28reZK56o4W50Zp0oP12", "https://buy.stripe.com/14A28r6tebuM9clazZ0oP13", "https://buy.stripe.com/aFa6oH3h2fL20FPgYn0oP14",
    "https://buy.stripe.com/8x27sL2cY2Yg609fUj0oP0Z", "https://buy.stripe.com/6oU4gz8BmdCU74d4bB0oP0Q", "https://buy.stripe.com/6oUdR98Bm2Yg0FP37x0oP0P", "https://buy.stripe.com/fZu4gzg3O42k1JT8rR0oP11", "https://buy.stripe.com/8x2aEXcRCeGYdsBbE30oP0V", "https://buy.stripe.com/4gMcN5eZK56ocoxeQf0oP0T", "https://buy.stripe.com/cNiaEXcRC2Yg3S18rR0oP0U", "https://buy.stripe.com/7sY8wP3h21UccoxeQf0oP0R"
],
   "San Antonio": [
    "https://buy.stripe.com/eVq28reZK8iAfAJgYn0oM0h", "https://buy.stripe.com/bJe8wP5pa2Yg88hdMb0oM0i", "https://buy.stripe.com/14AdR9aJu9mEagp8rR0oM0j", "https://buy.stripe.com/8x27sL7xi56ogEN7nN0oM0l", "https://buy.stripe.com/6oU9AT9Fq0Q8bkteQf0oM0k", "https://buy.stripe.com/dRm00j18U6as60923t0oM0m", "https://buy.stripe.com/14AfZhdVG42k1JT5fF0oM0n", "https://buy.stripe.com/7sYdR9g3OfL2dsB5fF0oM0o",
    "https://buy.stripe.com/00wbJ1cRCfL23S123t0oM0p", "https://buy.stripe.com/7sYdR92cYaqIdsB5fF0oM0q", "https://buy.stripe.com/aFa3cv8Bm2Yg0FP0Zp0oM0r", "https://buy.stripe.com/9B69AT2cYgP6fAJ4bB0oM0s", "https://buy.stripe.com/7sY28rg3ObuMfAJcI70oM0t", "https://buy.stripe.com/00wbJ12cYbuMagp5fF0oM0u", "https://buy.stripe.com/00waEX3h2aqI74d8rR0oM0v", "https://buy.stripe.com/aFa8wP2cY1Uc4W5bE30oM0w"
],
    "Dallas": [
    "https://buy.stripe.com/3cI28r2cY2Yg0FPcI70oM0x", "https://buy.stripe.com/5kQ9ATeZKaqI0FP8rR0oM0y", "https://buy.stripe.com/fZu28r6te2Yg0FP6jJ0oM0z", "https://buy.stripe.com/fZubJ14l656o9clbE30oM0A", "https://buy.stripe.com/4gM00jaJucyQdsB9vV0oM0B", "https://buy.stripe.com/7sY6oHbNyaqIfAJ23t0oM0C", "https://buy.stripe.com/cNi3cv4l6dCUgEN37x0oM0D", "https://buy.stripe.com/bJe9ATaJu6asewFazZ0oM0E",
    "https://buy.stripe.com/9B6bJ13h2dCUbktbE30oM0F", "https://buy.stripe.com/3cI28r04QdCU3S17nN0oM0G", "https://buy.stripe.com/9B6bJ1bNyeGYfAJdMb0oM0H", "https://buy.stripe.com/00w8wPcRCaqIgEN5fF0oM0J", "https://buy.stripe.com/5kQeVd5pa56oewF7nN0oM0K", "https://buy.stripe.com/9B6eVd6tefL26094bB0oM0L", "https://buy.stripe.com/9B65kD5pa9mE0FP0Zp0oM0M", "https://buy.stripe.com/bJeaEX04Q1Uc0FPcI70oM0N"
    ],
    "Fort Worth": [
    "https://buy.stripe.com/3cI7sL5pa2Ygcox5fF0oM0O", "https://buy.stripe.com/fZu5kDaJu9mE88h0Zp0oM0P", "https://buy.stripe.com/14A14n6te1Uc9cl8rR0oM0Q", "https://buy.stripe.com/bJeeVd3h2cyQ4W537x0oM0R", "https://buy.stripe.com/aFacN52cY1UcgEN7nN0oM0S", "https://buy.stripe.com/28EeVd3h2buM88h6jJ0oM0T", "https://buy.stripe.com/6oU6oH4l66as609azZ0oM0U", "https://buy.stripe.com/eVq8wPbNy0Q8agp4bB0oM0W",
    "https://buy.stripe.com/eVqdR96teeGY9cl37x0oM0X", "https://buy.stripe.com/4gMfZhg3OdCUewF0Zp0oM0Y", "https://buy.stripe.com/aFa4gz8BmfL2bkt0Zp0oM0Z", "https://buy.stripe.com/cNifZh18UeGY1JT7nN0oM10", "https://buy.stripe.com/3cI3cv6te8iA0FP7nN0oM11", "https://buy.stripe.com/dRm5kD8BmeGY88hcI70oM12", "https://buy.stripe.com/00wdR9eZK1Uccox7nN0oM13", "https://buy.stripe.com/5kQ5kD9FqgP6fAJ7nN0oM14"
    ],
    "Austin": [
    "https://buy.stripe.com/6oUdR95pa7ewewF4bB0oM15", "https://buy.stripe.com/9B65kDdVG42kewF8rR0oM16", "https://buy.stripe.com/28E9AT8BmgP66096jJ0oM17", "https://buy.stripe.com/aFabJ118U0Q888h4bB0oM18", "https://buy.stripe.com/cNi3cvbNyaqI3S17nN0oM19", "https://buy.stripe.com/cNiaEX5pa42kdsB0Zp0oM1a", "https://buy.stripe.com/eVqbJ118U7ewcox8rR0oM1b", "https://buy.stripe.com/dRm00j7xi2Yg0FP37x0oM1c",
    "https://buy.stripe.com/6oU5kD8BmeGY3S1cI70oM1e", "https://buy.stripe.com/9B6fZh7xi8iAfAJ8rR0oM1f", "https://buy.stripe.com/8x228raJu7ew3S14bB0oM1g", "https://buy.stripe.com/7sY8wP6te2Ygagp23t0oM1h", "https://buy.stripe.com/fZueVdcRC42kbkt4bB0oM1i", "https://buy.stripe.com/00wdR95pabuMfAJ9vV0oM1j", "https://buy.stripe.com/4gM6oH4l6eGY4W57nN0oM1k", "https://buy.stripe.com/cNi4gz9Fq1Uc0FPcI70oM1l"
    ],
    "El Paso": [
        "YOUR_LINK_FOR_El_Paso_Chill_&_Chat_Spa_Date_1", "YOUR_LINK_FOR_El_Paso_Luxury_Resort_Experience_1", "YOUR_LINK_FOR_El_Paso_Mini_Yoga_&_Mingle_1", "YOUR_LINK_FOR_El_Paso_Dance_&_Date_1", "YOUR_LINK_FOR_El_Paso_Paint_&_Date_1", "YOUR_LINK_FOR_El_Paso_Book_Lovers_Date_1", "YOUR_LINK_FOR_El_Paso_Black_Tie_Event_1", "YOUR_LINK_FOR_El_Paso_Hiking_Speed_Date_1",
        "YOUR_LINK_FOR_El_Paso_Chill_&_Chat_Spa_Date_2", "YOUR_LINK_FOR_El_Paso_Luxury_Resort_Experience_2", "YOUR_LINK_FOR_El_Paso_Mini_Yoga_&_Mingle_2", "YOUR_LINK_FOR_El_Paso_Dance_&_Date_2", "YOUR_LINK_FOR_El_Paso_Paint_&_Date_2", "YOUR_LINK_FOR_El_Paso_Book_Lovers_Date_2", "YOUR_LINK_FOR_El_Paso_Black_Tie_Event_2", "YOUR_LINK_FOR_El_Paso_Hiking_Speed_Date_2",
    ],
    "Los Angeles": [
    "https://buy.stripe.com/cNicN5bNy2Yg74d37x0oM1D", "https://buy.stripe.com/5kQcN5cRCbuM74d8rR0oM1A", "https://buy.stripe.com/7sYeVd5pabuMcoxbE30oM1z", "https://buy.stripe.com/bJe28reZK1Uc2NXcI70oM1x", "https://buy.stripe.com/bJe8wPeZKeGY74dbE30oM1v", "https://buy.stripe.com/6oUbJ1cRC8iAbkt37x0oM1t", "https://buy.stripe.com/cNi4gzcRC9mE88hfUj0oM1p", "https://buy.stripe.com/14A00jeZK2Yg0FP23t0oM1n",
    "https://buy.stripe.com/8x25kDdVGbuMewF8rR0oM1C", "https://buy.stripe.com/4gM28reZK0Q89cl9vV0oM1B", "https://buy.stripe.com/eVq6oHbNyeGYewFeQf0oM1y", "https://buy.stripe.com/aFa00j8BmeGYcox5fF0oM1w", "https://buy.stripe.com/bJedR99FqeGY2NX9vV0oM1u", "https://buy.stripe.com/3cI9AT18U42kgEN7nN0oM1s", "https://buy.stripe.com/bJe14n04Q7ew2NX37x0oM1o", "https://buy.stripe.com/eVq7sL3h21Uc88h4bB0oM1m"
    ],
    "San Diego": [
    "https://buy.stripe.com/7sYcN5aJuaqIdsBfUj0oM1U", "https://buy.stripe.com/fZu3cv8BmfL23S1eQf0oM1V", "https://buy.stripe.com/14A14n18UaqIdsB23t0oM1W", "https://buy.stripe.com/dRm4gz4l642kfAJfUj0oM1X", "https://buy.stripe.com/fZu6oH2cYcyQ88hazZ0oM1Y", "https://buy.stripe.com/7sY9AT5pa56o4W54bB0oM1Z", "https://buy.stripe.com/28EdR95pa2Yg2NX23t0oM21", "https://buy.stripe.com/3cI9ATcRC6asewF37x0oM20",
    "https://buy.stripe.com/fZudR904Q7ewagpazZ0oM22", "https://buy.stripe.com/7sYdR918UbuMcoxazZ0oM23", "https://buy.stripe.com/28EbJ14l60Q8bktbE30oM24", "https://buy.stripe.com/bJefZh4l67ew74d8rR0oM25", "https://buy.stripe.com/5kQ4gz5pabuMdsB7nN0oM26", "https://buy.stripe.com/7sY9AT5pa56o4W54bB0oM1Z", "https://buy.stripe.com/fZu9AT7xigP62NX23t0oM28", "https://buy.stripe.com/cNi3cv8BmaqI74dfUj0oM27"
    ],
    "San Francisco": [
    "https://buy.stripe.com/5kQ3cv5pa42k2NXeQf0oM1E", "https://buy.stripe.com/4gMcN55pa0Q874d37x0oM1F", "https://buy.stripe.com/9B6cN59FqdCU4W5eQf0oM1J", "https://buy.stripe.com/28EcN518U42k609cI70oM1L", "https://buy.stripe.com/8x2aEXg3OgP6fAJbE30oM1N", "https://buy.stripe.com/14AcN57xidCU6097nN0oM1T", "https://buy.stripe.com/cNiaEX5pa6asgEN5fF0oM1S", "https://buy.stripe.com/dRm14n4l6fL22NX23t0oM1R",
    "https://buy.stripe.com/cNibJ14l656ogEN37x0oM1G", "https://buy.stripe.com/bJedR9aJudCU1JTgYn0oM1H", "https://buy.stripe.com/eVq9ATg3O8iA4W59vV0oM1I", "https://buy.stripe.com/9B6fZhdVG8iA74d7nN0oM1K", "https://buy.stripe.com/4gM4gz04Q9mEbkt9vV0oM1M", "https://buy.stripe.com/cNi9AT7xi9mEbktazZ0oM1O", "https://buy.stripe.com/5kQ3cvdVG9mEfAJ7nN0oM1P", "https://buy.stripe.com/28EcN5dVGfL2agpbE30oM1Q"
    ],
    "Sacramento": [
    "https://buy.stripe.com/4gMeVdg3OaqIewF8rR0oM2a", "https://buy.stripe.com/28E28r7xiaqIgENcI70oM2b", "https://buy.stripe.com/8x2aEXeZK1UcewF7nN0oM2c", "https://buy.stripe.com/9B65kD04QaqI9cl9vV0oM2d", "https://buy.stripe.com/4gM5kD4l66asbkt5fF0oM2e", "https://buy.stripe.com/cNicN59FqeGY88h8rR0oM2f", "https://buy.stripe.com/fZu14n7xieGY3S1azZ0oM2i", "https://buy.stripe.com/6oUdR93h27ewfAJ7nN0oM2h",
    "https://buy.stripe.com/aFacN57xi2Yg4W5bE30oM2j", "https://buy.stripe.com/14A6oH7xi2Yg4W5gYn0oM2k", "https://buy.stripe.com/3cI8wPbNy56o0FP5fF0oM2l", "https://buy.stripe.com/00w7sL8BmaqIfAJgYn0oM2m", "https://buy.stripe.com/cNi28rcRC2Yg74dazZ0oM2n", "https://buy.stripe.com/aFa3cveZK6asagpcI70oM2o", "https://buy.stripe.com/7sY8wPaJu9mEewFdMb0oM2p", "https://buy.stripe.com/28E14n7xi1Uc88hbE30oM2q"
    ],
   "San Jose": [
    "https://buy.stripe.com/8x28wP2cYgP6coxcI70oM2r", "https://buy.stripe.com/fZu3cv2cY7ew2NXdMb0oM2s", "https://buy.stripe.com/8x2dR918UfL2coxdMb0oM2t", "https://buy.stripe.com/6oUaEX3h26as2NX8rR0oM2u", "https://buy.stripe.com/eVqfZhg3O7ewcox9vV0oM2v", "https://buy.stripe.com/aFa8wPaJucyQgEN9vV0oM2w", "https://buy.stripe.com/dRm8wPbNy2YgewFeQf0oM2x", "https://buy.stripe.com/00w6oHdVG6as9clgYn0oM2y",
    "https://buy.stripe.com/00w5kD9FqfL2agp8rR0oM2z", "https://buy.stripe.com/9B64gz6tefL2agp9vV0oM2A", "https://buy.stripe.com/aFaaEXdVG0Q80FP6jJ0oM2B", "https://buy.stripe.com/8x2bJ1g3O6asagp6jJ0oM2C", "https://buy.stripe.com/00wbJ15pagP69cldMb0oM2D", "https://buy.stripe.com/3cIeVd3h2cyQ9clfUj0oM2E", "https://buy.stripe.com/eVqcN53h2gP6gEN8rR0oM2F", "https://buy.stripe.com/3cI00jbNy9mE4W5dMb0oM2G"
    ],
    "New York City": [
    "https://buy.stripe.com/28E3cvcRCdCUbkt5fF0oM2H", "https://buy.stripe.com/4gM00jcRCgP6coxgYn0oM2I", "https://buy.stripe.com/6oU9ATcRCbuM3S1azZ0oM2J", "https://buy.stripe.com/aFa9AT04QdCU0FP7nN0oM2K", "https://buy.stripe.com/14A6oH8BmfL288h6jJ0oM2L", "https://buy.stripe.com/dRmeVd5pabuM9cl23t0oM2M", "https://buy.stripe.com/9B69AT18UcyQ4W5bE30oM2N", "https://buy.stripe.com/14A14n8BmgP6bktgYn0oM2O",
    "https://buy.stripe.com/8x29ATdVG6as1JT8rR0oM2P", "https://buy.stripe.com/fZu4gz18U56o74d5fF0oM2Q", "https://buy.stripe.com/aFa14n3h2aqI1JTbE30oM2R", "https://buy.stripe.com/eVqcN53h2buM1JTazZ0oM2S", "https://buy.stripe.com/7sY28r6te42kbkt0Zp0oM2T", "https://buy.stripe.com/dRm7sLbNy8iAewFdMb0oM2U", "https://buy.stripe.com/14A5kDg3OcyQbkt8rR0oM2V", "https://buy.stripe.com/4gM28r04QaqIdsBeQf0oM2W"
    ],
    "Chicago": [
    "https://buy.stripe.com/dRm14nbNybuMbktdMb0oM3t", "https://buy.stripe.com/8x2dR95pagP6agpfUj0oM3u", "https://buy.stripe.com/bJe9AT8Bm9mEcox23t0oM3F", "https://buy.stripe.com/3cIdR9dVG8iA88hgYn0oM3E", "https://buy.stripe.com/00weVdg3OaqIagpfUj0oM3D", "https://buy.stripe.com/7sY5kD9Fq7ewfAJ37x0oM3C", "https://buy.stripe.com/14A3cv7xi6asagp4bB0oM3A", "https://buy.stripe.com/5kQ00j04QfL29clazZ0oM3x",
    "https://buy.stripe.com/5kQ00j04QdCU9cl9vV0oM3w", "https://buy.stripe.com/fZu6oH4l6cyQ74dcI70oM3v", "https://buy.stripe.com/bJe28r2cY0Q80FP23t0oM3G", "https://buy.stripe.com/6oUcN52cY7ewfAJ6jJ0oM3H", "https://buy.stripe.com/8x24gz18U42k88hazZ0oM3I", "https://buy.stripe.com/5kQbJ19FqaqIfAJgYn0oM3B", "https://buy.stripe.com/aFa6oH4l656ocoxfUj0oM3z", "https://buy.stripe.com/7sY5kDg3ObuM88h37x0oM3y"
    ],
    "Phoenix": [
    "https://buy.stripe.com/7sY00jbNycyQ609dMb0oM2X", "https://buy.stripe.com/28EaEXaJudCUagpdMb0oM2Y", "https://buy.stripe.com/28EcN59Fq7ew6094bB0oM2Z", "https://buy.stripe.com/5kQ28r18UaqI3S1cI70oM30", "https://buy.stripe.com/5kQ4gzdVG2Ygbkt4bB0oM31", "https://buy.stripe.com/dRm5kDg3O1Uc3S1gYn0oM32", "https://buy.stripe.com/4gMbJ1cRC9mE0FP8rR0oM33", "https://buy.stripe.com/bJebJ1aJu0Q82NXeQf0oM34",
    "https://buy.stripe.com/9B6eVd2cYdCUagp6jJ0oM35", "https://buy.stripe.com/cNicN5g3O2Yg2NX5fF0oM36", "https://buy.stripe.com/5kQ4gzg3O56o1JT5fF0oM37", "https://buy.stripe.com/14AdR904Q6as2NX23t0oM38", "https://buy.stripe.com/4gM00j5pa56o0FPazZ0oM39", "https://buy.stripe.com/eVq28rdVG8iAagp23t0oM3a", "https://buy.stripe.com/4gMcN5aJueGYdsB9vV0oM3b", "https://buy.stripe.com/aFacN55pabuM4W58rR0oM3c"
    ],
    "Philadelphia": [
    "https://buy.stripe.com/6oU28reZK1Uc88h7nN0oM3d", "https://buy.stripe.com/cNieVd9Fq7ewdsBazZ0oM3e", "https://buy.stripe.com/14A4gz8BmcyQ74d23t0oM3f", "https://buy.stripe.com/bJe5kD7xifL29cl4bB0oM3g", "https://buy.stripe.com/8x2cN53h2buMgENcI70oM3h", "https://buy.stripe.com/eVq14n3h2fL2agp5fF0oM3i", "https://buy.stripe.com/14AbJ13h256o2NX37x0oM3j", "https://buy.stripe.com/eVq14naJu9mE1JT23t0oM3k",
    "https://buy.stripe.com/eVqeVd8Bm1UccoxazZ0oM3l", "https://buy.stripe.com/bJedR99Fq2YgdsBcI70oM3m", "https://buy.stripe.com/eVq28r6te7ewfAJ6jJ0oM3n", "https://buy.stripe.com/4gM28r3h2cyQbkt8rR0oM3o", "YOUR_LINK_FOR_Philadelphia_Paint_&_Date_2", "https://buy.stripe.com/8x200jeZKdCU4W58rR0oM3q", "https://buy.stripe.com/4gM6oH18U9mEagp5fF0oM3r", "https://buy.stripe.com/aFa5kD2cY9mEagp8rR0oM3s"
    ],
    "Miami": [
    "https://buy.stripe.com/cNi28raJueGYdsB6jJ0oM3Q", "https://buy.stripe.com/14A6oHbNy0Q874ddMb0oM3P", "https://buy.stripe.com/4gMcN5cRC1UcagpcI70oM3O", "https://buy.stripe.com/4gM6oH9Fq56o2NXbE30oM3N", "https://buy.stripe.com/6oUbJ14l6dCUbkteQf0oM3M", "https://buy.stripe.com/bJe5kDg3O0Q8ewFbE30oM3L", "https://buy.stripe.com/14AbJ1bNy8iA4W5dMb0oM3K", "https://buy.stripe.com/eVqcN5eZK56o88hdMb0oM3J",
    "https://buy.stripe.com/28E28r4l67ewbktbE30oM3U", "https://buy.stripe.com/fZu28r3h27ew88heQf0oM3Z", "https://buy.stripe.com/cNi9ATdVG0Q8ewF4bB0oM3W", "https://buy.stripe.com/00waEX4l656obkt9vV0oM3X", "https://buy.stripe.com/00w28r7xi9mEbkt0Zp0oM3Y", "https://buy.stripe.com/7sYaEX2cYeGY0FP4bB0oM3T", "https://buy.stripe.com/cNi7sL04QgP64W537x0oM3S", "https://buy.stripe.com/cNieVd2cYgP688hbE30oM3R"
 ],
 "Worcester": [
    "https://buy.stripe.com/14AbJ118UfL2coxeQf0oO3G", "https://buy.stripe.com/fZu28r2cY8iA6097nN0oO3L", "https://buy.stripe.com/5kQ14n8Bm6as9cl23t0oO3K", "https://buy.stripe.com/9B6aEX6tedCUcox37x0oO2y", "https://buy.stripe.com/9B6bJ14l67ew0FPdMb0oO2z", "https://buy.stripe.com/fZucN518U6as6097nN0oO2A", "https://buy.stripe.com/7sYaEXaJu0Q8fAJgYn0oO2B", "https://buy.stripe.com/cNi5kDeZK8iA4W5eQf0oO2C",
    "https://buy.stripe.com/00waEX04Q9mEfAJ8rR0oO3H", "https://buy.stripe.com/fZu6oH18U0Q8bkt9vV0oO3J", "https://buy.stripe.com/dRmcN58BmaqI0FP0Zp0oO3I", "https://buy.stripe.com/8x29AT6te8iAgEN7nN0oO2H", "https://buy.stripe.com/28E9AT4l68iAbkt7nN0oO2G", "https://buy.stripe.com/eVq9ATdVGaqIgEN5fF0oO2F", "https://buy.stripe.com/7sY4gz04QcyQ3S1fUj0oO2E", "https://buy.stripe.com/4gM9AT2cY6as9cl0Zp0oO2D"
],
    "Washington": [
    "https://buy.stripe.com/eVq5kD7xigP688hfUj0oO18", "https://buy.stripe.com/6oU28raJueGYfAJ37x0oO19", "https://buy.stripe.com/9B65kD04QcyQ9cl0Zp0oO1a", "https://buy.stripe.com/9B64gz04QfL274d0Zp0oO1b", "https://buy.stripe.com/6oUdR99FqaqI9clgYn0oO1c", "https://buy.stripe.com/9B600jaJu9mE9cldMb0oO1d", "https://buy.stripe.com/cNi6oHeZKfL2609dMb0oO1e", "https://buy.stripe.com/6oUaEX7xibuM3S15fF0oO1f",
    "https://buy.stripe.com/7sY6oHdVGfL288hfUj0oO1g", "https://buy.stripe.com/5kQfZh18U1UcfAJazZ0oO1h", "https://buy.stripe.com/9B6bJ118UfL2coxgYn0oO1i", "https://buy.stripe.com/cNifZh9FqcyQgEN6jJ0oO1j", "https://buy.stripe.com/fZu8wP7xiaqI4W5gYn0oO1k", "https://buy.stripe.com/eVqdR94l656o9cleQf0oO1l", "https://buy.stripe.com/6oU7sL6tedCUdsB5fF0oO1m", "https://buy.stripe.com/bJe4gz3h20Q89cl23t0oO1n"
],
    "Virginia Beach": [
    "https://buy.stripe.com/3cI28r3h21Uccox8rR0oO3M", "https://buy.stripe.com/28EfZh3h22Yg88hfUj0oO3N", "https://buy.stripe.com/fZu6oHg3O7ew1JT0Zp0oO3O", "https://buy.stripe.com/cNifZhg3O56o3S1fUj0oO2N", "https://buy.stripe.com/eVq00j04QeGYfAJ8rR0oO2O", "https://buy.stripe.com/8x28wP9Fq8iAbktdMb0oO2P", "https://buy.stripe.com/9B6eVd18U42kdsBfUj0oO2Q", "https://buy.stripe.com/dRmcN504QfL23S1azZ0oO2R",
    "https://buy.stripe.com/5kQ28r7xi2Ygbkt4bB0oO3P", "https://buy.stripe.com/3cI28rdVG56ocox23t0oO3Q", "https://buy.stripe.com/cNiaEXg3OgP6bktfUj0oO3R", "https://buy.stripe.com/28EeVdbNy6as609bE30oO3S", "https://buy.stripe.com/14A00j2cYfL2gEN8rR0oO2L", "https://buy.stripe.com/00w14nbNy6ascox4bB0oO2K", "https://buy.stripe.com/3cI5kD9FqcyQ3S123t0oO2J", "https://buy.stripe.com/aFa8wP5pa6ascox0Zp0oO2I"
],
"San Diego": [
    "https://buy.stripe.com/7sYcN5aJuaqIdsBfUj0oM1U", "https://buy.stripe.com/fZu3cv8BmfL23S1eQf0oM1V", "https://buy.stripe.com/14A14n18UaqIdsB23t0oM1W", "https://buy.stripe.com/dRm4gz4l642kfAJfUj0oM1X", "https://buy.stripe.com/fZu6oH2cYcyQ88hazZ0oM1Y", "https://buy.stripe.com/7sY9AT5pa56o4W54bB0oM1Z", "https://buy.stripe.com/28EdR95pa2Yg2NX23t0oM21", "https://buy.stripe.com/3cI9ATcRC6asewF37x0oM20",
    "https://buy.stripe.com/fZudR904Q7ewagpazZ0oM22", "https://buy.stripe.com/7sYdR918UbuMcoxazZ0oM23", "https://buy.stripe.com/28EbJ14l60Q8bktbE30oM24", "https://buy.stripe.com/bJefZh4l67ew74d8rR0oM25", "https://buy.stripe.com/5kQ4gz5pabuMdsB7nN0oM26", "https://buy.stripe.com/7sY9AT5pa56o4W54bB0oM1Z", "https://buy.stripe.com/fZu9AT7xigP62NX23t0oM28", "https://buy.stripe.com/cNi3cv8BmaqI74dfUj0oM27"
],
"Philadelphia": [
    "https://buy.stripe.com/6oU28reZK1Uc88h7nN0oM3d", "https://buy.stripe.com/cNieVd9Fq7ewdsBazZ0oM3e", "https://buy.stripe.com/14A4gz8BmcyQ74d23t0oM3f", "https://buy.stripe.com/bJe5kD7xifL29cl4bB0oM3g", "https://buy.stripe.com/8x2cN53h2buMgENcI70oM3h", "https://buy.stripe.com/eVq14n3h2fL2agp5fF0oM3i", "https://buy.stripe.com/14AbJ13h256o2NX37x0oM3j", "https://buy.stripe.com/eVq14naJu9mE1JT23t0oM3k",
    "https://buy.stripe.com/eVqeVd8Bm1UccoxazZ0oM3l", "https://buy.stripe.com/bJedR99Fq2YgdsBcI70oM3m", "https://buy.stripe.com/eVq28r6te7ewfAJ6jJ0oM3n", "https://buy.stripe.com/4gM28r3h2cyQbkt8rR0oM3o", "https://buy.stripe.com/8x2cN53h2buMgENcI70oM3h", "https://buy.stripe.com/8x200jeZKdCU4W58rR0oM3q", "https://buy.stripe.com/4gM6oH18U9mEagp5fF0oM3r", "https://buy.stripe.com/aFa5kD2cY9mEagp8rR0oM3s"
],
"Baltimore": [
    "https://buy.stripe.com/eVq28r8Bm56ocoxdMb0oN1a", "https://buy.stripe.com/dRmcN5eZK9mE1JTazZ0oN1b", "https://buy.stripe.com/fZu7sL18U8iA2NX4bB0oN1c", "https://buy.stripe.com/8x23cv8BmgP674dfUj0oN1d", "https://buy.stripe.com/7sY00jeZK1UccoxeQf0oN1e", "https://buy.stripe.com/14A28r2cYaqI2NX23t0oN1f", "https://buy.stripe.com/3cI9ATcRCbuMcox0Zp0oN1g", "https://buy.stripe.com/5kQaEXcRCgP6fAJ5fF0oN1h",
    "https://buy.stripe.com/cNibJ1dVG6asdsB7nN0oN1i", "https://buy.stripe.com/5kQfZh04QbuM1JT0Zp0oN1j", "https://buy.stripe.com/6oU14n04Q0Q8ewFdMb0oN1k", "https://buy.stripe.com/bJefZh4l642k0FPeQf0oN1l", "https://buy.stripe.com/00weVd18U0Q83S17nN0oN1m", "https://buy.stripe.com/5kQcN5eZK0Q89cleQf0oN1n", "https://buy.stripe.com/6oUcN5aJuaqIfAJbE30oN1o", "https://buy.stripe.com/bJefZhaJu9mEdsB9vV0oN1p"
],
"Boise City": [
    "https://buy.stripe.com/00w9AT18UaqI1JTdMb0oN1q", "https://buy.stripe.com/cNiaEX18U1UcfAJ8rR0oN1r", "https://buy.stripe.com/cNi6oH3h242k3S16jJ0oN1s", "https://buy.stripe.com/3cI28rbNydCU609eQf0oN1t", "https://buy.stripe.com/14A00jg3O8iA3S16jJ0oN1u", "https://buy.stripe.com/eVqcN54l6dCUgEN8rR0oN1v", "https://buy.stripe.com/bJeaEX9Fq9mE6099vV0oN1w", "https://buy.stripe.com/aFa6oH4l6fL20FP6jJ0oN1x",
    "https://buy.stripe.com/00weVdcRCaqI74dgYn0oN1F", "https://buy.stripe.com/14A6oH6te7ew1JT23t0oN1E", "https://buy.stripe.com/9B66oHdVGaqIewFbE30oN1D", "https://buy.stripe.com/eVq28r18U6as0FPeQf0oN1C", "https://buy.stripe.com/bJefZh5pa7ew2NX37x0oN1B", "https://buy.stripe.com/fZu00j04QfL2dsB6jJ0oN1A", "https://buy.stripe.com/6oU7sL6te6as0FP23t0oN1z", "https://buy.stripe.com/8x200j4l6cyQ74deQf0oN1y"
],
"Arlington": [
    "https://buy.stripe.com/cNieVdaJu1UcdsB23t0oO3C", "https://buy.stripe.com/8x2cN5cRC2Yg6094bB0oO3A", "https://buy.stripe.com/9B64gz2cYbuM88h5fF0oO3B", "https://buy.stripe.com/00wfZhg3O42kagpgYn0oO3b", "https://buy.stripe.com/28E8wPcRC8iAdsBcI70oO3a", "https://buy.stripe.com/28E4gz3h2aqIagpeQf0oO39", "https://buy.stripe.com/4gM9AT9Fq1Uc6099vV0oO38", "https://buy.stripe.com/bJe8wP8BmeGYewF37x0oO37",
    "https://buy.stripe.com/9B65kDg3OdCU74d4bB0oO3F", "https://buy.stripe.com/3cI4gzcRCfL2coxbE30oO3E", "https://buy.stripe.com/fZucN504Q1Uc2NXbE30oO3D", "https://buy.stripe.com/8x2fZh6tedCU609fUj0oO36", "https://buy.stripe.com/7sY7sLg3OfL21JTcI70oO35", "https://buy.stripe.com/9B6eVd9Fq0Q89cl37x0oO34", "https://buy.stripe.com/cNicN5dVGeGY3S10Zp0oO33", "https://buy.stripe.com/3cI4gzaJudCU3S19vV0oO32"
],
 "Boston": [
    "https://buy.stripe.com/eVq9AT18UfL26099vV0oO3p", "https://buy.stripe.com/6oUaEXg3OgP674deQf0oO3t", "https://buy.stripe.com/cNibJ1bNycyQgENfUj0oO3s", "https://buy.stripe.com/00w8wP4l6gP64W59vV0oO2x", "https://buy.stripe.com/4gM7sL4l69mE9cl7nN0oO2w", "https://buy.stripe.com/dRm4gz3h28iA74d8rR0oO2v", "https://buy.stripe.com/6oU14nbNybuMbkt0Zp0oO2u", "https://buy.stripe.com/6oU28r5pa42kagpfUj0oO2t",
    "https://buy.stripe.com/6oU6oH2cY2Ygagp8rR0oO3o", "https://buy.stripe.com/7sY14n7xi6as88hazZ0oO3q", "https://buy.stripe.com/6oU6oH3h2cyQdsBgYn0oO3r", "https://buy.stripe.com/8x2eVdcRC0Q81JT9vV0oO2s", "https://buy.stripe.com/7sYdR94l6buM1JTazZ0oO2r", "https://buy.stripe.com/8x228raJu0Q8609cI70oO2q", "https://buy.stripe.com/dRm3cvbNybuM0FPdMb0oO2p", "https://buy.stripe.com/6oU28r5pa42kagpfUj0oO2t"
],
"Atlanta": [
    "https://buy.stripe.com/fZu5kDaJu2YgdsBdMb0oO3k", "https://buy.stripe.com/28EfZhaJufL22NX9vV0oO3i", "https://buy.stripe.com/cNi4gz18U1Uc4W58rR0oO3j", "https://buy.stripe.com/6oUbJ17xi2Yg2NX7nN0oO1U", "https://buy.stripe.com/9B63cv4l62YgcoxcI70oO1V", "https://buy.stripe.com/eVq8wP18U1UccoxbE30oO1W", "https://buy.stripe.com/28E14neZKcyQgENeQf0oO1X", "https://buy.stripe.com/aFa7sLcRCcyQfAJazZ0oO1Y",
    "https://buy.stripe.com/28E9AT18U6as609eQf0oO3l", "https://buy.stripe.com/dRm6oH4l6cyQ9clazZ0oO3m", "https://buy.stripe.com/bJefZh6te42kdsBbE30oO3n", "https://buy.stripe.com/8x214n6tefL24W5gYn0oO23", "https://buy.stripe.com/8x27sL4l6dCUcox0Zp0oO22", "https://buy.stripe.com/8x27sL04QfL2dsBeQf0oO21", "https://buy.stripe.com/9B64gz04Q2Yg9cleQf0oO20", "https://buy.stripe.com/7sYbJ17xi2Yg74d37x0oO1Z"
],
    "Charlotte": [
    "https://buy.stripe.com/14AcN53h2buM88h6jJ0oN3Y", "https://buy.stripe.com/7sYbJ17xi7ewcox7nN0oN3Z", "https://buy.stripe.com/7sY8wP4l68iAfAJ6jJ0oN40", "https://buy.stripe.com/28E14ndVGeGY3S1dMb0oN41", "https://buy.stripe.com/9B600j9Fq9mEdsB8rR0oN42", "https://buy.stripe.com/9B69ATdVG6as4W56jJ0oN43", "https://buy.stripe.com/8x23cvcRCfL2ewF23t0oN44", "https://buy.stripe.com/bJedR9eZKfL288h7nN0oN45",
    "https://buy.stripe.com/6oUcN5aJuaqIagp7nN0oO05", "https://buy.stripe.com/fZu00j3h256o6095fF0oO04", "https://buy.stripe.com/5kQ6oH04Q0Q8bktbE30oO03", "https://buy.stripe.com/9B65kD5pagP6ewFfUj0oO02", "https://buy.stripe.com/8x2eVdcRC6as609bE30oO01", "https://buy.stripe.com/8x25kDaJudCU3S1azZ0oO00", "https://buy.stripe.com/8x28wP3h2eGY9cl4bB0oN47", "https://buy.stripe.com/bJe6oH3h21Uc609azZ0oN46"
],
    "Bristol": [
    "YOUR_LINK_FOR_Bristol_Chill_&_Chat_Spa_Date_1", "https://buy.stripe.com/3cIfZhg3OeGY4W5cI70oN35", "https://buy.stripe.com/eVqbJ15pagP62NXeQf0oN36", "https://buy.stripe.com/fZu7sLg3ObuMagpgYn0oN37", "https://buy.stripe.com/eVqbJ1aJuaqIcox23t0oN33", "https://buy.stripe.com/5kQ5kD18UdCU609gYn0oN31", "https://buy.stripe.com/cNi3cv2cYcyQ88heQf0oN34", "https://buy.stripe.com/aFa00j18U7ew0FPdMb0oN2Y",
    "https://buy.stripe.com/cNi8wPbNy42kdsBbE30oN38", "https://buy.stripe.com/cNifZh9FqgP6ewF6jJ0oN39", "https://buy.stripe.com/bJe5kDg3O0Q888hgYn0oN3a", "https://buy.stripe.com/8x2dR918UaqI2NXeQf0oN3b", "https://buy.stripe.com/6oU00jaJu42k6098rR0oN32", "https://buy.stripe.com/dRmcN5eZK1UcgEN4bB0oN30", "https://buy.stripe.com/fZufZh4l6aqIdsB7nN0oN2Z", "https://buy.stripe.com/14AdR97xi2Yg1JT7nN0oN2X"
],
 "Bridgeport": [
    "https://buy.stripe.com/aFaeVdeZK0Q81JT0Zp0oN3r", "https://buy.stripe.com/28E9ATcRC9mE3S123t0oN3p", "https://buy.stripe.com/dRm3cvaJucyQgEN7nN0oN3n", "https://buy.stripe.com/7sYdR93h26asagpfUj0oN3l", "https://buy.stripe.com/8x2aEX4l6aqIfAJ4bB0oN3j", "https://buy.stripe.com/3cI14n8BmbuM3S1bE30oN3h", "https://buy.stripe.com/bJe6oH5pabuM6096jJ0oN3f", "https://buy.stripe.com/28E3cvcRCaqI9clbE30oN3d",
    "https://buy.stripe.com/fZu9ATaJu56o4W5azZ0oN3q", "https://buy.stripe.com/eVq6oH3h29mE88h5fF0oN3o", "https://buy.stripe.com/3cI8wP8Bm42k609bE30oN3m", "https://buy.stripe.com/5kQeVd8Bm9mEdsB9vV0oN3k", "https://buy.stripe.com/8x25kD3h26as88h7nN0oN3i", "https://buy.stripe.com/14A6oHbNy56o1JTazZ0oN3g", "https://buy.stripe.com/5kQaEX18U0Q874d0Zp0oN3e", "https://buy.stripe.com/bJebJ1eZK2Yg609cI70oN3c"
],
    "Henderson": [
    "https://buy.stripe.com/cNidR97xi2Yg4W5azZ0oP0x", "https://buy.stripe.com/5kQ8wP04QgP6dsBgYn0oP0y", "https://buy.stripe.com/cNiaEX6teaqIfAJ4bB0oP0z", "https://buy.stripe.com/00weVdeZKeGY6095fF0oP0A", "https://buy.stripe.com/dRmfZheZK9mE9cl37x0oP0B", "https://buy.stripe.com/cNi00j2cY7ew9cl4bB0oP0C", "https://buy.stripe.com/eVq8wPeZKcyQ88h6jJ0oP0D", "https://buy.stripe.com/3cIdR95pa56o9cl9vV0oP0E",
    "https://buy.stripe.com/7sY00j04QgP6agp23t0oP0F", "https://buy.stripe.com/aFa3cv3h21Uc4W57nN0oP0G", "https://buy.stripe.com/aFa8wPg3O42kcoxfUj0oP0H", "https://buy.stripe.com/3cI00j2cY42k9cl23t0oP0M", "https://buy.stripe.com/7sY14n8BmdCUdsB6jJ0oP0L", "https://buy.stripe.com/4gM5kD9Fq6asbkt0Zp0oP0K", "https://buy.stripe.com/5kQdR9aJubuMgENazZ0oP0J", "https://buy.stripe.com/bJe6oH4l6fL2fAJazZ0oP0I"
],
"Columbus": [
    "https://buy.stripe.com/8x2bJ1cRC2YgfAJbE30oP15", "https://buy.stripe.com/28E28r04Q9mE0FPazZ0oP16", "https://buy.stripe.com/6oUdR9bNy9mE0FP0Zp0oP17&_Mingle_1", "https://buy.stripe.com/6oU28rbNy6as4W5fUj0oO2n", "https://buy.stripe.com/00w6oHdVG8iAbkt6jJ0oO2m", "https://buy.stripe.com/aFaaEX4l60Q80FPcI70oO2l", "https://buy.stripe.com/cNi3cvcRC2Yg74d4bB0oO2k", "https://buy.stripe.com/aFa5kD7xi56o9cl4bB0oO2j",
    "https://buy.stripe.com/8x2bJ1cRC2YgfAJbE30oP15", "https://buy.stripe.com/28E28r04Q9mE0FPazZ0oP16", "https://buy.stripe.com/6oUdR9bNy9mE0FP0Zp0oP17&_Mingle_2", "https://buy.stripe.com/7sYdR99FqaqIdsB4bB0oO2i", "https://buy.stripe.com/3cI4gzg3O1Uc88h9vV0oO2h", "https://buy.stripe.com/14AcN52cY8iAfAJ9vV0oO2g", "https://buy.stripe.com/14A6oHeZKdCUewF37x0oO2f", "https://buy.stripe.com/fZufZh18U8iAdsBcI70oO2e"
],
"Denver": [
    "https://buy.stripe.com/3cI7sLg3OaqIdsB7nN0oO0m", "https://buy.stripe.com/7sY6oH4l62YgewFazZ0oO0n", "https://buy.stripe.com/eVq6oHbNy0Q80FP9vV0oO0o", "https://buy.stripe.com/8x2eVd4l642k88hfUj0oO0p", "https://buy.stripe.com/eVq4gz9Fq56oagpeQf0oO0q", "https://buy.stripe.com/aFa7sLg3O9mEcoxgYn0oO0r", "https://buy.stripe.com/fZu3cveZK7ewagpcI70oO0s", "https://buy.stripe.com/dRm7sL7xifL2fAJ6jJ0oO0t",
    "https://buy.stripe.com/28E00jbNy6asbkt37x0oO0u", "https://buy.stripe.com/bJe4gz5pafL2agpdMb0oO0v", "https://buy.stripe.com/4gM8wP8Bm8iA2NXeQf0oO0w", "https://buy.stripe.com/bJe9ATg3OeGYfAJ6jJ0oO0x", "https://buy.stripe.com/aFacN5g3ObuM0FP7nN0oO0y", "https://buy.stripe.com/3cI4gz04QbuMbktfUj0oO0z", "https://buy.stripe.com/eVqbJ1eZK9mE609eQf0oO0A", "https://buy.stripe.com/6oU00j5paaqI9clfUj0oO0B"
],
"Jackson": [
    "https://buy.stripe.com/aFa14n3h27ew3S1azZ0oN2W", "https://buy.stripe.com/eVq8wPg3O9mE0FP4bB0oN2G", "https://buy.stripe.com/aFacN59Fq7ew9cl4bB0oN2D", "https://buy.stripe.com/7sYfZhdVGaqIagp4bB0oN2B", "https://buy.stripe.com/eVq5kDeZKaqIcoxfUj0oN2z", "https://buy.stripe.com/00wcN5dVGeGY88hdMb0oN2x", "https://buy.stripe.com/4gM14naJu9mEewF5fF0oN2v", "https://buy.stripe.com/fZu5kD2cY56o0FP8rR0oN2t",
    "https://buy.stripe.com/aFa14n3h27ew3S1azZ0oN2W", "https://buy.stripe.com/00w00jcRC2Yg2NXfUj0oN2E", "https://buy.stripe.com/eVq9AT18U0Q8fAJfUj0oN2C", "https://buy.stripe.com/9B628reZK1Uc2NX4bB0oN2A", "https://buy.stripe.com/cNi3cv8Bm0Q89cl9vV0oN2y", "https://buy.stripe.com/5kQ4gz3h20Q8cox0Zp0oN2w", "https://buy.stripe.com/dRmeVd6te56o0FPazZ0oN2u", "https://buy.stripe.com/14A5kD8Bm2Ygagp5fF0oN2s"
],
"Jersey City": [
    "https://buy.stripe.com/9B63cv04QcyQ9cl6jJ0oO1E", "https://buy.stripe.com/dRmfZh8Bm1Uc0FP37x0oO1F", "https://buy.stripe.com/3cI14ng3OdCUagpeQf0oO1G", "https://buy.stripe.com/3cIaEX6te7ewdsBfUj0oO1H", "https://buy.stripe.com/cNi4gz8Bm1UcgEN7nN0oO1I", "https://buy.stripe.com/8x24gz9Fq56o0FP0Zp0oO1J", "https://buy.stripe.com/aFadR93h29mE0FP9vV0oO1K", "https://buy.stripe.com/9B64gz4l6buM74d9vV0oO1L",
    "https://buy.stripe.com/9B6eVd3h20Q82NXazZ0oO1M", "https://buy.stripe.com/eVqeVd4l6eGYewF37x0oO1N", "https://buy.stripe.com/00w9AT4l68iA88h4bB0oO1O", "https://buy.stripe.com/fZu5kD04QbuMfAJ37x0oO1P", "https://buy.stripe.com/9B68wPg3O7ew74dgYn0oO1Q", "https://buy.stripe.com/3cIcN5aJubuMagpazZ0oO1R", "https://buy.stripe.com/3cI9AT4l6aqI3S1dMb0oO1S", "https://buy.stripe.com/3cIbJ1cRC0Q8gENeQf0oO1T"
],
"Las Vegas": [
    "https://buy.stripe.com/5kQ9ATcRC42kgENazZ0oP09", "https://buy.stripe.com/7sY6oH6te42kbkt0Zp0oP0a", "https://buy.stripe.com/7sYdR9cRC42kfAJ6jJ0oP0b", "https://buy.stripe.com/cNifZhg3ObuMgEN37x0oP0c", "https://buy.stripe.com/4gM4gzcRCeGYgEN5fF0oP0d", "https://buy.stripe.com/14A00j2cY2Yg4W5bE30oP0e", "https://buy.stripe.com/7sY7sL9Fq2Yg74ddMb0oP0f", "https://buy.stripe.com/aFa9AT7xi8iAgENbE30oP01",
    "https://buy.stripe.com/eVq28rdVGdCUdsB5fF0oP08", "https://buy.stripe.com/6oUbJ17xi0Q83S1gYn0oP07", "https://buy.stripe.com/dRmcN5bNydCU0FPfUj0oP06", "https://buy.stripe.com/5kQcN54l6fL22NX7nN0oP05", "https://buy.stripe.com/28E5kDcRC7ew2NXdMb0oP04", "https://buy.stripe.com/dRm7sL2cY0Q81JT23t0oP03", "https://buy.stripe.com/7sYcN56tefL288h7nN0oP02", "https://buy.stripe.com/9B6eVdcRC0Q8fAJfUj0oP0g"
],
"Little Rock": [
    "https://buy.stripe.com/4gM5kD6tedCU3S10Zp0oN24", "https://buy.stripe.com/eVq9AT2cY42kfAJbE30oN25", "https://buy.stripe.com/eVq9ATbNyfL2agp8rR0oN26", "https://buy.stripe.com/cNifZhbNycyQcox23t0oN27", "https://buy.stripe.com/dRm9AT2cY8iAewF0Zp0oN28", "https://buy.stripe.com/3cIfZh8BmbuM74d4bB0oN29", "https://buy.stripe.com/4gMfZhdVG2Yg1JT37x0oN2a", "https://buy.stripe.com/8x2eVd3h2cyQ88h9vV0oN2b",
    "https://buy.stripe.com/5kQ7sL04QfL29clgYn0oN23", "https://buy.stripe.com/dRm00j7xi9mEagp8rR0oN22", "https://buy.stripe.com/8x26oHdVG6as88h6jJ0oN21", "https://buy.stripe.com/cNi4gzdVG6asgENazZ0oN20", "https://buy.stripe.com/dRm5kDg3OdCU9cl4bB0oN1Z", "https://buy.stripe.com/6oU7sLcRC56oewF7nN0oN1Y", "https://buy.stripe.com/4gM4gzcRC7ew1JT37x0oN1X", "https://buy.stripe.com/00waEX3h2cyQ3S17nN0oN1W"
],
"New Orleans": [
    "https://buy.stripe.com/4gM9AT04Q42k4W5cI70oN1G", "https://buy.stripe.com/14A6oH5pa1UccoxgYn0oN1H", "https://buy.stripe.com/4gM3cv2cY6as88hcI70oN1I", "https://buy.stripe.com/cNifZhg3OgP6ewF37x0oN1J", "https://buy.stripe.com/14A00j9Fq6ascoxfUj0oN1K", "https://buy.stripe.com/4gM9ATdVGfL2bktazZ0oN1L", "https://buy.stripe.com/4gM00j7xifL288heQf0oN1M", "https://buy.stripe.com/14A8wP3h242kdsB7nN0oN1N",
    "https://buy.stripe.com/7sY5kD5pa56oagp8rR0oN1O", "https://buy.stripe.com/8x27sL6te8iA3S18rR0oN1P", "https://buy.stripe.com/fZu6oHbNydCUgENcI70oN1Q", "https://buy.stripe.com/28E28rbNyeGY9clfUj0oN1R", "https://buy.stripe.com/cNifZh6te8iA88hbE30oN1S", "https://buy.stripe.com/3cI00jeZKcyQ0FPeQf0oN1T", "https://buy.stripe.com/aFa3cv3h2cyQ2NXeQf0oN1U", "https://buy.stripe.com/6oU28r9FqbuMgEN4bB0oN1V"
],
"Washington": [
    "https://buy.stripe.com/eVq5kD7xigP688hfUj0oO18", "https://buy.stripe.com/6oU28raJueGYfAJ37x0oO19", "https://buy.stripe.com/9B65kD04QcyQ9cl0Zp0oO1a", "https://buy.stripe.com/9B64gz04QfL274d0Zp0oO1b", "https://buy.stripe.com/6oUdR99FqaqI9clgYn0oO1c", "https://buy.stripe.com/9B600jaJu9mE9cldMb0oO1d", "https://buy.stripe.com/cNi6oHeZKfL2609dMb0oO1e", "https://buy.stripe.com/6oUaEX7xibuM3S15fF0oO1f",
    "https://buy.stripe.com/7sY6oHdVGfL288hfUj0oO1g", "https://buy.stripe.com/5kQfZh18U1UcfAJazZ0oO1h", "https://buy.stripe.com/9B6bJ118UfL2coxgYn0oO1i", "https://buy.stripe.com/cNifZh9FqcyQgEN6jJ0oO1j", "https://buy.stripe.com/fZu8wP7xiaqI4W5gYn0oO1k", "https://buy.stripe.com/eVqdR94l656o9cleQf0oO1l", "https://buy.stripe.com/6oU7sL6tedCUdsB5fF0oO1m", "https://buy.stripe.com/bJe4gz3h20Q89cl23t0oO1n"
],
"Newark": [
    "https://buy.stripe.com/bJedR93h256o88hgYn0oO1o", "https://buy.stripe.com/eVqbJ104QgP62NX7nN0oO1p", "https://buy.stripe.com/cNi5kD4l69mE6095fF0oO1q", "https://buy.stripe.com/eVq28rdVG6as9clfUj0oO1r", "https://buy.stripe.com/00wfZhcRC56o0FP6jJ0oO1s", "https://buy.stripe.com/eVq14ncRC8iAagp7nN0oO1t", "https://buy.stripe.com/9B6bJ104Q1UcgEN9vV0oO1u", "https://buy.stripe.com/14AeVd4l66as1JTbE30oO1v",
    "https://buy.stripe.com/5kQ7sLeZKcyQcox9vV0oO1w", "https://buy.stripe.com/00wfZh6teaqI1JT0Zp0oO1x", "https://buy.stripe.com/14A00jdVGfL23S17nN0oO1y", "https://buy.stripe.com/3cIeVddVGdCUewF0Zp0oO1z", "https://buy.stripe.com/cNicN59Fq42k88hfUj0oO1A", "https://buy.stripe.com/7sY4gz9Fq7ewagpcI70oO1B", "https://buy.stripe.com/7sYfZh9Fq7ew4W56jJ0oO1C", "https://buy.stripe.com/4gM14n7xiaqI9cl8rR0oO1D"
],
"Paterson": [
    "https://buy.stripe.com/4gM9ATaJu1Uc2NXfUj0oO3c", "https://buy.stripe.com/28E7sLg3OeGY0FP5fF0oO3d", "https://buy.stripe.com/3cI28r7xi2YgcoxbE30oO3h", "https://buy.stripe.com/3cI7sL4l6aqI0FP0Zp0oO29", "https://buy.stripe.com/28EcN5g3O2YgdsB7nN0oO2a", "https://buy.stripe.com/8x228r6teeGYagpazZ0oO2b", "https://buy.stripe.com/bJedR92cYcyQ6090Zp0oO2c", "https://buy.stripe.com/7sY8wP3h28iA9cl37x0oO2d",
    "https://buy.stripe.com/3cI4gz3h26asagpdMb0oO3f", "https://buy.stripe.com/14AcN58Bm42kdsB7nN0oO3g", "https://buy.stripe.com/3cI28r7xi2YgcoxbE30oO3h", "https://buy.stripe.com/28E3cv8BmaqI2NXdMb0oO24", "https://buy.stripe.com/7sY3cv4l67ewgENfUj0oO25", "https://buy.stripe.com/bJe00jeZKcyQ88hdMb0oO26", "https://buy.stripe.com/28EeVd2cY2Yg88hgYn0oO27", "https://buy.stripe.com/9B68wPcRCgP60FP7nN0oO28"
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
    "Denver": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Las%20Vegas%20(1).webp?width=400",
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
     "Las Vegas": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media/Las%20Vegas%20(1).webp?width=400",

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


// NOTE: The cityData constant has been removed from this file.
// It is now only defined in auth.js, which is loaded first.


const themeKeys = Object.keys(themedEventDetails);
let eventIdCounter = 1;
const allEvents = [];
const cityLinkCounters = {};

const firstEventDates = [17, 18, 19]; 
const secondEventDates = [24, 25, 26]; 
const eventYear = 2025;
const eventMonth = 9; 

// This check ensures cityData exists before trying to use it.
if (typeof cityData !== 'undefined' && cityData) {
    cityData.forEach(cityInfo => {
        const cityName = cityInfo.city;
        cityLinkCounters[cityName] = 0;

        const dateGroups = [firstEventDates, secondEventDates];

        dateGroups.forEach((dateGroup, weekIndex) => {
            themeKeys.forEach((theme, themeIndex) => {
                const eventId = eventIdCounter++;
                let stripeLink = `https://buy.stripe.com/test_placeholder_for_event_${eventId}`;

                if (cityStripeLinks[cityName]) {
                    const linkIndex = cityLinkCounters[cityName];
                    stripeLink = cityStripeLinks[cityName][linkIndex] || stripeLink;
                    cityLinkCounters[cityName]++;
                }

                const eventDay = dateGroup[themeIndex % dateGroup.length];
                const date = new Date(eventYear, eventMonth, eventDay);
                const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

                const availableTimes = eventTimes[theme] || ["Time TBD"];
                const timeSlot = weekIndex === 1 && availableTimes.length > 1 
                               ? availableTimes[1] 
                               : availableTimes[0];

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
            loginLink.classList.add('hidden');
            signupLink.classList.add('hidden');
            userNameDisplay.classList.remove('hidden');
            signOutButton.classList.remove('hidden');
            signOutButton.addEventListener('click', signOut);

            mobileUserName.textContent = `Welcome, ${displayName}`;
            mobileAuthLinks.classList.add('hidden');
            mobileUserInfo.classList.remove('hidden');
            mobileSignOutButton.addEventListener('click', signOut);
            
        } else {
            loginLink.classList.remove('hidden');
            signupLink.classList.remove('hidden');
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
        const card = document.createElement('a');
        card.href = event.stripeLink.startsWith('http') ? event.stripeLink : `purchase.html?eventId=${event.id}`;
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
                     <div class="text-center bg-violet-600 text-white font-bold py-3 px-6 rounded-full w-full hover:bg-violet-700 transition-colors duration-300">Get Ticket</div>
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
    const { eventsHeading, eventsSubheading } = getElements();

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

function setupProfilePage() {
    const { profileContent } = getElements();
    if (!profileContent) return;
    
    const authModule = import('./auth.js');
    authModule.then(({ auth, db, doc, getDoc, onAuthStateChanged }) => {
        onAuthStateChanged(auth, user => {
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                getDoc(userDocRef).then(docSnap => {
                    if (docSnap.exists()) {
                        const userData = docSnap.data();
                        profileContent.innerHTML = `
                            <div class="border-b border-slate-200 pb-4">
                                <h3 class="text-lg font-medium text-slate-500">Full Name</h3>
                                <p class="text-xl text-slate-900">${userData.name}</p>
                            </div>
                            <div class="border-b border-slate-200 pb-4">
                                <h3 class="text-lg font-medium text-slate-500">Email</h3>
                                <p class="text-xl text-slate-900">${userData.email}</p>
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
                }).catch(error => {
                    console.error("Error fetching user data:", error);
                    profileContent.innerHTML = `<p class="text-center text-red-500">Error loading your profile.</p>`;
                });
            } else {
                profileContent.innerHTML = `<p class="text-center">Please <a href="login.html" class="text-violet-600 font-bold">log in</a> to view your profile.</p>`;
            }
        });
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
});
