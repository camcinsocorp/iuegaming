export class Login {
    email: string;
    password: string;

    constructor(model: any = null) {
      if (model) {
        this.email = model.email;
        this.password = model.password;

      }
    }
  }