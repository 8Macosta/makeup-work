class Pizza{
  constructor(){
    this.size =s;
    this.meatToppings = mt;
    this.veggieToppings = vt;
  }

sizeCost(){
  if(this.size == "s"){
    return 7.99;
  }
  else if(this.size == "m"){
    return 9.99;
  }
  else if(this.size == "l"){
    return 12.99;
  }
  else if(this.size == "xl"){
    return 14.99;
  }
}

toppingCost(top){
  if(top == "meat"){
    return 0.99*this.meatToppings.length;
  }
  else if(top == "veggie"){
    return 0.50*this.veggieToppings.length;

  }
}
totalCost(){
  return this.siseCost()+this.toppingCost("meat")+this.toppingCost("veggie");
}

static Deal(pizza,percent){
  var decimal = (100-percent/100);
  return pizza.totalCost()=decimal;
 }
}
