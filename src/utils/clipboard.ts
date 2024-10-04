function copyTextToClipboardDeprecated(text: string): boolean {
  const textArea = document.createElement('textarea');
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    return true;
  } catch (err) {
    console.error('Unable to copy', err);
    return false;
  } finally {
    document.body.removeChild(textArea);
  }
}

/**
 * Copies text to the clipboard.
 * @param text - text to copy.
 */
export async function copyTextToClipboard(text: string): Promise<boolean> {
  return Promise.resolve(
    navigator.clipboard
      ? navigator.clipboard.writeText(text)
      : copyTextToClipboardDeprecated(text),
  )
    .then(() => true)
    .catch(() => false);
}