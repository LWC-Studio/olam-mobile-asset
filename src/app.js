import { LightningElement } from "lwc";

export default class App extends LightningElement {
  emojiActive(evt) {
    evt.currentTarget.classList.toggle("active");
  }

  home(evt) {
    this.template.querySelector('.c-home').classList.remove('slds-hide');
    this.template.querySelector("."+evt.currentTarget.dataset.source).classList.add('slds-hide');
  }

  dashboard() {
    this.template.querySelector('.c-home').classList.add('slds-hide');
    this.template.querySelector('.c-dashboard').classList.remove('slds-hide');
  }

  attendance() {
    this.template.querySelector('.c-home').classList.add('slds-hide');
    this.template.querySelector('.c-attendance').classList.remove('slds-hide');
  }

  appointments() {
    this.template.querySelector('.c-home').classList.add('slds-hide');
    this.template.querySelector('.c-appointments').classList.remove('slds-hide');

  }

  expenses() {
    this.template.querySelector('.c-home').classList.add('slds-hide');
    this.template.querySelector('.c-expenses').classList.remove('slds-hide');

  }

  newlead() {
    this.template.querySelector('.c-home').classList.add('slds-hide');
    this.template.querySelector('.c-new-lead').classList.remove('slds-hide');

  }

  checkcredit() {
    this.template.querySelector('.c-appointments').classList.add('slds-hide');
    this.template.querySelector('.c-check-credit').classList.remove('slds-hide');
  }

  checkcreditscore() {
    this.template.querySelector('.c-check-credit').classList.add('slds-hide');
    this.template.querySelector('.c-check-credit-score').classList.remove('slds-hide');
  }

  feedback() {
    this.template.querySelector('.c-check-credit-score').classList.add('slds-hide');
    this.template.querySelector('.c-feedback').classList.remove('slds-hide');
  }

  success(evt) {
    this.template.querySelector("."+evt.currentTarget.dataset.source).classList.add('slds-hide');
    this.template.querySelector('.c-success').classList.remove('slds-hide');
    
  }
}
