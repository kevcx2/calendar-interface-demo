import { useEffect, useRef, useState } from 'react';

interface Size {
  width: number;
  height: number;
}

const useElementSize = (id: string): Size => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      setSize({ width, height });
    });

    const element = document.getElementById(id);

    if (element) {
      resizeObserver.observe(element);
    }

    return () => {
      if (element) {
        resizeObserver.unobserve(element);
      }
    };
  }, [id]);

  return size;
};

export default useElementSize;
