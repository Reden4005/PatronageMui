describe("Users base functionalities works", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("details of user are visible", () => {
    cy.get("#details").click();
    cy.contains("Details about user");
    cy.contains("PERSONAL INFORMATION");
    cy.get("button").click();
    cy.contains("USERS BASE");
  });

  it("add new user", () => {
    cy.get("#addNewUser").click();
    cy.get("input[name='name']").type("Alexa");
    cy.get("input[name='lastName']").type("Kind");
    cy.get("input[name='age']").type("45");
    cy.get("input[name='dateOfBirth']").type("2000-01-01");
    cy.get("div[id='user-gender']").click();
    cy.get("li[data-value='female']").click();
    cy.get("input[name='email']").type("alexa@com.pl");
    cy.get("input[name='phoneNumber']").type("123-456-789");
    cy.get("input[name='address']").type("14 Sweet Str., 123 Nowhere");
    cy.get("div[id='user-hobbies']").click();
    cy.get("li[data-value='Motorbike']").click();
    cy.get("li[data-value='Singing']").click();
    cy.get("li[data-value='Baking']").click();
    cy.get("body").click(20, 20);
    cy.get("button[type='submit']").click();
    cy.get("button[title='Go to next page']").click();
    cy.get("button[title='Go to next page']").click();
    cy.contains("Alexa");
  });

  it("delete user", () => {
    cy.get("div[data-id='6193ce0799647b845f24e587']")
      .find("button[id='delete']")
      .click();
    cy.contains("Cancel").click();
    cy.get("div[data-id='6193ce0799647b845f24e587']").should("exist");
    cy.get("div[data-id='6193ce0799647b845f24e587']")
      .find("button[id='delete']")
      .click();
    cy.contains("Delete").click();
    cy.get("div[data-id='6193ce0799647b845f24e587']").should("not.exist");
  });
});
