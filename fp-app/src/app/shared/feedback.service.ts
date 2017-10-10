import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeedbackService {

  constructor(private http: HttpClient) { }

  addFeedback(feedback: any) {
    return this.http.post('https://fp-training-feedback.firebaseio.com/feedback.json', feedback)
  }
}
