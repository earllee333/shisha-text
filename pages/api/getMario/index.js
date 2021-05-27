export default (req,res)=>{
    const data = ({name:'Luigi',age:25})
    res.status(200).json(data)
}