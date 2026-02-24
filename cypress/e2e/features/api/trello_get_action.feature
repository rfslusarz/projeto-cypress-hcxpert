@api @smoke
Feature: Trello Actions API

  Scenario: Validar status code e extrair list name
    Given que eu consulto a Trello Actions API para um action fixo
    When eu envio a requisicao GET
    Then o status code deve ser 200
    And eu devo exibir o valor de "data.list.name"
