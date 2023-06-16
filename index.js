const {readFileSync, readFile,} = require('fs');
const {writeFile, writeFileSync} = require('fs')


const data = JSON.parse( readFileSync('./problem1.json',{encoding:'utf-8'}))

data.height = 10;
data.weight = 5;
data.name = 'Fluffyy';

const fluffyyCatFriends = data.catFriends;

fluffyyCatFriends.forEach(cat => {
    console.log('Activities of', cat.name, ':', cat.activities)
});

const catFriendsNames = fluffyyCatFriends.map(cat => cat.name);
    console.log('Cat Friends Names:', catFriendsNames);

let totalWeight = 0;
for(const cat of fluffyyCatFriends){
    totalWeight += cat.weight;
}
console.log('Total weight of cat friends:', totalWeight)

let numOfActivities = data.activities.length;
for(const cat of fluffyyCatFriends){
    numOfActivities += cat.activities.length;
}
console.log('Total activities:', numOfActivities);

for(const cat of fluffyyCatFriends){
    if(cat.name == 'bar'){
        cat.activities.push('knock bottles of the tables','meowing');
        cat.furcolor = 'black';
    }
    
    if(cat.name == 'foo')
    cat.activities.push('eat cat nip','climb trees');
}

const newData = JSON.stringify(data);
writeFileSync('output.json', newData, 'utf-8');