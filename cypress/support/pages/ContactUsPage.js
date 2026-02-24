/**
 * Page Object para a página de Contato (Contact Us).
 * Abstrai preenchimentos de formulário de contato e simulação de
 * upload de arquivos para envio de ticket de suporte ao cliente.
 */
class ContactUsPage {
  /**
   * Navega diretamente para a rota do formulário de contato.
   */
  visit() {
    cy.visit('/contact_us');
  }

  /**
   * Insere o nome do remetente no formulário.
   * @param {string} name - Nome a ser preenchido.
   */
  fillName(name) {
    cy.get('[data-qa="name"]').clear().type(name);
  }

  /**
   * Insere o email do rementente.
   * @param {string} email - Endereço de email do usuário contatando o suporte.
   */
  fillEmail(email) {
    cy.get('[data-qa="email"]').clear().type(email);
  }

  /**
   * Insere o título / assunto da demanda de atendimento.
   * @param {string} subject - Assunto da mensagem.
   */
  fillSubject(subject) {
    cy.get('[data-qa="subject"]').clear().type(subject);
  }

  /**
   * Insere a string de mensagem do corpo do contato.
   * @param {string} message - Texto integral da solicitação.
   */
  fillMessage(message) {
    cy.get('[data-qa="message"]').clear().type(message);
  }

  /**
   * Simula a seleção e o upload de um arquivo como anexo do contato.
   * O utilitário `selectFile` interage com o elemento de DOM input[type="file"].
   * @param {string} filePath - O caminho local do arquivo (em relação à pasta de teste ou fixture).
   */
  attachFile(filePath) {
    cy.get('input[name="upload_file"]').selectFile(filePath, { force: true });
  }

  /**
   * Finaliza e envia a requisição do ticket de contato.
   */
  submit() {
    cy.get('[data-qa="submit-button"]').click();
  }

  /**
   * Retorna o card de alerta confirmando o sucesso na recepção da mensagem,
   * facilitando validações de ponta-a-ponta no fluxo de contato.
   */
  getSuccessMessage() {
    return cy.get('.status.alert.alert-success');
  }

  /**
   * Completa rapidamente todos os campos obrigatórios textuais (nome, email, subject, message)
   * em um único comando, o que torna testes que não focam em validações isoladas de
   * input, muito mais enxutos.
   */
  fillForm(name, email, subject, message) {
    this.fillName(name);
    this.fillEmail(email);
    this.fillSubject(subject);
    this.fillMessage(message);
  }
}

export default new ContactUsPage();
