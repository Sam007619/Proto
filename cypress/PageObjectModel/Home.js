 

class Homepage {
  AssertUrl() {
    return cy
      .url()
      .should("include", "https://rahulshettyacademy.com/angularpractice/");
  }
  UserName(username) {
      cy.get("form.ng-untouched > :nth-child(1)")
        .should("exist")
        .type(username);
    };
  

  UserEmail(email) {
    return cy.get("form.ng-untouched > :nth-child(2)").type(email);
  }

  UserPassword(password) {
    return cy.get("#exampleInputPassword1").type(password);
  }
 
  Checkbox() {
    return cy.get("#exampleCheck1").check().should("be.checked");
  }

  Gender() {
    return cy
      .get("#exampleFormControlSelect1")
      .select("Male")
      .should("have.value", "Male");
  }

  Radiobutton() {
    return cy.get("#inlineRadio1").check().should("be.checked");
  }

  DOB() {
    cy.get(":nth-child(8) .form-control ").type("1998-08-01");
    cy.get(".btn").click({ multiple: true });
  }
  Submit() {
    cy.get('input[type="submit"]').click();
  }

  AlertCheck() {
    cy.get(".alert").should("includes", "Success!");
  }
}

export default Homepage
