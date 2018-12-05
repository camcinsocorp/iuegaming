export class ResetPassword {
    reset_password_token: string;
    newPassword: string;
    verifyPassword: string;

    constructor(model: any = null) {
      if (model) {
        this.reset_password_token = model.reset_password_token;
        this.newPassword = model.newPassword;
        this.verifyPassword = model.verifyPassword;
      }
    }
  }