export class ResponseSingup {
    message: string;

    constructor(model: any = null) {
      if (model) {
        this.message = model.message;
      }
    }
  }