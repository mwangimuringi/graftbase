// /lib/utils.ts

export const utils = {
    formatPrice(value: number, locale: string = 'en-US', currency: string = 'USD'): string {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
      }).format(value);
    },
  
    truncate(text: string, maxLength: number = 100): string {
      return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    },
  
    capitalizeFirstLetter(str: string): string {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  
    generateId(prefix: string = 'id'): string {
      return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
    },
  
    sleep(ms: number): Promise<void> {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  
    slugify(str: string): string {
      return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    },
  };
  