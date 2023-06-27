import fs from 'fs'
import path from 'path'

const session = {}

function parseCookie(req) {
    if (!req.headers['cookie']) {
        return {}
    }
    return  req.headers['cookie']
        .split(';')
        .reduce((acc, each, idx) => {
            const a  = each.split('=')
            const key = a[0].replace(' ','')
            const val =  a[1].replace(' ','')
            return {...acc, [key]: val}
        }, {})
}

export const handler =  async (req, res) => {
    
    const cookie = parseCookie(req)
    const id =  cookie['id'] ? cookie['id'] : Math.round(Math.random() * 100)
    const counter = (session[id]) ? session[id]['counter'] + 1 : 1
    if (!session[id]) {
        session[id] = {}
    }
    session[id]['counter'] = counter

    if (req.url === '/') {
        const file = path.resolve('public', 'index.html')
        const html =  await fs.promises.readFile(file,{encoding:'utf8'})
        res.writeHead(200, {'content-type':'text/html','x-counter':counter,'set-cookie':'foo=bar','set-cookie':'a=b','set-cookie':'id='+id})
        res.write(html)
        res.end()
    } else if (/\.css/.test(req.url)) {
        const s = req.url.replace('/','')
        const file = path.resolve('public', s)
        const css =  await fs.promises.readFile(file,{encoding:'utf8'})
        res.write(css)
        res.end()
    } else {
        res.writeHead(404)
        res.end()
    }

    
}
