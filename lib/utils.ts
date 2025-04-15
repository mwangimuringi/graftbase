// /lib/utils.ts

export function formatPrice(value: number): string {
    return `$${value.toFixed(2)}`;
  }
  
  export function truncate(text: string, maxLength: number = 100): string {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  }
  