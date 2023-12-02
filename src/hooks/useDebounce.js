import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);
        
        return () => clearTimeout(handler);
        //mỗi khi value trong mảng deps thay đổi thì clearnup function được gọi, nên sẽ clear timeout trước đó đi (huỷ những lần trước đi).
    });
    return debounceValue;
}

export default useDebounce;
