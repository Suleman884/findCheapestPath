function findCheapestPath(airports, start, end) {
    airports.sort((a, b) => a.cost - b.cost);
    
    console.log(airports)

    const minCosts = { [start]: 0 };
    const paths = { [start]: [start] };
    
    console.log('minCost==>', minCosts)
    console.log('paths==>>', paths)

    for (const { start: from, end: to, cost } of airports) {
        if (minCosts[from] !== undefined) {
            const newCost = minCosts[from] + cost;
            if (newCost < (minCosts[to] || Infinity)) {
                minCosts[to] = newCost;
                paths[to] = [...paths[from], to];
            }
        }
    }

    return minCosts[end] !== undefined ? { path: paths[end], cost: minCosts[end] } : { path: null, cost: Infinity };
}

const airports = [
    { start: 'ISB', end: 'LHR', cost: 1000 },
    { start: 'LHR', end: 'NYC', cost: 750 },
    { start: 'CBS', end: 'NYC', cost: 775 },
    { start: 'ISB', end: 'CBS', cost: 575 },
    { start: 'CBS', end: 'GRC', cost: 731 },
    { start: 'NYC', end: 'GRC', cost: 459 }
];

console.log(findCheapestPath(airports, 'CBS', 'NYC'));
