import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'YOUR_EMAIL_SERVICE_API_ENDPOINT'; // Use EmailJS or similar service

  constructor(private http: HttpClient) {}

  sendEmail(emailData: any) {
    return this.http.post(this.apiUrl, emailData).toPromise();
  }
}
