/**
 * Создание формы данных для отправки post
 */
export const createFormData = <T extends Record<string, any>>(obj: T): FormData => {
  const fd: FormData = new FormData();
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== null && value !== undefined) fd.append(key, value as string | Blob);
  });
  return fd;
};
