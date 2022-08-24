class Blog{
    static index = (req, res)=>{ // localhost:3000/blog/
        res.send({
            data:"data post"
        })
    }
}
module.exports = Blog