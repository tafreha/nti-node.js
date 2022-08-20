const deal = require("./deal.controller")
class User {
    static add = (req, res)=>{
        if(req.query.name|| req.query.age||req.query.email){
            if(!req.query.name || !req.query.age||!req.query.email){
                const errors={}
                if(!req.query.name) errors.name="please add a name"
                if(!req.query.age) errors.age="please add a age"
                if(!req.query.email) errors.email="please add a email"
                res.render("add", {data:req.query, errors})
            }
            else{
                const users = deal.readFromJson()
                users.push({id:Date.now(), ...req.query})
                deal.writeToJSON(users)
                res.redirect("/")    
            }
        }
        else
        res.render("add", {
            pageTitle:"add new user"
        })
    }
    static addPost = (req,res) => {
        res.render("addPost", {pageTitle:"add user post"})
    }
    static addPostLogic = (req, res) =>{
        let errors={}, hasError=false
        if(!req.body.name) {
            errors.name="please add a name"
            hasError=true
        }
        if(!req.body.age){
            errors.age="please add a age"
            hasError=true
        }
        if(!req.body.email) {
            errors.email="please add a email"
            hasError=true
        }
        console.log(errors)
        if( hasError ) {
            return res.render("addPost", {data:req.body, errors})
        }
        const users = deal.readFromJson()
        users.push({id:Date.now(), ...req.body})
        console.log(users)
        deal.writeToJSON(users)
        res.redirect("/")    
    }
    static all = (req, res)=>{
        const users = deal.readFromJson()
        res.render("all", {
            pageTitle: "Home Page",
            users
        })
    }
    static edit =  (req, res)=>{
        const userId = req.params.id
        const users = deal.readFromJson()
        const index = deal.getIndex(users,userId, "id")
        let result = {pageTitle:"edit user", isEmpty:false}
        if(index == -1) result.isEmpty= true
        else result.user = users[index]
        res.render("edit", result)
    }
    static editLogic = (req, res)=>{
        const userId = req.params.id
        const users = deal.readFromJson()
        const index = deal.getIndex(users,userId, "id")
        const userAfterUpdate = {id:req.params.id, ...req.body}
        users[index]= userAfterUpdate
        deal.writeToJSON(users)
        res.redirect(`/single/${userAfterUpdate.id}`)
    }
    static single = (req, res)=>{
        const userId = req.params.id
        const users = deal.readFromJson()
        const index = deal.getIndex(users,userId, "id")
        let result = {pageTitle:"single user", isEmpty:false}
        if(index == -1) result.isEmpty= true
        else result.user = users[index]
        res.render("single", result) // {pagetTitle:"", isEmpty:true}
    }
    static del = (req, res)=>{
        const userId = req.params.id
        const users = deal.readFromJson()
        const id = deal.getIndex(users,userId, "id")
        if(id==-1) return res.redirect("notFound")
        users.splice(id, 1)
        deal.writeToJSON(users)
        res.redirect("/")
    }
}
module.exports = User