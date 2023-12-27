import $ from 'jquery';

export class MenuHandler {
  private isExpanded: boolean = false;

  private attach() {
    $('#expandMenuButton').on('click', () => {
      const menuElement = document.querySelector('#headerMenuContacts');

      this.isExpanded = !this.isExpanded;

      if (this.isExpanded) {
        menuElement.classList.remove('mobile__hidden');
        return;
      }

      menuElement.classList.add('mobile__hidden');
    });
  }

  constructor(isExpanded: boolean = false) {
    this.isExpanded = isExpanded;
    this.attach();
  }
}
