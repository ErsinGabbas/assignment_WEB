document.getElementById('moreBtn').addEventListener('click', function() {
    displayCityInfo();
});

const cityInfo = {
    name: "Аксу",
    population: 72270,
    description: "Он известен своей промышленностью и инфраструктурой, представленными Аксуской ГРЭС и Аксуским заводом ферросплавов. Кроме того, город располагает весьма развитой социальной сферой, а также является призером республиканского конкурса среди малых городов \"Экологически чистый город\".",
    getDetails: function() {
        return `${this.name} - город с населением ${this.population} человек. ${this.description}`;
    }
};

function displayCityInfo() {
    const cityInfoContainer = document.getElementById('cityInfoContainer');
    cityInfoContainer.innerHTML = `<p>${cityInfo.getDetails()}</p>`;
}

document.querySelector('h1').addEventListener('mouseover', animateTitle);
