
export function unwrapArrayResponse<T>(payload: unknown): T[] {
  if (Array.isArray(payload)) {
    return payload as T[];
  }

  if (
    payload &&
    typeof payload === 'object' &&
    'data' in payload &&
    Array.isArray((payload as { data: unknown }).data)
  ) {
    return (payload as { data: T[] }).data;
  }

  if (
    payload &&
    typeof payload === 'object' &&
    '$values' in payload &&
    Array.isArray((payload as { $values: unknown }).$values)
  ) {
    return (payload as { $values: T[] }).$values;
  }

  console.warn('⚠️ ساختار پاسخ غیرمنتظره از سرور:', payload);
  return [];
}
export function unwrapObjectResponse<T extends { id: unknown }>(payload: unknown): T {
  if (payload && typeof payload === 'object') {
    if ('id' in payload) {
      return payload as T;
    }

    const wrapped = payload as { data?: unknown; $values?: unknown };

    if (wrapped.data && typeof wrapped.data === 'object' && 'id' in wrapped.data) {
      return wrapped.data as T;
    }

    if (Array.isArray(wrapped.$values) && wrapped.$values.length > 0) {
      return wrapped.$values[0] as T;
    }
  }

  throw new Error('ساختار پاسخ سرور نامعتبر است');
}