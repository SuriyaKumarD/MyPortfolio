import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../../service/email-service.service'; // Adjust the path as necessary

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessModal = false;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && field.touched : false;
  }

  async onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      try {
        await this.emailService.sendEmail({
          to: 'suriyakumar.d@gmail.com',
          from: this.contactForm.value.email,
          subject: `New Contact Form Message from ${this.contactForm.value.name}`,
          text: `Name: ${this.contactForm.value.name}\nEmail: ${this.contactForm.value.email}\nMessage: ${this.contactForm.value.message}`,
        });

        this.showSuccessModal = true;
        this.contactForm.reset();
      } catch (error) {
        console.error('Error sending email:', error);
        // Handle error
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  closeModal() {
    this.showSuccessModal = false;
  }
}
