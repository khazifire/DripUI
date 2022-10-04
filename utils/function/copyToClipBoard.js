export default async function copyToClipboard(EL, setCopySuccess) {
    setCopySuccess(false);
    try {
        await navigator.clipboard.writeText(EL.current.outerHTML);
        return setCopySuccess(true);
    } catch (error) {
         setCopySuccess(false);
    }
  return  setTimeout(() => {
        return setCopySuccess(false);
    }, 4000);
};