 import Shops from "../PageObjectModel/Shop";
 import Bills from "../PageObjectModel/Bill";
import Homepage from "../PageObjectModel/Home";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
describe("ProtoCommerce", () => {
   
    before(() => {
  
      cy.visit("https://rahulshettyacademy.com/angularpractice/");
});

it("enter the credentials", () => {

  const homepage = new Homepage(); // Instantiate the Homepage object
  homepage.AssertUrl();
  homepage.UserName("Sujith");
  homepage.UserEmail("Sujith@123");
  homepage.UserPassword(12345);
  homepage.Checkbox();
  homepage.Gender();
  homepage.Radiobutton();
  homepage.DOB();
  cy.wait(5000);
  homepage.Submit();

  // Shop-page ...
  const shop = new Shops();
  shop.shopping();
  shop.Add();
  shop.CheckOut();

  // Checkout Page...
  const bills = new Bills();
  bills.Bill_and_Compare();


  cy.wait(2000);
  cy.get(".btn.btn-success").click();
  // assertion
  //cy.get('label[for="country"]').contains('Please choose your delivery location\nThen click on purchase button ').should('be.visible')
  // cy.get('.input-field > label').should('include','delivery location')
  cy.get("#country").type("in");
  cy.wait(4000);
  cy.get(".suggestions").each(($country) => {
    if ($country.text().includes("India")) {
      cy.wrap($country).click({ force: true });
    }
  });
  cy.get("#checkbox2").check({ force: true }).should("be.checked");
  cy.get(".btn.btn-success.btn-lg").should("be.visible").click({ force: true });
  cy.get("div>strong").should("have.text", "Success!");
  cy.screenshot("ProtoCommerce");
});
})