export class ForgotPassword {
    email: string;

    constructor(model: any = null) {
      if (model) {
        this.email = model.email;
      }
    }
  }