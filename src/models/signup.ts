export class Signup {
    email: string;
    password: string;
    identification: string;
    name: string;
    gender: string;
    nickname: string

    constructor(model: any = null) {
      if (model) {
        this.email = model.email;
        this.password = model.password;
        this.identification = model.identification;
        this.name = model.name;
        this.gender = model.gender;
        this.nickname = model.nickname;

      }
    }
  }