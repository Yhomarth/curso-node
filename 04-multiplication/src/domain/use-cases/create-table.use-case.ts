
interface CreateTableUseCase{
    excecute : (options : CreateTableOptions) => string;
}

interface CreateTableOptions {
    base : number;
    limit? : number;
}


export class CreateTable implements CreateTableUseCase {
  
  
   constructor() {}

  excecute({ base, limit = 10 }: CreateTableOptions) {

    let outputMessage = "";

    outputMessage = '==============================\n';
    outputMessage += `La tabla del ${base} \n`;

    for (let i = 1; i <= limit; i++) {
      const result = base * i;
      outputMessage += `${base} x ${i} = ${result}\n`;
    }

    return outputMessage;
  }
}