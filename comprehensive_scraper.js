const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const urls = {
    crops: 'https://fogu.com/hm/animal_parade/crops.php',
    livestock: 'https://fogu.com/hm/animal_parade/livestock.php',
    poultry: 'https://fogu.com/hm/animal_parade/poultry.php',
    trees: 'https://fogu.com/hm/animal_parade/trees.php',
    mining: 'https://fogu.com/hm/animal_parade/mining.php',
    wildItems: 'https://fogu.com/hm/animal_parade/wild_items.php',
    cooking: 'https://fogu.com/hm/animal_parade/cooking_recipes.php'
};

async function scrapePage(url) {
    try {
        const response = await axios.get(url);
        return cheerio.load(response.data);
    } catch (error) {
        console.error(`Error scraping ${url}:`, error.message);
        return null;
    }
}

async function scrapeCrops() {
    console.log('Scraping crops...');
    const $ = await scrapePage(urls.crops);
    if (!$) return [];

    const crops = [];
    const seasons = ['spring', 'summer', 'fall', 'winter'];
    
    seasons.forEach(season => {
        $(`table:contains("${season.charAt(0).toUpperCase() + season.slice(1)}")`).each((i, table) => {
            $(table).find('tr').each((j, row) => {
                const cells = $(row).find('td');
                if (cells.length >= 4) {
                    const name = $(cells[0]).text().trim();
                    const growthDays = parseInt($(cells[1]).text().trim()) || 0;
                    const decentPrice = parseInt($(cells[2]).text().trim()) || 0;
                    const goodPrice = parseInt($(cells[3]).text().trim()) || 0;
                    const perfectPrice = parseInt($(cells[4]).text().trim()) || 0;
                    const shiningPrice = parseInt($(cells[5]).text().trim()) || 0;
                    const regrows = $(cells[6]).text().trim().toLowerCase().includes('yes');
                    const regrowDays = regrows ? parseInt($(cells[7]).text().trim()) || 0 : 0;
                    
                    if (name && name !== 'Crop' && name !== 'Name') {
                        crops.push({
                            name,
                            season,
                            growthDays,
                            prices: {
                                decent: decentPrice,
                                good: goodPrice,
                                perfect: perfectPrice,
                                shining: shiningPrice
                            },
                            regrows,
                            regrowDays,
                            imageUrl: `https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/${name.toLowerCase().replace(/\s+/g, '')}.jpg`
                        });
                    }
                }
            });
        });
    });

    return crops;
}

async function scrapeLivestock() {
    console.log('Scraping livestock...');
    const $ = await scrapePage(urls.livestock);
    if (!$) return [];

    const livestock = [];
    
    $('table').each((i, table) => {
        $(table).find('tr').each((j, row) => {
            const cells = $(row).find('td');
            if (cells.length >= 4) {
                const name = $(cells[0]).text().trim();
                const decentPrice = parseInt($(cells[1]).text().trim()) || 0;
                const goodPrice = parseInt($(cells[2]).text().trim()) || 0;
                const perfectPrice = parseInt($(cells[3]).text().trim()) || 0;
                const shiningPrice = parseInt($(cells[4]).text().trim()) || 0;
                const frequency = $(cells[5]).text().trim();
                
                if (name && name !== 'Product' && name !== 'Name') {
                    livestock.push({
                        name,
                        prices: {
                            decent: decentPrice,
                            good: goodPrice,
                            perfect: perfectPrice,
                            shining: shiningPrice
                        },
                        frequency,
                        imageUrl: `https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/${name.toLowerCase().replace(/\s+/g, '')}.jpg`
                    });
                }
            }
        });
    });

    return livestock;
}

