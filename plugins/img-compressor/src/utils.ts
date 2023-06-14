/**
 * Log a message into the console
 * @param message
 */
function log(message: string, isError?: boolean) {
  const head = isError
    ? "[IMG-COMPRESSOR PLUGIN ERROR]"
    : "[IMG-COMPRESSOR PLUGIN]";
  console.log(head, message);
}

export { log };
