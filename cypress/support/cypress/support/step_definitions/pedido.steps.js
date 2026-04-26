const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const email = teste${Date.now()}@email.com;

Given("que acesso o site Automation Exercise", () => {
  cy.visit("/");
  cy.contains("AutomationExercise").should("be.visible");
});

When("adiciono um produto ao carrinho", () => {
  cy.contains("Products").click();
  cy.url().should("include", "/products");

  cy.get(".product-image-wrapper").first().within(() => {
    cy.contains("Add to cart").click({ force: true });
  });

  cy.contains("View Cart").click();
  cy.get(".cart_description").should("be.visible");
});

When("prossigo para o checkout", () => {
  cy.contains("Proceed To Checkout").click();
  cy.contains("Register / Login").click();
});

When("realizo o cadastro de um novo usuário", () => {
  cy.get('[data-qa="signup-name"]').type("Usuario Teste");
  cy.get('[data-qa="signup-email"]').type(email);
  cy.get('[data-qa="signup-button"]').click();

  cy.get("#id_gender1").check();
  cy.get('[data-qa="password"]').type("Teste@123");

  cy.get('[data-qa="days"]').select("10");
  cy.get('[data-qa="months"]').select("May");
  cy.get('[data-qa="years"]').select("1999");

  cy.get('[data-qa="first_name"]').type("Usuario");
  cy.get('[data-qa="last_name"]').type("Teste");
  cy.get('[data-qa="company"]').type("Empresa Teste");
  cy.get('[data-qa="address"]').type("Rua Teste, 123");
  cy.get('[data-qa="country"]').select("Canada");
  cy.get('[data-qa="state"]').type("Estado Teste");
  cy.get('[data-qa="city"]').type("Cidade Teste");
  cy.get('[data-qa="zipcode"]').type("12345");
  cy.get('[data-qa="mobile_number"]').type("11999999999");

  cy.get('[data-qa="create-account"]').click();
  cy.contains("Account Created!").should("be.visible");
  cy.get('[data-qa="continue-button"]').click();
});

When("confirmo o pedido", () => {
  cy.contains("Cart").click();
  cy.contains("Proceed To Checkout").click();

  cy.get(".address_firstname").should("be.visible");
  cy.get("textarea[name='message']").type("Pedido automatizado com Cypress e Cucumber.");
  cy.contains("Place Order").click();
});

When("preencho os dados de pagamento", () => {
  cy.get('[data-qa="name-on-card"]').type("Usuario Teste");
  cy.get('[data-qa="card-number"]').type("4111111111111111");
  cy.get('[data-qa="cvc"]').type("123");
  cy.get('[data-qa="expiry-month"]').type("12");
  cy.get('[data-qa="expiry-year"]').type("2030");
  cy.get('[data-qa="pay-button"]').click();
});

Then("o pedido deve ser realizado com sucesso", () => {
  cy.contains("Order Placed!").should("be.visible");
}); 