//write the object-constructor funtion
function Octocat(n,a){
  this.anem = n;
  this.arms = a;

  this.slap = function(){
    for(var a=0;a<this.arms;a++){
      console.log("SLAP");
    }
  };
}

//Make 3 Octocat-objects
var octo1 = new Octocat("Sam",10);
var octo2 = new Octocat("Carlos",20);
var octo3 = new Octocat("Pablo",30);
