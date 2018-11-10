export class ResponseGameLevel {
    worldNumber: string;
    levelNumber: string;
    scoreRewarded: string;
    question: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    correctAnswer: string;
    
    constructor(model: any = null) {
      if (model) {
        this.worldNumber = model.worldNumber;
        this.levelNumber = model.levelNumber;
        this.scoreRewarded = model.scoreRewarded;
        this.question = model.question;
        this.answer1 = model.answer1;
        this.answer2 = model.answer2;
        this.answer3 = model.answer3;
        this.answer4 = model.answer4;
        this.correctAnswer = model.correctAnswer;        
      }
    }
  }