async function scrapePoultry() {
    console.log('Scraping poultry...');
    const $ = await scrapePage(urls.poultry);
    if (!$) return [];

    const poultry = [];
    
    $('table').each((i, table) => {
        $(table).find('tr').each((j, row) => {
            const cells = $(row).find('td');
            if (cells.length >= 4) {
                const name = $(cells[0]).text().trim();
                const decentPrice = parseInt($(cells[1]).text().trim()) || 0;
                const goodPrice = parseInt($(cells[2]).text().trim()) || 0;
                const perfectPrice = parseInt($(cells[3]).text().trim()) || 0;
                const shiningPrice = parseInt($(cells[4]).text().trim()) || 0;
                const frequency = $(cells[5]).text().trim();
                
                if (name && name !== 'Product' && name !== 'Name') {
                    poultry.push({
                        name,
                        prices: {
                            decent: decentPrice,
                            good: goodPrice,
                            perfect: perfectPrice,
                            shining: shiningPrice
                        },
                        frequency,
                        imageUrl: `https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/${name.toLowerCase().replace(/\s+/g, '')}.jpg`
                    });
                }
            }
        });
    });

    return poultry;
}

async function scrapeTrees() {
    console.log('Scraping trees...');
    const $ = await scrapePage(urls.trees);
    if (!$) return [];

    const trees = [];
    
    $('table').each((i, table) => {
        $(table).find('tr').each((j, row) => {
            const cells = $(row).find('td');
            if (cells.length >= 4) {
                const name = $(cells[0]).text().trim();
                const season = $(cells[1]).text().trim();
                const growthYears = parseInt($(cells[2]).text().trim()) || 0;
                const decentPrice = parseInt($(cells[3]).text().trim()) || 0;
                const goodPrice = parseInt($(cells[4]).text().trim()) || 0;
                const perfectPrice = parseInt($(cells[5]).text().trim()) || 0;
                const shiningPrice = parseInt($(cells[6]).text().trim()) || 0;
                
                if (name && name !== 'Fruit' && name !== 'Name') {
                    trees.push({
                        name,
                        season,
                        growthYears,
                        prices: {
                            decent: decentPrice,
                            good: goodPrice,
                            perfect: perfectPrice,
                            shining: shiningPrice
                        },
                        imageUrl: `https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/${name.toLowerCase().replace(/\s+/g, '')}.jpg`
                    });
                }
            }
        });
    });

    return trees;
}

async function scrapeMining() {
    console.log('Scraping mining...');
    const $ = await scrapePage(urls.mining);
    if (!$) return { ores: [], refined: [], gems: [], wonderfuls: [], special: [] };

    const mining = { ores: [], refined: [], gems: [], wonderfuls: [], special: [] };
    
    // Scrape ores
    $('table:contains("Ores")').each((i, table) => {
        $(table).find('tr').each((j, row) => {
            const cells = $(row).find('td');
            if (cells.length >= 3) {
                const name = $(cells[0]).text().trim();
                const price = parseInt($(cells[1]).text().trim()) || 0;
                const rarity = $(cells[2]).text().trim();
                const floors = $(cells[3]).text().trim();
                
                if (name && name !== 'Ore' && name !== 'Name') {
                    mining.ores.push({
                        name,
                        price,
                        rarity,
                        floors,
                        imageUrl: `https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/${name.toLowerCase().replace(/\s+/g, '')}.jpg`
                    });
                }
            }
        });
    });

    // Scrape refined metals
    $('table:contains("Refined")').each((i, table) => {
        $(table).find('tr').each((j, row) => {
            const cells = $(row).find('td');
            if (cells.length >= 2) {
                const name = $(cells[0]).text().trim();
                const price = parseInt($(cells[1]).text().trim()) || 0;
                const requires = $(cells[2]).text().trim();
                
                if (name && name !== 'Metal' && name !== 'Name') {
                    mining.refined.push({
                        name,
                        price,
                        requires,
                        imageUrl: `https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/${name.toLowerCase().replace(/\s+/g, '')}.jpg`
                    });
                }
            }
        });
    });

    // Scrape gems
    $('table:contains("Gems")').each((i, table) => {
        $(table).find('tr').each((j, row) => {
            const cells = $(row).find('td');
            if (cells.length >= 2) {
                const name = $(cells[0]).text().trim();
                const price = parseInt($(cells[1]).text().trim()) || 0;
                const rarity = $(cells[2]).text().trim();
                
                if (name && name !== 'Gem' && name !== 'Name') {
                    mining.gems.push({
                        name,
                        price,
                        rarity,
                        imageUrl: `https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/${name.toLowerCase().replace(/\s+/g, '')}.jpg`
                    });
                }
            }
        });
    });

    // Scrape wonderfuls
    $('table:contains("Wonderful")').each((i, table) => {
        $(table).find('tr').each((j, row) => {
            const cells = $(row).find('td');
            if (cells.length >= 2) {
                const name = $(cells[0]).text().trim();
                const price = parseInt($(cells[1]).text().trim()) || 0;
                const refinedGem = $(cells[2]).text().trim();
                
                if (name && name !== 'Wonderful' && name !== 'Name') {
                    mining.wonderfuls.push({
                        name,
                        price,
                        refinedGem,
                        imageUrl: `https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/${name.toLowerCase().replace(/\s+/g, '')}.jpg`
                    });
                }
            }
        });
    });

    // Scrape special items
    $('table:contains("Special")').each((i, table) => {
        $(table).find('tr').each((j, row) => {
            const cells = $(row).find('td');
            if (cells.length >= 2) {
                const name = $(cells[0]).text().trim();
                const price = parseInt($(cells[1]).text().trim()) || 0;
                
                if (name && name !== 'Item' && name !== 'Name') {
                    mining.special.push({
                        name,
                        price,
                        imageUrl: `https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/${name.toLowerCase().replace(/\s+/g, '')}.jpg`
                    });
                }
            }
        });
    });

    return mining;
}

