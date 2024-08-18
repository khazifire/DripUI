export default async function copyToClipboard(EL, setCopySuccess) {
    setCopySuccess(false);
    try {
      await navigator.clipboard.writeText(EL.current.outerHTML);
      setCopySuccess(true);
    } catch (error) {
      setCopySuccess(false);
    }

    // Reset copySuccess state after 1 seconds
    setTimeout(() => {
      setCopySuccess(false);
    }, 1000);
};