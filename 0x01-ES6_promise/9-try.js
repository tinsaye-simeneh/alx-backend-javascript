export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push('Guardrail was processed');
    queue.unshift(mathFunction());
  } catch (err) {
    queue.unshift(`Error: ${err.message}`);
  }
  return queue;
}
