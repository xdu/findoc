import fs from 'fs'
import cheerio from 'cheerio'
import 'whatwg-fetch'

export const loadFeaturedReports = 
    () => {

        var articles = new Array()

        fetch('https://openknowledge.worldbank.org/')
            .then( resp => resp.text() )
            .then(contents => {
        //fs.readFile('data.html', 'utf8', (error, contents) => {

            const $ = cheerio.load(contents, { decodeEntities: true });
            $("#aspect_discovery_SiteRecentSubmissions_div_site-home #tabs #tab1 ul li.ds-artifact-item")
                .each((i, elem) => {

                    let ref = $(elem).find("div[data-href]")
                    console.log("ref : " + ref.attr('data-href'))

                    let img = $(elem).find("div.artifact-preview a img");
                    console.log("img : " + img.attr('src'))

                    let title = $(elem).find("h4 a")
                    console.log("title : " + title.text())

                    let desc = $(elem).find("span.short-description a")
                    console.log("desc : " + desc.first().text())

                    let author = $(elem).find("div.author-info a")
                    console.log("author : " + author.text())

                    let date = $(elem).find("div.date-info a")
                    console.log("date : " + date.text())

                    let article = new Object()
                    article.ref = ref.attr('data-href')
                    article.img = img.attr('src')
                    article.title = title.text();
                    article.desc = desc.first().text()
                    article.author = author.text()
                    article.date = date.text()

                    articles.push(article)
                }) 
        })

        return {
            type : 'ARTICLES_LOAD_FULFILLED',
            text : "Carbon 2017",
            articles: articles
        }
    }