async function scrapeWildItems() {
    console.log('Scraping wild items...');
    const $ = await scrapePage(urls.wildItems);
    if (!$) return { herbs: [], mushrooms: [], berries: [] };

    const wildItems = { herbs: [], mushrooms: [], berries: [] };
    
    // Scrape herbs
    $('table:contains("Herbs")').each((i, table) => {
        $(table).find('tr').each((j, row) => {
            const cells = $(row).find('td');
            if (cells.length >= 3) {
                const name = $(cells[0]).text().trim();
                const price = parseInt($(cells[1]).text().trim()) || 0;
                const seasons = $(cells[2]).text().trim().split(',').map(s => s.trim());
                const effect = $(cells[3]).text().trim();
                
                if (name && name !== 'Herb' && name !== 'Name') {
                    wildItems.herbs.push({
                        name,
                        price,
                        seasons,
                        effect,
                        imageUrl: `https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/${name.toLowerCase().replace(/\s+/g, '')}.jpg`
                    });
                }
            }
        });
    });

    // Scrape mushrooms
    $('table:contains("Mushrooms")').each((i, table) => {
        $(table).find('tr').each((j, row) => {
            const cells = $(row).find('td');
            if (cells.length >= 3) {
                const name = $(cells[0]).text().trim();
                const price = parseInt($(cells[1]).text().trim()) || 0;
                const seasons = $(cells[2]).text().trim().split(',').map(s => s.trim());
                const location = $(cells[3]).text().trim();
                
                if (name && name !== 'Mushroom' && name !== 'Name') {
                    wildItems.mushrooms.push({
                        name,
                        price,
                        seasons,
                        location,
                        imageUrl: `https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/${name.toLowerCase().replace(/\s+/g, '')}.jpg`
                    });
                }
            }
        });
    });

    // Scrape berries
    $('table:contains("Berries")').each((i, table) => {
        $(table).find('tr').each((j, row) => {
            const cells = $(row).find('td');
            if (cells.length >= 3) {
                const name = $(cells[0]).text().trim();
                const price = parseInt($(cells[1]).text().trim()) || 0;
                const seasons = $(cells[2]).text().trim().split(',').map(s => s.trim());
                const effect = $(cells[3]).text().trim();
                
                if (name && name !== 'Berry' && name !== 'Name') {
                    wildItems.berries.push({
                        name,
                        price,
                        seasons,
                        effect,
                        imageUrl: `https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/${name.toLowerCase().replace(/\s+/g, '')}.jpg`
                    });
                }
            }
        });
    });

    return wildItems;
}

