export const getErrorMessageFromStatusCode = (statusCode) => {
    switch (statusCode) {
      case 400:
        return "Bad request: Invalid input or missing parameters.";
      case 401:
        return "Unauthorized: API key is invalid or missing.";
      case 404:
        return "City not found: make sure you spell it right.";
      case 429:
        return "Too many requests: You have exceeded the rate limits. Please try again later.";
      case 500:
        return "Internal server error: There was an issue on the server. Please try again later.";
      default:
        return "An error occurred. Please try again later.";
    }
  };