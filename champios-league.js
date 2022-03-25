const https = require('https');

const fetch = (url) => new Promise((resolve, reject) => {
    https.get(url, (resp) => {
        let data = ''
        resp.on("data", (chunk) => {
            data += chunk;
        })
        resp.on("end", () => {
            resolve(JSON.parse(data))
        })
    })
})

const getUrl = (year, page) => `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${page}`

const getMatches = async (year, page) => {
    const url = getUrl(year, page)
    const result = await fetch(url)
        .then((resp) => resp)
    return result
}

async function getTeams(year, k) {
    // write your code here
    // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>
    const matchPerTeam = {}
    let totalPage = 1
    for(let i = 1; i <= totalPage; i++) {
        const {total_pages, data} = await getMatches(year, i)
        totalPage = total_pages
        data.forEach(({ team1, team2 }) => {
            matchPerTeam[team1] = (matchPerTeam[team1] || 0) + 1
            matchPerTeam[team2] = (matchPerTeam[team2] || 0) + 1
        })
    }
    const result = Object.entries(matchPerTeam)
    .filter(([_team, matches]) => matches >= k)
    .map(([team]) => team)
    .sort()
    
    
    return result
}

// Champions League