var axios=require('axios');

axios.get("https://en.wikipedia.org/wiki/Kudos_(granola_bar)").then(function(response){

console.log(response.data);

})
.catch(function(error){
if(error){
    console.log(error);
}

})