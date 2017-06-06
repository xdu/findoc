import 'whatwg-fetch'

export const getWorldEconomicOutlook = 
    () => {
        return (dispatch) => { 
            return fetch('http://www.imf.org/en/publications/weo')
                .then( resp => resp.text() )
                .then( text => parse(text) )
                .then( items => dispatch({ 
                    type : 'ARTICLES_LOAD_FULFILLED',
                    text : items 
                }))
        }
    }

function parse(text) {
    return new Promise((resolve, reject) => {
        resolve("Parsed")
    })
}