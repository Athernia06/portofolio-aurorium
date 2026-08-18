import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const idRef = useRef(0);

  const showToast = useCallback((message) => {
    idRef.current += 1;
    const id = idRef.current;
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div className="pointer-events-none fixed bottom-6 right-6 z-[70] flex flex-col items-end gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            className="rounded-lg border border-transparent bg-primary px-5 py-3 font-body text-sm font-medium text-white shadow-lg shadow-accent/20 dark:bg-blue-600"
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useToast() {
  return useContext(ToastContext);
}
