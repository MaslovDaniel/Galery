'use strict'

var gProjects = [
    {
        id: makeId(),
        name: "Ball game",
        pic: "ball game",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    },
    {
        id: makeId(),
        name: "Car shop",
        pic: 'car shop',
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    },
    {
        id: makeId(),
        name: "Chess",
        pic: 'chess',
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    },
    {
        id: makeId(),
        name: "Picture Game",
        pic: 'pictur game',
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    },
    {
        id: makeId(),
        name: "Space Invedores",
        pic: 'space invedores',
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    },
    {
        id: makeId(),
        name: "Touch Nums",
        pic: 'touch nums',
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    }
]



function getPortfolios() {
    return gProjects

}



function getPortfolioById(portfolioId) {
    const portfolio = gProjects.find(portfolio => portfolioId === portfolio.id)
    return portfolio
}

function makeId(length = 6) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var txt = ''
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function makeLorem(wordCount = 100) {
    const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (wordCount > 0) {
        wordCount--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}