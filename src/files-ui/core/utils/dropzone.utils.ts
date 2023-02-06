export const isValidateActive = (
    accept: string | undefined,
    maxFileSize: number | undefined,
    maxFiles: number | undefined,
    validator: Function | undefined
  ): boolean => {
    return (
      (accept !== undefined && accept !== null) ||
      (maxFileSize !== undefined && maxFileSize !== null) ||
      (maxFiles !== undefined && maxFiles !== null) ||
      (validator !== undefined && validator !== null)
    );
  };
  