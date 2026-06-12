import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements AfterViewInit {
  form = {
    name: '',
    email: '',
    message: '',
  };
  statusMessage = '';
  statusType: 'success' | 'error' | '' = '';
  isSending = false;

  sendEmail() {
    if (
      !this.form.name ||
      !this.form.email ||
      !this.form.message
    ) {
      alert('Please fill all fields');
      return;
    }

    this.isSending = true;

    emailjs
      .send(
        'service_oryovrx',
        'template_b5j05ep',
        {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message,
        },
        'nlqtPph1BYqXmjh1v'
      )
      .then(() => {
        this.statusType = 'success';
        this.statusMessage = 'MESSAGE_SENT_SUCCESSFULLY.exe';

        setTimeout(() => {
          this.statusMessage = '';
          this.statusType = '';
        }, 3000);
        this.form = {
          name: '',
          email: '',
          message: '',
        };

        this.isSending = false;
      })
      .catch((error) => {
        console.error(error);
        this.statusType = 'error';
        this.statusMessage = 'FAILED_TO_SEND_MESSAGE.exe';

        setTimeout(() => {
          this.statusMessage = '';
          this.statusType = '';
        }, 3000);
        this.isSending = false;
      });
  }
  @ViewChild('contactSection')
  contactSection!: ElementRef;

  isVisible = false;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    observer.observe(this.contactSection.nativeElement);
  }

}