import * as cheerio from 'cheerio'
import https form 'https'

const html = '<h1>hello world</h1>'
const $ = cheerio.load(html)
console.log($('h1').text())