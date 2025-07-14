const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises;

// URLs to fetch
const urls = {
    crops: 'https://fogu.com/hm/animal_parade/crops.php',
    livestock: 'https://fogu.com/hm/animal_parade/livestock.php',
    poultry: 'https://fogu.com/hm/animal_parade/poultry.php',
    trees: 'https://fogu.com/hm/animal_parade/trees.php',
    mining: 'https://fogu.com/hm/animal_parade/mining.php',
    wildItems: 'https://fogu.com/hm/animal_parade/wild_items.php',
    cooking: 'https://fogu.com/hm/animal_parade/cooking_recipes.php'
};

async function fetchPage(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${url}:`, error.message);
        return null;
    }
}

function extractCropsData(html) {
    const $ = cheerio.load(html);
    const crops = {
        spring: [],
        summer: [],
        fall: [],
        winter: []
    };
    
    // Look for crop tables
    $('table').each((i, table) => {
        const $table = $(table);
        const $rows = $table.find('tr');
        
        $rows.each((j, row) => {
            const $cells = $(row).find('td');
            if ($cells.length >= 4) {
                const name = $cells.eq(0).text().trim();
                const season = $cells.eq(1).text().trim().toLowerCase();
                const growthDays = parseInt($cells.eq(2).text().trim()) || 0;
                const price = parseInt($cells.eq(3).text().trim().replace(/[^\d]/g, '')) || 0;
                
                // Find image
                const $img = $cells.eq(0).find('img');
                const imageUrl = $img.length ? $img.attr('src') : null;
                
                if (name && price > 0) {
                    const crop = {
                        name,
                        growthDays,
                        prices: {
                            decent: price,
                            good: Math.round(price * 1.2),
                            perfect: Math.round(price * 1.5),
                            shining: Math.round(price * 2)
                        },
                        regrows: false,
                        imageUrl
                    };
                    
                    if (season.includes('spring')) crops.spring.push(crop);
                    if (season.includes('summer')) crops.summer.push(crop);
                    if (season.includes('fall')) crops.fall.push(crop);
                    if (season.includes('winter')) crops.winter.push(crop);
                }
            }
        });
    });
    
    return crops;
}

function extractAnimalData(html) {
    const $ = cheerio.load(html);
    const animals = {
        eggs: [],
        milk: [],
        other: []
    };
    
    // Look for animal product tables
    $('table').each((i, table) => {
        const $table = $(table);
        const $rows = $table.find('tr');
        
        $rows.each((j, row) => {
            const $cells = $(row).find('td');
            if ($cells.length >= 3) {
                const name = $cells.eq(0).text().trim();
                const price = parseInt($cells.eq(1).text().trim().replace(/[^\d]/g, '')) || 0;
                const frequency = $cells.eq(2).text().trim() || 'Daily';
                
                // Find image
                const $img = $cells.eq(0).find('img');
                const imageUrl = $img.length ? $img.attr('src') : null;
                
                if (name && price > 0) {
                    const product = {
                        name,
                        prices: {
                            decent: price,
                            good: Math.round(price * 1.5),
                            perfect: Math.round(price * 2),
                            shining: Math.round(price * 3)
                        },
                        frequency,
                        imageUrl
                    };
                    
                    if (name.toLowerCase().includes('egg')) {
                        animals.eggs.push(product);
                    } else if (name.toLowerCase().includes('milk')) {
                        animals.milk.push(product);
                    } else {
                        animals.other.push(product);
                    }
                }
            }
        });
    });
    
    return animals;
}

function extractMiningData(html) {
    const $ = cheerio.load(html);
    const mining = {
        ores: [],
        refined: [],
        gems: [],
        wonderfuls: [],
        special: []
    };
    
    // Look for mining tables
    $('table').each((i, table) => {
        const $table = $(table);
        const $rows = $table.find('tr');
        
        $rows.each((j, row) => {
            const $cells = $(row).find('td');
            if ($cells.length >= 2) {
                const name = $cells.eq(0).text().trim();
                const price = parseInt($cells.eq(1).text().trim().replace(/[^\d]/g, '')) || 0;
                const rarity = $cells.eq(2) ? $cells.eq(2).text().trim() : '';
                const floors = $cells.eq(3) ? $cells.eq(3).text().trim() : '';
                
                // Find image
                const $img = $cells.eq(0).find('img');
                const imageUrl = $img.length ? $img.attr('src') : null;
                
                if (name && price > 0) {
                    const item = {
                        name,
                        price,
                        imageUrl
                    };
                    
                    if (rarity) item.rarity = rarity;
                    if (floors) item.floors = floors;
                    
                    // Categorize based on name or other properties
                    if (name.toLowerCase().includes('ore')) {
                        mining.ores.push(item);
                    } else if (name.toLowerCase().includes('wonderful')) {
                        mining.wonderfuls.push(item);
                    } else if (['diamond', 'ruby', 'emerald', 'sapphire', 'topaz', 'amethyst'].some(gem => name.toLowerCase().includes(gem))) {
                        mining.gems.push(item);
                    } else if (['iron', 'copper', 'silver', 'gold'].some(metal => name.toLowerCase().includes(metal))) {
                        mining.refined.push(item);
                    } else {
                        mining.special.push(item);
                    }
                }
            }
        });
    });
    
    return mining;
}

function extractTreeData(html) {
    const $ = cheerio.load(html);
    const trees = [];
    
    // Look for tree tables
    $('table').each((i, table) => {
        const $table = $(table);
        const $rows = $table.find('tr');
        
        $rows.each((j, row) => {
            const $cells = $(row).find('td');
            if ($cells.length >= 3) {
                const name = $cells.eq(0).text().trim();
                const season = $cells.eq(1).text().trim();
                const price = parseInt($cells.eq(2).text().trim().replace(/[^\d]/g, '')) || 0;
                const growthYears = parseInt($cells.eq(3) ? $cells.eq(3).text().trim() : '2') || 2;
                
                // Find image
                const $img = $cells.eq(0).find('img');
                const imageUrl = $img.length ? $img.attr('src') : null;
                
                if (name && price > 0) {
                    const fruit = {
                        name,
                        season,
                        growthYears,
                        prices: {
                            decent: price,
                            good: Math.round(price * 1.5),
                            perfect: Math.round(price * 2),
                            shining: Math.round(price * 3)
                        },
                        imageUrl
                    };
                    
                    trees.push(fruit);
                }
            }
        });
    });
    
    return trees;
}

function extractForageData(html) {
    const $ = cheerio.load(html);
    const forage = {
        herbs: [],
        mushrooms: [],
        berries: []
    };
    
    // Look for forage tables
    $('table').each((i, table) => {
        const $table = $(table);
        const $rows = $table.find('tr');
        
        $rows.each((j, row) => {
            const $cells = $(row).find('td');
            if ($cells.length >= 2) {
                const name = $cells.eq(0).text().trim();
                const price = parseInt($cells.eq(1).text().trim().replace(/[^\d]/g, '')) || 0;
                const seasons = $cells.eq(2) ? $cells.eq(2).text().trim() : '';
                const location = $cells.eq(3) ? $cells.eq(3).text().trim() : '';
                
                // Find image
                const $img = $cells.eq(0).find('img');
                const imageUrl = $img.length ? $img.attr('src') : null;
                
                if (name && price > 0) {
                    const item = {
                        name,
                        price,
                        imageUrl
                    };
                    
                    if (seasons) item.seasons = seasons.split(',').map(s => s.trim());
                    if (location) item.location = location;
                    
                    // Categorize based on name
                    if (name.toLowerCase().includes('herb')) {
                        forage.herbs.push(item);
                    } else if (name.toLowerCase().includes('mushroom')) {
                        forage.mushrooms.push(item);
                    } else if (name.toLowerCase().includes('berry')) {
                        forage.berries.push(item);
                    } else {
                        // Default to herbs for unknown items
                        forage.herbs.push(item);
                    }
                }
            }
        });
    });
    
    return forage;
}

async function main() {
    console.log('Fetching data from Fogu.com...');
    
    const results = {};
    
    // Fetch crops data
    console.log('Fetching crops...');
    const cropsHtml = await fetchPage(urls.crops);
    if (cropsHtml) {
        results.crops = extractCropsData(cropsHtml);
    }
    
    // Fetch livestock data
    console.log('Fetching livestock...');
    const livestockHtml = await fetchPage(urls.livestock);
    if (livestockHtml) {
        results.livestock = extractAnimalData(livestockHtml);
    }
    
    // Fetch poultry data
    console.log('Fetching poultry...');
    const poultryHtml = await fetchPage(urls.poultry);
    if (poultryHtml) {
        results.poultry = extractAnimalData(poultryHtml);
    }
    
    // Fetch trees data
    console.log('Fetching trees...');
    const treesHtml = await fetchPage(urls.trees);
    if (treesHtml) {
        results.trees = extractTreeData(treesHtml);
    }
    
    // Fetch mining data
    console.log('Fetching mining...');
    const miningHtml = await fetchPage(urls.mining);
    if (miningHtml) {
        results.mining = extractMiningData(miningHtml);
    }
    
    // Fetch wild items data
    console.log('Fetching wild items...');
    const wildItemsHtml = await fetchPage(urls.wildItems);
    if (wildItemsHtml) {
        results.forage = extractForageData(wildItemsHtml);
    }
    
    // Save results
    await fs.writeFile('fogu_data.json', JSON.stringify(results, null, 2));
    console.log('Data saved to fogu_data.json');
    
    return results;
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = { main, extractCropsData, extractAnimalData, extractMiningData, extractTreeData, extractForageData };