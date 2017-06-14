import 'whatwg-fetch'
import cheerio from 'cheerio'

export const getWorldEconomicOutlook = 
    () => {
        return (dispatch) => { 
            return fetch('http://www.imf.org/en/publications/weo')
                .then( resp => resp.text() )
                .then( text => parse(text) )
                .then( items => dispatch({ 
                    type : 'ARTICLES_LOAD_FULFILLED',
                    articles : items
                }))
        }
    }

export const getGlobalFinacialStabilityReport = 
    () => {
        return (dispatch) => { 
            return fetch('http://www.imf.org/en/publications/gfsr')
                .then( resp => resp.text() )
                .then( text => parse(text) )
                .then( items => dispatch({ 
                    type : 'ARTICLES_LOAD_FULFILLED',
                    articles : items
                }))
        }
    }

export const getFiscalMonitor = 
    () => {
        return (dispatch) => { 
            return fetch('http://www.imf.org/en/publications/fm')
                .then( resp => resp.text() )
                .then( text => parse(text) )
                .then( items => dispatch({ 
                    type : 'ARTICLES_LOAD_FULFILLED',
                    articles : items
                }))
        }
    }

export const getRegionalEconomicReports = 
    () => {
        return (dispatch) => { 
            return fetch('http://www.imf.org/en/publications/REO')
                .then( resp => resp.text() )
                .then( text => parse(text) )
                .then( items => dispatch({ 
                    type : 'ARTICLES_LOAD_FULFILLED',
                    articles : items
                }))
        }
    }

function parse(text) {
    var articles = new Array()

    const $ = cheerio.load(text, { decodeEntities: true });
    $("main article div.search-results div.pub-row")
        .each((i, elem) => {
            let link  = $(elem).find("h6 a").attr('href')
            let title = $(elem).find("h6 a").text().trim()
            let desc  = $(elem).find("p")
                .map((idx, el) => $(el).text().trim().replace(/\s+/g,' '))
                .get()
                .join("\n")
            articles.push({link, title, desc});
        }) 

    return new Promise((resolve, reject) => {
        resolve(articles)
    })
}