@navigation @smoke
Feature: Navegacao

  Scenario: Clicar em Products e validar pagina
    Given que acesso a pagina inicial
    When clico em Products
    Then devo estar na pagina de produtos
    And a URL deve conter "/products"

  Scenario: Navegar na categoria Women - Dress
    Given que acesso a pagina de produtos
    When clico na categoria Women
    And clico na subcategoria "Dress"
    Then devo ver produtos da categoria

  Scenario: Navegar na categoria Women - Tops
    Given que acesso a pagina de produtos
    When clico na categoria Women
    And clico na subcategoria "Tops"
    Then devo ver produtos da categoria

  Scenario: Navegar na categoria Women - Saree
    Given que acesso a pagina de produtos
    When clico na categoria Women
    And clico na subcategoria "Saree"
    Then devo ver produtos da categoria

  Scenario: Abrir produto da marca Madame e validar detalhes
    Given que acesso a pagina inicial
    When clico no link da marca Madame
    Then devo estar na pagina de produtos Madame
    And devo ver pelo menos um produto

  Scenario: Validar link Video Tutorials
    Given que acesso a pagina inicial
    When verifico o link Video Tutorials
    Then o link deve apontar para o canal do YouTube
