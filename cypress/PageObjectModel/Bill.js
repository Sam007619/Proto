class Bills{

Bill_and_Compare(){

    var sum = 0
    cy.get(" tr td:nth-child(4) strong")
      .each(($price) => {
        cy.log($price.text())
        //split the value
        var initial = $price.text();
        var split = initial.split(" ")
        //remove the symbols
        var value = split[1].trim("")
        //add the value
        sum = parseInt(sum) + parseInt(value);

      }).then(()=>{
        cy.log(sum)
        var rev = "₹. " + sum;
        expect(rev).to.equal("₹. 185000");
      })
}


}
export default Bills