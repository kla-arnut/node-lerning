export function auth(req, res, next) {
    if (!req.headers['authorization']){
        //res.status(401).end()
        //return
    }
    next()
}

export function cores(req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    next()
}

export function preflight(req, res, next) {
    if (req.method === 'OPTIONS') {
        res.set({
            'Access-Control-Allow-Headers': 'Content-Type,Authorization'
        })
    }
    next()
}