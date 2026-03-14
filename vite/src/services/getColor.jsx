export function getColor(string) {
    let color = '#007699';
    if(!string) {
        return color;
    }
    const character = string.charAt(0).toUpperCase();
    switch(character) {
        case 'A': 
        case 'B':
        case 'C': 
            color = '#a80000';
            break;
        case 'D': 
        case 'E':
        case 'F': 
            color = '#b46c00';
            break;
        case 'G': 
        case 'H':
        case 'I': 
            color = '#9cb800';
            break;
        case 'J': 
        case 'K':
        case 'L': 
            color = '#00b40f';
            break;
        case 'M': 
        case 'N':
        case 'O': 
            color = '#00bb8f';
            break;
        case 'P': 
        case 'R':
        case 'S': 
            color = '#6a6a6a';
            break;
        case 'T': 
        case 'U':
        case 'W': 
            color = '#4800e2';
            break;
        case 'X': 
        case 'Y':
        case 'Z': 
            color = '#c50094';
            break;
    }
    return color;
}