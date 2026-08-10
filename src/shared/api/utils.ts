/**
 * ساختار پاسخ سرور همیشه یکسان نیست (گاهی آرایه مستقیم، گاهی { data: [...] }
 * و گاهی فرمت ASP.NET با { $values: [...] }). این تابع همه‌ی این حالت‌ها را
 * به یک آرایه‌ی ساده تبدیل می‌کند تا این منطق در همه‌ی سرویس‌ها تکرار نشود.
 */
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