import {v4 as uuidv4} from 'uuid';

export default function generate_id(): string {
    return uuidv4();
}