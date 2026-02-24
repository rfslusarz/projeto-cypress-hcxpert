@contact @smoke
Feature: Contact Us

  Scenario: Enviar formulario de contato com sucesso
    Given que acesso a pagina Contact Us
    When preencho o formulario com nome "Test User", email "test@test.com", assunto "Test Subject" e mensagem "Test message for automation"
    And anexo o arquivo sample.txt
    And clico em Submit
    Then devo ver a mensagem de sucesso do Contact Us
