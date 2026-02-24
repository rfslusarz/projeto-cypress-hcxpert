@e2e
Feature: Compra E2E completa

  Scenario: Fluxo completo de compra com login
    Given que acesso a pagina inicial
    And adiciono o produto "Blue Top" ao carrinho
    When acesso o carrinho
    Then devo ver o produto "Blue Top" no carrinho
    When prosseguo para o checkout
    And realizo login com "teste2024@teste.com.br" e "teste"
    And prosseguo novamente para o checkout
    And preencho o comentario do pedido e clico em Place Order
    And preencho os dados do cartao
    And confirmo o pagamento
    Then devo ver a mensagem de confirmacao do pedido
