Feature: Realização de pedido no Automation Exercise

  Scenario: Realizar pedido com cadastro de novo usuário
    Given que acesso o site Automation Exercise
    When adiciono um produto ao carrinho
    And prossigo para o checkout
    And realizo o cadastro de um novo usuário
    And confirmo o pedido
    And preencho os dados de pagamento
    Then o pedido deve ser realizado com sucesso