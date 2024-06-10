"use strict";
const population = [
    ...document.querySelectorAll(".population")
];
const totalPopulation = document.querySelector(".total-population");
const averagePopulation = document.querySelector(".average-population");
const totalValue = population.reduce((acc, rec)=>{
    return acc + +rec.innerText.split(",").join("");
}, 0);
const averageValue = totalValue / population.length;
totalPopulation.textContent = totalValue.toLocaleString("en-US");
averagePopulation.textContent = averageValue.toLocaleString("en-US");

//# sourceMappingURL=index.f75de5e1.js.map