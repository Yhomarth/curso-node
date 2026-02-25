import path from 'node:path';
import fs from 'node:fs';

export interface SaveFileUseCase {
    execute : (options : SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
    fileContent : string;
    fileDestination ?: string;
    fileName ?: string;
}


export class SaveFile implements SaveFileUseCase {
    constructor(
        /** repository: StorageRepository */
    ) {}

    execute({ fileContent, fileDestination = 'outputs', fileName = 'output' }: SaveFileOptions): boolean {
        
        try {
                   
            // Crear el directorio si no existe
            fs.mkdirSync(fileDestination, { recursive: true });
        
            // Escribir el archivo
            const filePath = path.join(fileDestination, `${fileName}.txt`);
            fs.writeFileSync(filePath, fileContent, 'utf-8');
        
            return true;
            
        } catch (error) {
            console.error('Error al guardar el archivo:', error);
            return false;
        } 

    }
}