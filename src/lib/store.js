import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src', 'data', 'content.json');

export function getData() {
    try {
        if (!fs.existsSync(dataPath)) {
            console.warn("Data file not found, returning empty default.");
            return { services: {}, portfolio: [] };
        }
        const fileContents = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error("Error reading data:", error);
        return { services: {}, portfolio: [] };
    }
}

export function saveData(data) {
    try {
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error("Error writing data:", error);
        return false;
    }
}
