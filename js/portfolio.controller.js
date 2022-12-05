'use strict'

function onInit() {
    renderPortfolio()
}

function renderPortfolio() {
    var portfolios = getPortfolios()
    var strHtmls = portfolios.map(portfolio => `
    
    <div class="col-md-4 col-sm-6 portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/${portfolio.pic}.png" alt="">
              </a>
              <div class="portfolio-caption">
                <h4>${portfolio.name}</h4>
                <p class="text-muted">Illustration</p>
              </div>
            </div>
    `
    )
    document.querySelector('.row.proj-container').innerHTML = strHtmls.join('')
}
 
    function onReadPortfolio(carId) {
    var car = getPortfolioById(portfolioId)
    var elModal = document.querySelector('.modal')
    elModal.querySelector('h3').innerText = car.vendor
    elModal.querySelector('h4 span').innerText = car.maxSpeed
    elModal.querySelector('p').innerText = car.desc
    elModal.classList.add('open')
}