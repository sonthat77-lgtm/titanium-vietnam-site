import * as React from 'react';
export function Input(props: any){ return <input {...props} className={`w-full border rounded-md px-3 py-2 text-sm ${props.className||''}`} /> }
export default Input;
