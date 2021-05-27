//import faunadb from 'faunadb'
const faunadb =require('faunadb')
//const secret = process.env.FAUNADB_SECRET_KEY 
//const secret = process.env.FAUNADB_SECRET_KEY
const secret = 'fnAEKDYGiIACCksDlgVR1LGCUJ7USjj-kj8i4bdy'
const q = faunadb.query
const client = new faunadb.Client({secret})

module.exports = async(req,res)=>{
    try{
        const dbs = await client.query(
       q.Map(q.Paginate(q.Match(q.Index('all_todos'))),ref(q.Get(ref))
    ))
    res.status(200).json(dbs.data)
    }catch(err){
        res.status(500).json({Error:error.message})
    }

}


