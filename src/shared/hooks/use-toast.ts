'use client';

import { useState, useEffect, useCallback } from 'react';

// Types
interface IToast {
  id: string;
  title?: string;
  description?: string;
  duration?: number;
  dismiss: () => void;
  [key: string]: any;
}

interface IToastStore {
  toasts: IToast[];
}

interface IToastOptions {
  title?: string;
  description?: string;
  duration?: number;
  [key: string]: any;
}

// Constants
const TOAST_LIMIT = 1;
let count = 0;

// Utility functions
const generateId = (): string => {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
};

// Toast Store (Singleton Pattern)
class ToastStore {
  private static instance: ToastStore;
  private state: IToastStore = { toasts: [] };
  private listeners: ((state: IToastStore) => void)[] = [];

  private constructor() {}

  public static getInstance(): ToastStore {
    if (!ToastStore.instance) {
      ToastStore.instance = new ToastStore();
    }
    return ToastStore.instance;
  }

  public getState(): IToastStore {
    return this.state;
  }

  public setState(nextState: Partial<IToastStore> | ((prev: IToastStore) => IToastStore)): void {
    if (typeof nextState === 'function') {
      this.state = nextState(this.state);
    } else {
      this.state = { ...this.state, ...nextState };
    }
    this.notifyListeners();
  }

  public subscribe(listener: (state: IToastStore) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.state));
  }

  public addToast(toast: IToast): void {
    this.setState((state) => ({
      ...state,
      toasts: [toast, ...state.toasts].slice(0, TOAST_LIMIT),
    }));
  }

  public removeToast(id: string): void {
    this.setState((state) => ({
      ...state,
      toasts: state.toasts.filter(t => t.id !== id),
    }));
  }
}

// Toast function
export const toast = (options: IToastOptions): { id: string; dismiss: () => void; update: (props: IToastOptions) => void } => {
  const store = ToastStore.getInstance();
  const id = generateId();

  const dismiss = (): void => {
    store.removeToast(id);
  };

  const update = (props: IToastOptions): void => {
    store.setState((state) => ({
      ...state,
      toasts: state.toasts.map(t =>
        t.id === id ? { ...t, ...props } : t
      ),
    }));
  };

  const newToast: IToast = {
    ...options,
    id,
    dismiss,
  };

  store.addToast(newToast);

  return {
    id,
    dismiss,
    update,
  };
};

// Hook
export function useToast(): { toast: typeof toast; toasts: IToast[] } {
  const [state, setState] = useState<IToastStore>(() => 
    ToastStore.getInstance().getState()
  );

  useEffect(() => {
    const store = ToastStore.getInstance();
    const unsubscribe = store.subscribe((newState) => {
      setState(newState);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    state.toasts.forEach((toastItem) => {
      if (toastItem.duration === Infinity) {
        return;
      }

      const timeout = setTimeout(() => {
        toastItem.dismiss();
      }, toastItem.duration || 5000);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [state.toasts]);

  return {
    toast,
    toasts: state.toasts,
  };
}