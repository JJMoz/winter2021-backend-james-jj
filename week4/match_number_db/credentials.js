function getMongoURL(){ 
    return "mongodb+srv://match_number_user:lovetocode1@cluster0.oca0i.mongodb.net/match_number?retryWrites=true&w=majority"
}

module.exports = {
    getMongoURL: getMongoURL 
}