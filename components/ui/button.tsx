import * as React from 'react';
export function Button({ children, className='', variant='default', size='md', ...props }: any) {
  const base = 'inline-flex items-center justify-center font-medium transition focus:outline-none';
  const sizes: any = { sm:'px-2 py-1 text-sm', md:'px-3 py-2', lg:'px-4 py-2 text-base' };
  const variants: any = {
    default: 'bg-black text-white hover:opacity-90',
    outline: 'border border-gray-300 hover:bg-gray-50',
  };
  return <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>{children}</button>;
}
export default Button;
