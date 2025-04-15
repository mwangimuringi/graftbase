// /lib/utils.ts

export function formatPrice(value: number, locale: string = 'en-US', currency: string = 'USD'): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(value);
  }
  
  export function truncate(text: string, maxLength: number = 100): string {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  }
  
  export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  export function generateId(prefix: string = 'id'): string {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  }
  