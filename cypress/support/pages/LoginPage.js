/**
 * Page Object para a página de Login e Cadastro.
 * Age como um repositório central para recriar o estado do usuário,
 * garantindo que mudanças na UI de login não quebrem múltiplos testes em cadeia.
 */
class LoginPage {
  /**
   * Acessa diretamente a URL de Autenticação/Login.
   */
  visit() {
    cy.visit('/login');
  }

  /**
   * Preenche de forma isolada o campo de email de login.
   * Usado individualmente para testes de erro de formato ou campos vazios.
   * @param {string} email - Endereço de email do usuário.
   */
  fillEmail(email) {
    cy.get('[data-qa="login-email"]').clear().type(email);
  }

  /**
   * Preenche de forma isolada o campo de senha.
   * @param {string} password - Senha do usuário.
   */
  fillPassword(password) {
    cy.get('[data-qa="login-password"]').clear().type(password);
  }

  /**
   * Aciona a submissão do formulário de login.
   */
  clickLogin() {
    cy.get('[data-qa="login-button"]').click();
  }

  /**
   * Fluxo completo e otimizado de login em uma única chamada de método.
   * Preferível para quando o foco principal do teste não é a UI do login em si,
   * mas sim acessar uma área restrita.
   * @param {string} email
   * @param {string} password
   */
  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickLogin();
  }

  /**
   * Retorna os elementos textuais de erro presentes no formulário de login.
   * Facilitador para validações de feedback visual (ex: credenciais incorretas).
   */
  getErrorMessage() {
    return cy.get('form[action="/login"]').find('p');
  }

  /**
   * Retorna o formulário em si, útil para validar seção ainda visível 
   * em caso de falha de autenticação.
   */
  getLoginForm() {
    return cy.get('form[action="/login"]');
  }

  /**
   * Checagem prática de autenticação validando a presença da rota de logout,
   * inferindo que a sessão original foi estabelecida.
   */
  isLoggedIn() {
    return cy.get('a[href="/logout"]').should('exist');
  }
}

export default new LoginPage();
