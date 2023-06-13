/**
 * Log a message into the console
 * @param message
 */
function log(message: string, isError?: boolean) {
  const head = isError ? "[PRERENDER PLUGIN ERROR]" : "[PRERENDER PLUGIN]";
  console.log(head, message);
}

export { log };
