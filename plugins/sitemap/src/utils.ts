/**
 * Log a message into the console
 * @param message
 */
function log(message: string, isError?: boolean) {
  const head = isError ? "[SITEMAP PLUGIN ERROR]" : "[SITEMAP PLUGIN]";
  console.log(head, message);
}

export { log };
