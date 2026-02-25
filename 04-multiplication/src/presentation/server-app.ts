import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';


interface ServerOptions {
    base : number;
    limit : number;
    showTable : boolean;
    fileName : string;
    fileDestination : string;
}


export class ServerApp {

    static run( { base, limit, showTable, fileName, fileDestination } : ServerOptions ){
        console.log('Server is running...');

        const table = new CreateTable().excecute({ base, limit });
        const wasCreated = new SaveFile().execute({
                 fileContent: table,
                 fileName,
                 fileDestination });

        if (showTable) console.log(table);

        (wasCreated)
            ? console.log('Archivo creado exitosamente.')
            : console.log('Error al crear el archivo.');
        
        
    }

}