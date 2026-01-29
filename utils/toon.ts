/**
 * TOON (Token-Oriented Object Notation)
 * A lightweight data serialization format specifically designed to optimize 
 * transmissions to LLMs by reducing token count.
 */

export function jsonToToon(obj: any, indent: number = 0): string {
    const spaces = '  '.repeat(indent);

    if (obj === null) return 'null';
    if (typeof obj === 'undefined') return 'undefined';

    if (Array.isArray(obj)) {
        if (obj.length === 0) return '[]';
        return obj.map(item => `${spaces}- ${jsonToToon(item, indent + 1).trim()}`).join('\n');
    }

    if (typeof obj === 'object') {
        const keys = Object.keys(obj);
        if (keys.length === 0) return '{}';

        return keys.map(key => {
            const value = obj[key];
            const formattedValue = typeof value === 'object' && value !== null
                ? `\n${jsonToToon(value, indent + 1)}`
                : ` ${jsonToToon(value, 0)}`;
            return `${spaces}${key}:${formattedValue}`;
        }).join('\n');
    }

    if (typeof obj === 'string') {
        // Remove extra whitespace and newlines for token efficiency
        return obj.trim().replace(/\s+/g, ' ');
    }

    return String(obj);
}

/**
 * Extracts visible text content from the page to provide context to the AI
 */
export function getPageContextAsToon(): string {
    const mainContent = document.querySelector('main') || document.body;

    const context = {
        url: window.location.href,
        path: window.location.pathname,
        title: document.title,
        timestamp: new Date().toISOString(),
        // Extract semantic data if available, or just fallback to text
        content: mainContent.innerText.slice(0, 2000) // Truncate to avoid token limits
    };

    return jsonToToon(context);
}
