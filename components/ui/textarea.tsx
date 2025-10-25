import * as React from 'react';
export function Textarea(props: any){ return <textarea {...props} className={`w-full border rounded-md px-3 py-2 text-sm ${props.className||''}`} /> }
export default Textarea;
