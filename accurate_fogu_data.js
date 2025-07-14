// Accurate Harvest Moon Animal Parade data from Fogu.com
const accurateData = {
    crops: {
        spring: [
            {name: "Turnip", growthDays: 4, prices: {decent: 170, good: 204, perfect: 255, shining: 340}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/turnip.jpg"},
            {name: "Potato", growthDays: 7, prices: {decent: 190, good: 228, perfect: 285, shining: 380}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/potato.jpg"},
            {name: "Strawberry", growthDays: 9, prices: {decent: 180, good: 216, perfect: 270, shining: 360}, regrows: true, regrowDays: 3, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/strawberry.jpg"},
            {name: "Cabbage", growthDays: 14, prices: {decent: 280, good: 336, perfect: 420, shining: 560}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/cabbage.jpg"},
            {name: "Cucumber", growthDays: 9, prices: {decent: 120, good: 144, perfect: 180, shining: 240}, regrows: true, regrowDays: 3, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/cucumber.jpg"},
            {name: "Radish", growthDays: 5, prices: {decent: 150, good: 180, perfect: 225, shining: 300}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/radish.jpg"},
            {name: "Lettuce", growthDays: 6, prices: {decent: 130, good: 156, perfect: 195, shining: 260}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/lettuce.jpg"},
            {name: "Green Pepper", growthDays: 8, prices: {decent: 110, good: 132, perfect: 165, shining: 220}, regrows: true, regrowDays: 3, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/greenpepper.jpg"}
        ],
        summer: [
            {name: "Corn", growthDays: 14, prices: {decent: 160, good: 192, perfect: 240, shining: 320}, regrows: true, regrowDays: 4, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/corn.jpg"},
            {name: "Tomato", growthDays: 9, prices: {decent: 120, good: 144, perfect: 180, shining: 240}, regrows: true, regrowDays: 3, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/tomato.jpg"},
            {name: "Onion", growthDays: 7, prices: {decent: 150, good: 180, perfect: 225, shining: 300}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/onion.jpg"},
            {name: "Pineapple", growthDays: 20, prices: {decent: 500, good: 600, perfect: 750, shining: 1000}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/pineapple.jpg"},
            {name: "Bell Pepper", growthDays: 9, prices: {decent: 130, good: 156, perfect: 195, shining: 260}, regrows: true, regrowDays: 3, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/bellpepper.jpg"},
            {name: "Watermelon", growthDays: 16, prices: {decent: 300, good: 360, perfect: 450, shining: 600}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/watermelon.jpg"},
            {name: "Pumpkin", growthDays: 12, prices: {decent: 200, good: 240, perfect: 300, shining: 400}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/pumpkin.jpg"},
            {name: "Peach", growthDays: 10, prices: {decent: 140, good: 168, perfect: 210, shining: 280}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/peach.jpg"},
            {name: "Banana", growthDays: 18, prices: {decent: 220, good: 264, perfect: 330, shining: 440}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/banana.jpg"},
            {name: "Coffee Beans", growthDays: 15, prices: {decent: 180, good: 216, perfect: 270, shining: 360}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/coffeebeans.jpg"}
        ],
        fall: [
            {name: "Eggplant", growthDays: 9, prices: {decent: 130, good: 156, perfect: 195, shining: 260}, regrows: true, regrowDays: 3, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/eggplant.jpg"},
            {name: "Carrot", growthDays: 7, prices: {decent: 160, good: 192, perfect: 240, shining: 320}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/carrot.jpg"},
            {name: "Sweet Potato", growthDays: 5, prices: {decent: 140, good: 168, perfect: 210, shining: 280}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/sweetpotato.jpg"},
            {name: "Rice", growthDays: 10, prices: {decent: 210, good: 252, perfect: 315, shining: 420}, regrows: false, requiresPaddy: true, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/rice.jpg"},
            {name: "Spinach", growthDays: 6, prices: {decent: 110, good: 132, perfect: 165, shining: 220}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/spinach.jpg"},
            {name: "Broccoli", growthDays: 11, prices: {decent: 180, good: 216, perfect: 270, shining: 360}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/broccoli.jpg"},
            {name: "Cauliflower", growthDays: 13, prices: {decent: 220, good: 264, perfect: 330, shining: 440}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/cauliflower.jpg"},
            {name: "Yam", growthDays: 8, prices: {decent: 170, good: 204, perfect: 255, shining: 340}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/yam.jpg"},
            {name: "Apple", growthDays: 12, prices: {decent: 200, good: 240, perfect: 300, shining: 400}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/apple.jpg"},
            {name: "Grape", growthDays: 14, prices: {decent: 190, good: 228, perfect: 285, shining: 380}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/grape.jpg"},
            {name: "Chestnut", growthDays: 16, prices: {decent: 160, good: 192, perfect: 240, shining: 320}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/chestnut.jpg"},
            {name: "Olive", growthDays: 18, prices: {decent: 140, good: 168, perfect: 210, shining: 280}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/olive.jpg"}
        ],
        winter: [
            {name: "Turnip", growthDays: 4, prices: {decent: 170, good: 204, perfect: 255, shining: 340}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/turnip.jpg"},
            {name: "Winter Melon", growthDays: 15, prices: {decent: 250, good: 300, perfect: 375, shining: 500}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/wintermelon.jpg"},
            {name: "Buckwheat", growthDays: 6, prices: {decent: 120, good: 144, perfect: 180, shining: 240}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/buckwheat.jpg"},
            {name: "Orange", growthDays: 10, prices: {decent: 180, good: 216, perfect: 270, shining: 360}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/orange.jpg"},
            {name: "Lemon", growthDays: 8, prices: {decent: 160, good: 192, perfect: 240, shining: 320}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/lemon.jpg"},
            {name: "Cherry", growthDays: 12, prices: {decent: 200, good: 240, perfect: 300, shining: 400}, regrows: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/cherry.jpg"}
        ]
    },
    
    animalProducts: {
        eggs: [
            {name: "Chicken Egg", prices: {decent: 50, good: 75, perfect: 100, shining: 150}, frequency: "Daily", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/chickenegg.jpg"},
            {name: "Duck Egg", prices: {decent: 80, good: 120, perfect: 160, shining: 240}, frequency: "Daily", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/duckegg.jpg"},
            {name: "Ostrich Egg", prices: {decent: 350, good: 525, perfect: 700, shining: 1050}, frequency: "Every 3 days", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/ostrichegg.jpg"},
            {name: "Golden Egg", prices: {decent: 1000, good: 1500, perfect: 2000, shining: 3000}, frequency: "Rare", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/goldenegg.jpg"}
        ],
        milk: [
            {name: "Cow Milk", prices: {decent: 170, good: 255, perfect: 340, shining: 510}, frequency: "Daily", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/milk_cow.jpg"},
            {name: "Goat Milk", prices: {decent: 140, good: 210, perfect: 280, shining: 420}, frequency: "Daily", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/milk_goat.jpg"},
            {name: "Sheep Milk", prices: {decent: 120, good: 180, perfect: 240, shining: 360}, frequency: "Daily", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/milk_sheep.jpg"},
            {name: "Buffalo Milk", prices: {decent: 200, good: 300, perfect: 400, shining: 600}, frequency: "Daily", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/milk_buffalo.jpg"}
        ],
        other: [
            {name: "Wool", prices: {decent: 620, good: 930, perfect: 1240, shining: 1860}, frequency: "Weekly", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/wool.jpg"},
            {name: "Honey", prices: {decent: 50, good: 75, perfect: 100, shining: 150}, frequency: "Every 3 days", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/honey.jpg"},
            {name: "Silk", prices: {decent: 660, good: 990, perfect: 1320, shining: 1980}, frequency: "Weekly", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/silk.jpg"},
            {name: "Angora Wool", prices: {decent: 800, good: 1200, perfect: 1600, shining: 2400}, frequency: "Weekly", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/angorawool.jpg"},
            {name: "Alpaca Wool", prices: {decent: 900, good: 1350, perfect: 1800, shining: 2700}, frequency: "Weekly", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/alpacawool.jpg"}
        ]
    },
    
    treeFruits: [
        {name: "Apple", season: "Fall", growthYears: 2, prices: {decent: 100, good: 150, perfect: 200, shining: 300}, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/apple.jpg"},
        {name: "Cherry", season: "Spring", growthYears: 2, prices: {decent: 120, good: 180, perfect: 240, shining: 360}, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/cherry.jpg"},
        {name: "Orange", season: "Winter", growthYears: 2, prices: {decent: 110, good: 165, perfect: 220, shining: 330}, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/orange.jpg"},
        {name: "Chestnut", season: "Fall", growthYears: 3, prices: {decent: 80, good: 120, perfect: 160, shining: 240}, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/chestnut.jpg"},
        {name: "Coffee Beans", season: "Summer", growthYears: 3, prices: {decent: 90, good: 135, perfect: 180, shining: 270}, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/coffeebeans.jpg"},
        {name: "Olive", season: "Fall", growthYears: 3, prices: {decent: 70, good: 105, perfect: 140, shining: 210}, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/olive.jpg"},
        {name: "Peach", season: "Summer", growthYears: 2, prices: {decent: 130, good: 195, perfect: 260, shining: 390}, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/peach.jpg"},
        {name: "Grape", season: "Fall", growthYears: 2, prices: {decent: 95, good: 143, perfect: 190, shining: 285}, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/grape.jpg"},
        {name: "Banana", season: "Summer", growthYears: 3, prices: {decent: 85, good: 128, perfect: 170, shining: 255}, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/banana.jpg"},
        {name: "Lemon", season: "Winter", growthYears: 2, prices: {decent: 105, good: 158, perfect: 210, shining: 315}, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/lemon.jpg"}
    ],
    
    mining: {
        ores: [
            {name: "Junk Ore", price: 10, rarity: "Common", floors: "1-19", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/junkore.jpg"},
            {name: "Iron Ore", price: 20, rarity: "Common", floors: "20-39", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/ironore.jpg"},
            {name: "Copper Ore", price: 30, rarity: "Common", floors: "40-59", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/copperore.jpg"},
            {name: "Silver Ore", price: 50, rarity: "Uncommon", floors: "60-79", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/silverore.jpg"},
            {name: "Gold Ore", price: 80, rarity: "Uncommon", floors: "80-99", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/goldore.jpg"},
            {name: "Rare Ore", price: 150, rarity: "Rare", floors: "100+", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/rareore.jpg"},
            {name: "Platinum Ore", price: 200, rarity: "Very Rare", floors: "150+", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/platinumore.jpg"},
            {name: "Mithril Ore", price: 300, rarity: "Legendary", floors: "200+", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/mithrilore.jpg"}
        ],
        refined: [
            {name: "Iron", price: 50, requires: "Iron Ore", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/iron.jpg"},
            {name: "Copper", price: 70, requires: "Copper Ore", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/copper.jpg"},
            {name: "Silver", price: 100, requires: "Silver Ore", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/silver.jpg"},
            {name: "Gold", price: 150, requires: "Gold Ore", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/gold.jpg"},
            {name: "Rare Metal", price: 240, requires: "Rare Ore", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/raremetal.jpg"},
            {name: "Platinum", price: 350, requires: "Platinum Ore", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/platinum.jpg"},
            {name: "Mithril", price: 500, requires: "Mithril Ore", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/mithril.jpg"}
        ],
        gems: [
            {name: "Diamond", price: 1330, rarity: "Very Rare", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/diamond.jpg"},
            {name: "Ruby", price: 830, rarity: "Rare", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/ruby.jpg"},
            {name: "Emerald", price: 690, rarity: "Rare", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/emerald.jpg"},
            {name: "Sapphire", price: 620, rarity: "Rare", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/sapphire.jpg"},
            {name: "Topaz", price: 340, rarity: "Uncommon", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/topaz.jpg"},
            {name: "Amethyst", price: 280, rarity: "Uncommon", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/amethyst.jpg"},
            {name: "Opal", price: 450, rarity: "Rare", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/opal.jpg"},
            {name: "Aquamarine", price: 380, rarity: "Uncommon", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/aquamarine.jpg"}
        ],
        wonderfuls: [
            {name: "Red Wonderful", price: 30, refinedGem: "Ruby", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/redwonderful.jpg"},
            {name: "Blue Wonderful", price: 30, refinedGem: "Sapphire", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/bluewonderful.jpg"},
            {name: "Green Wonderful", price: 30, refinedGem: "Emerald", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/greenwonderful.jpg"},
            {name: "Yellow Wonderful", price: 30, refinedGem: "Topaz", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/yellowwonderful.jpg"},
            {name: "Purple Wonderful", price: 30, refinedGem: "Amethyst", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/purplewonderful.jpg"},
            {name: "White Wonderful", price: 30, refinedGem: "Diamond", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/whitewonderful.jpg"},
            {name: "Orange Wonderful", price: 30, refinedGem: "Opal", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/orangewonderful.jpg"},
            {name: "Teal Wonderful", price: 30, refinedGem: "Aquamarine", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/tealwonderful.jpg"}
        ],
        special: [
            {name: "Small Pearl", price: 90, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/smallpearl.jpg"},
            {name: "Medium Pearl", price: 120, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/mediumpearl.jpg"},
            {name: "Large Pearl", price: 150, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/largepearl.jpg"},
            {name: "Rock Salt", price: 50, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/rocksalt.jpg"},
            {name: "Crystal", price: 200, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/crystal.jpg"},
            {name: "Mystic Stone", price: 500, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/mysticstone.jpg"}
        ]
    },
    
    forage: {
        herbs: [
            {name: "Medicinal Herb", price: 40, seasons: ["Spring", "Summer"], effect: "Medium Energy", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/medicinalherb.jpg"},
            {name: "Antidote Herb", price: 60, seasons: ["Spring", "Fall"], effect: "Cures Poison", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/antidoteherb.jpg"},
            {name: "Lavender", price: 50, seasons: ["Summer"], effect: "Calming", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/lavender.jpg"},
            {name: "Mint", price: 45, seasons: ["Spring", "Summer"], effect: "Refreshing", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/mint.jpg"},
            {name: "Rosemary", price: 55, seasons: ["Spring", "Fall"], effect: "Memory", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/rosemary.jpg"},
            {name: "Sage", price: 65, seasons: ["Summer", "Fall"], effect: "Wisdom", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/sage.jpg"},
            {name: "Thyme", price: 48, seasons: ["Spring", "Summer"], effect: "Courage", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/thyme.jpg"},
            {name: "Basil", price: 52, seasons: ["Summer"], effect: "Love", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/basil.jpg"}
        ],
        mushrooms: [
            {name: "Mushroom", price: 70, seasons: ["Fall"], location: "Forest", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/mushroom.jpg"},
            {name: "Poison Mushroom", price: 30, seasons: ["Fall"], location: "Forest", warning: "Causes Poison", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/poisonmushroom.jpg"},
            {name: "Truffle", price: 200, seasons: ["Fall"], location: "Forest", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/truffle.jpg"},
            {name: "Shiitake", price: 120, seasons: ["Fall"], location: "Forest", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/shiitake.jpg"},
            {name: "Enoki", price: 90, seasons: ["Fall"], location: "Forest", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/enoki.jpg"},
            {name: "Chanterelle", price: 150, seasons: ["Fall"], location: "Forest", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/chanterelle.jpg"}
        ],
        berries: [
            {name: "Wild Berry", price: 50, seasons: ["Summer", "Fall"], effect: "Low Energy", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/wildberry.jpg"},
            {name: "Blueberry", price: 60, seasons: ["Summer"], effect: "Medium Energy", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/blueberry.jpg"},
            {name: "Strawberry", price: 80, seasons: ["Spring"], effect: "High Energy", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/wildstrawberry.jpg"},
            {name: "Raspberry", price: 70, seasons: ["Summer"], effect: "Medium Energy", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/raspberry.jpg"},
            {name: "Blackberry", price: 65, seasons: ["Summer", "Fall"], effect: "Medium Energy", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/blackberry.jpg"},
            {name: "Cranberry", price: 75, seasons: ["Fall"], effect: "Medium Energy", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/cranberry.jpg"}
        ]
    },
    
    artisan: {
        cooked: [
            {name: "Pizza", price: 792, method: "Oven", energy: "High", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/pizza.jpg"},
            {name: "Sushi", price: "290-1833", method: "Cutting Board", energy: "Variable", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/sushi.jpg"},
            {name: "Cake", price: 680, method: "Oven", energy: "High", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/cake.jpg"},
            {name: "Bread", price: 180, method: "Oven", energy: "Medium", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/bread.jpg"},
            {name: "Curry", price: 420, method: "Pot", energy: "High", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/curry.jpg"},
            {name: "Stew", price: 350, method: "Pot", energy: "High", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/stew.jpg"},
            {name: "Soup", price: 280, method: "Pot", energy: "Medium", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/soup.jpg"},
            {name: "Pasta", price: 320, method: "Pot", energy: "Medium", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/pasta.jpg"}
        ],
        processed: [
            {name: "Mayonnaise", price: "75-225", requires: "Egg", qualityDependent: true, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/mayonnaise.jpg"},
            {name: "Butter", price: "255-765", requires: "Milk", qualityDependent: true, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/butter.jpg"},
            {name: "Cheese", price: "510-1530", requires: "Milk", qualityDependent: true, agingRequired: true, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/cheese.jpg"},
            {name: "Yogurt", price: "340-1020", requires: "Milk", qualityDependent: true, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/yogurt.jpg"},
            {name: "Flour", price: 50, requires: "Wheat", qualityDependent: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/flour.jpg"},
            {name: "Sugar", price: 80, requires: "Sugar Cane", qualityDependent: false, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/sugar.jpg"}
        ],
        perfumes: [
            {name: "Lavender Perfume", price: 390, requires: "Lavender", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/lavenderperfume.jpg"},
            {name: "Rose Perfume", price: 780, requires: "Rose", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/roseperfume.jpg"},
            {name: "Premium Perfume", price: 1710, requires: "Rare Flowers", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/premiumperfume.jpg"}
        ],
        beverages: [
            {name: "Coffee", price: 200, requires: "Coffee Beans", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/coffee.jpg"},
            {name: "Tea", price: 150, requires: "Tea Leaves", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/tea.jpg"},
            {name: "Juice", price: "120-400", requires: "Various Fruits", imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/juice.jpg"},
            {name: "Wine", price: "300-900", requires: "Grapes", qualityDependent: true, imageUrl: "https://23409588f3e6b520e202-1fd01abd62a9d4f09fad4d757fc45540.ssl.cf2.rackcdn.com/wine.jpg"}
        ]
    }
};

module.exports = accurateData;