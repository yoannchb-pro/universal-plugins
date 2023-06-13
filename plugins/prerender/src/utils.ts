/**
 * Log a message into the console
 * @param message
 */
function log(message: string, isError?: boolean) {
  const head = isError ? "[PRERENDER PLUGIN ERROR]" : "[PRERENDER PLUGIN]";
  console.log(head, message);
}

/**
 * Make a pause for some ms
 * @param timeMs
 * @returns
 */
function wait(timeMs: number) {
  return new Promise((resolve) => setTimeout(resolve, timeMs));
}

export { log, wait };
