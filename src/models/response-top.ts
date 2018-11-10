export class ResponseTop {
    count: any;
    top: any;

    constructor(model: any = null) {
      if (model) {
        this.count = model.count;
        this.top = model.top;
      }
    }
  }
