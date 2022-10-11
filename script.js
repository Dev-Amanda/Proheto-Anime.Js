anime({
    targets: '.one',
    translateX: '100%',
    duration: 1000,
    delay: anime.stagger(1000),
    easing: 'easeOutCubic'
})
anime({
    targets: '.intro',
    translateX: '100%',
    duration: 1000,
    easing: 'easeOutCubic'
})
anime({
    targets: 'header',
    translateX: [-1000, 0],
    delay: anime.stagger(1000, { direction: 'reverse' }),
    opacity: [0, 1]
})
anime({
    targets: 'nav ul li',
    delay: anime.stagger(500, { direction: 'reverse' }),
    opacity: [0, 1],
    translateX: {
        value: 00, duration: 800, delay: 0,
    },
    rotate: {
        value: 360, duration: 800, delay: 800,
    },
    scale: {
        value: 1.3, duration: 800, delay: 1600,
    }

})
anime({
    targets: '.part1 h1',
    translateX: [-1000, 0],
    duration: 1000,
    opacity: [0, 1]
})
anime({
    targets: '.part1 p',
    translateX: [-1000, 0],
    duration: 1300,
    opacity: [0, 1]
}, '-=4')

anime({
    targets: '.part1 a',
    translateX: [-1000, 0],
    duration: 1500,
    opacity: [0, 1]
})
anime({
    targets: '.part2 img',
    scale: [0, 1],
    duration: 2000,
    delay: 5
})


function svgFirst() {
    var animation = anime({
        targets: '#path',
        d: [
            { value: "M241.5 644C100.5 754 0 1070 0 1070V0.999282C244.985 -1.2491 1093.5 0.99928 1093.5 0.99928C1093.5 108.291 736.5 59 665 315.5C625.304 457.906 409.361 513.045 241.5 644Z" },
            {
                value:
                    "M656.5 960C515.5 1070 0 1080.5 0 1080.5V0.999281C244.985 -1.2491 1305 0.999282 1305 0.999282C1305 74 956 279.5 863.5 406.5C776.463 525.999 824.361 829.045 656.5 960Z",
            },
            {
                value: "M1053.5 1001.5C912.5 1111.5 0 1081.5 0 1081.5V1.99929C244.985 -0.249097 1916 0.500006 1916 0.500006C1916 73.5007 1313 191.5 1258.5 432.5C1225.89 576.695 1221.36 870.545 1053.5 1001.5Z"
            },
        ],
        duration: 2000,
        easing: 'spring(1, 80, 10, 0)',
    });

    var animate = anime({
        targets: '#path2',
        d: [
            {
                value: "M1766 483C1812.58 379.5 1857 351.167 1923 324.5V1082H1071.5C1093.5 912.5 1175 842.5 1229.5 828.5C1360.83 794.764 1467.5 813.5 1578.5 722C1689.5 630.5 1734.5 553 1766 483Z"
            },
            {
                value: "M1785 576C1797.23 522.553 1857 456.667 1923 430V1082H1185.5C1233.5 979.5 1348.26 947.964 1387.5 929.5C1481 885.5 1545 867.5 1599 843.5C1630.07 829.691 1747 742 1785 576Z"
            },

            {
                value: "M1832.5 595.5C1832.5 540.671 1857 418.667 1923 392V1082H1676.5C1695 1066.5 1709 1054.25 1726.5 1038C1774.85 993.105 1794 969.5 1807.5 917.5C1821 865.5 1832.5 720 1832.5 595.5Z"
            },
        ],
        duration: 2000,
        easing: 'spring(1, 80, 10, 0)',
    })
}


document.getElementById('click').addEventListener('click', () => {
    svgFirst();
})