async function scrapeCooking() {
    console.log('Scraping cooking recipes...');
    const $ = await scrapePage(urls.cooking);
    if (!$) return { cooked: [], processed: [], perfumes: [], beverages: [] };

    const cooking = { cooked: [], processed: [], perfumes: [], beverages: [] };
    
    // Scrape cooked items
    $('table:contains("Cooked")').each((i, table) => {
        $(table).find('tr').each((j, row) => {
            const cells = $(row).find('td');
            if (cells.length >= 3) {
                const name = $(cells[0]).text().trim();
                const price = $(cells[1]).text().trim();
                const method = $(cells[2]).text().trim();
                const energy = $(cells[3]).text().trim();
                
                if (name && name !== 'Recipe' && name !== 'Name') {
                    cooking.cooked.push({
                        name,
                        price,
                        method,
                        energy,
                        imageUrl: `https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/${name.toLowerCase().replace(/\s+/g, '')}.jpg`
                    });
                }
            }
        });
    });

    // Scrape processed items
    $('table:contains("Processed")').each((i, table) => {
        $(table).find('tr').each((j, row) => {
            const cells = $(row).find('td');
            if (cells.length >= 2) {
                const name = $(cells[0]).text().trim();
                const price = $(cells[1]).text().trim();
                const requires = $(cells[2]).text().trim();
                const qualityDependent = $(cells[3]).text().trim().toLowerCase().includes('yes');
                const agingRequired = $(cells[4]).text().trim().toLowerCase().includes('yes');
                
                if (name && name !== 'Product' && name !== 'Name') {
                    cooking.processed.push({
                        name,
                        price,
                        requires,
                        qualityDependent,
                        agingRequired,
                        imageUrl: `https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/${name.toLowerCase().replace(/\s+/g, '')}.jpg`
                    });
                }
            }
        });
    });

    // Scrape perfumes
    $('table:contains("Perfumes")').each((i, table) => {
        $(table).find('tr').each((j, row) => {
            const cells = $(row).find('td');
            if (cells.length >= 2) {
                const name = $(cells[0]).text().trim();
                const price = parseInt($(cells[1]).text().trim()) || 0;
                const requires = $(cells[2]).text().trim();
                
                if (name && name !== 'Perfume' && name !== 'Name') {
                    cooking.perfumes.push({
                        name,
                        price,
                        requires,
                        imageUrl: `https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/${name.toLowerCase().replace(/\s+/g, '')}.jpg`
                    });
                }
            }
        });
    });

    // Scrape beverages
    $('table:contains("Beverages")').each((i, table) => {
        $(table).find('tr').each((j, row) => {
            const cells = $(row).find('td');
            if (cells.length >= 2) {
                const name = $(cells[0]).text().trim();
                const price = $(cells[1]).text().trim();
                const requires = $(cells[2]).text().trim();
                
                if (name && name !== 'Beverage' && name !== 'Name') {
                    cooking.beverages.push({
                        name,
                        price,
                        requires,
                        imageUrl: `https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/${name.toLowerCase().replace(/\s+/g, '')}.jpg`
                    });
                }
            }
        });
    });

    return cooking;
}

async function scrapeAll() {
    console.log('Starting comprehensive scraping...');
    
    const [crops, livestock, poultry, trees, mining, wildItems, cooking] = await Promise.all([
        scrapeCrops(),
        scrapeLivestock(),
        scrapePoultry(),
        scrapeTrees(),
        scrapeMining(),
        scrapeWildItems(),
        scrapeCooking()
    ]);

    const allData = {
        crops,
        livestock,
        poultry,
        trees,
        mining,
        wildItems,
        cooking
    };

    fs.writeFileSync('comprehensive_fogu_data.json', JSON.stringify(allData, null, 2));
    console.log('Comprehensive data saved to comprehensive_fogu_data.json');
    
    return allData;
}

scrapeAll().catch(console.error);