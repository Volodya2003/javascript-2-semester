function User(name,desc,review)
{
    this.setReview = function()
    {
        this. review = prompt("Input review: ")
    }
    this.name = name
    this.desc = desc
}

let user = new User("Volodya","somebody","Its ok")
user.setReview();

alert (user.name)
alert (user.review)
alert (user.desc)