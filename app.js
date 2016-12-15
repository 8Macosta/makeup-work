//wite the app-object constructor
function App(n,m,s){
  this.name = n;
  this.memory = m;
  this.state = s;

  this.open =function(){
    this.state = "active";
  };
  this.close =function(){
    this.state = null;
    this.memory = 0;
  };
  this.sleep =function(){
    if(this.state == "active"){
      this.memeory = this.memory/2;
      this.state = "sleep";
    }
  };
  this.active =function(){
    if(this.state == "sleep"){
      this.memory = this.memory*2;
      this.state = "active";
    }
  };
}
//Make 4 different app object-constructor
var word = new App("Microsoft Word",100,"active");
var word = new App("Microsoft Excel",200,"active");
var word = new App("Microsoft PowerPoint",300,"active");
var word = new App("Microsoft Publisher",400,"active");

//Place the 4 object in array named applist

var applist = [];
var applist = {};
var applist = ();
var applist = "";
