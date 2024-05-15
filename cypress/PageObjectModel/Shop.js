class Shops
{
shopping(){
    return cy.get(":nth-child(2) .nav-link ").click({ multiple: true });
}

Add(){

    cy.get("app-card .card").each(($mobiles) => {
        if ($mobiles.text().includes("iphone")) {
          cy.wrap($mobiles).find("button").click();
        }
        if ($mobiles.text().includes("Samsung")) {
          cy.wrap($mobiles).find("button").click();
        }
      })
}

CheckOut(){
    //cy.get('#navbarResponsive').should('have.text','checkout')
    cy.get('[class*="nav-link btn btn-primary"] ').should("be.visible").click();
    }

}

export default Shops