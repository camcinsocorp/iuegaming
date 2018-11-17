export class ResponseLogin {
    message: string;
    token: string;

    constructor(model: any = null) {
      if (model) {
        this.message = model.message;
        this.token = model.token;

      }
    }
  }