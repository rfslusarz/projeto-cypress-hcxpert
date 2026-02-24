@login @smoke
Feature: Login

  Scenario: Login valido com credenciais corretas
    Given que acesso a pagina de login
    When preencho o email "teste2024@teste.com.br" e senha "teste"
    And clico no botao Login
    Then devo estar logado com sucesso

  Scenario: Login invalido - email e senha invalidos
    Given que acesso a pagina de login
    When preencho o email "invalido@invalido.com" e senha "senhaerrada"
    And clico no botao Login
    Then devo ver a mensagem de erro "Your email or password is incorrect!"

  Scenario: Login invalido - email valido e senha invalida
    Given que acesso a pagina de login
    When preencho o email "teste2024@teste.com.br" e senha "senhaerrada"
    And clico no botao Login
    Then devo ver a mensagem de erro "Your email or password is incorrect!"

  Scenario: Login invalido - email invalido e senha valida
    Given que acesso a pagina de login
    When preencho o email "invalido@teste.com" e senha "teste"
    And clico no botao Login
    Then devo ver a mensagem de erro "Your email or password is incorrect!"

  Scenario: Login invalido - email ausente e senha preenchida
    Given que acesso a pagina de login
    When preencho apenas a senha "teste"
    And clico no botao Login
    Then devo permanecer na pagina de login

  Scenario: Login invalido - senha ausente e email preenchido
    Given que acesso a pagina de login
    When preencho apenas o email "teste2024@teste.com.br"
    And clico no botao Login
    Then devo permanecer na pagina de login

  Scenario: Login invalido - ambos os campos vazios
    Given que acesso a pagina de login
    When clico no botao Login sem preencher os campos
    Then devo permanecer na pagina de login

  Scenario: Login invalido - email com formato invalido
    Given que acesso a pagina de login
    When preencho o email "emailinvalido" e senha "teste"
    And clico no botao Login
    Then devo permanecer na pagina de login

  Scenario: Login invalido - email com dominio inexistente
    Given que acesso a pagina de login
    When preencho o email "teste@dominioinexistente.xyz" e senha "teste"
    And clico no botao Login
    Then devo ver a mensagem de erro "Your email or password is incorrect!"
