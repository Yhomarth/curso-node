import fs from 'fs/promises';
import path from 'path';


export const saveToFile = async (fileName: string, data: string): Promise<void> => {
    const outputDir = 'outputs';
    const filePath = path.join(outputDir, fileName);

    // Crear el directorio si no existe
    await fs.mkdir(outputDir, { recursive: true });

    // Escribir el archivo
    await fs.writeFile(filePath, data, 'utf-8');

    console.log(`Archivo guardado: ${filePath}`);
}
