import * as React from 'react';
export function Card({ children, className='' }: any){ return <div className={`bg-white border rounded-2xl ${className}`}>{children}</div> }
export function CardHeader({ children, className='' }: any){ return <div className={`px-4 py-3 border-b ${className}`}>{children}</div> }
export function CardTitle({ children, className='' }: any){ return <div className={`text-lg font-semibold ${className}`}>{children}</div> }
export function CardContent({ children, className='' }: any){ return <div className={`px-4 py-4 ${className}`}>{children}</div> }
export default Card;
