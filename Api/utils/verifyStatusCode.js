const verifyInvalidStatusCode = (code) => {
  if (code === 307) return { error: "Temporary Redirect", code };

  if (code === 402) return { error: "Validation failed", code };
  
  if (code === 403) return { error: "Forbidden", code };
  
  if (code === 404) return { error: "Resource not found", code };
};

module.exports = verifyInvalidStatusCode;
