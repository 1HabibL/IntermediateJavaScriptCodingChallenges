function calculateSum(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    const finalAnswer = arr.map(planet => {
        const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow((earthRadius + planet.avgAlt), 3) / GM));
        return { name: planet.name, orbitalPeriod: orbitalPeriod };
    });

    return finalAnswer;
}

console.log([{ name: "sputnik", avgAlt: 35873.5553 }]);