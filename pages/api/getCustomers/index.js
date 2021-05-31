//import faunadb from 'faunadb'
const faunadb =require('faunadb')
//const secret = process.env.FAUNADB_SECRET_KEY 
//const secret = process.env.FAUNADB_SECRET_KEY
const secret = 'fnAEKTGesrACDSYATCv30M69N2J1dxk6B2HafkSU'
const q = faunadb.query
const client = new faunadb.Client({secret})

module.exports = async(req,res)=>{
    try{
        const dbs = await client.query(
       q.Map(q.Paginate(q.Match(q.Index('index/all_todos'))),ref(q.Get(ref))
    ))
    res.status(200).json(dbs.data)
    }catch(err){
        res.status(500).json({Error:error.message})
    }

}


