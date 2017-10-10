import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../shared/feedback.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public formSend: boolean;

  constructor(public feedbackService: FeedbackService) {
  }

  sendFeedback(form: NgForm) {
    this.feedbackService.addFeedback(form.value).subscribe(() => {
      form.reset();
      this.formSend = true;
    });
  }

}
