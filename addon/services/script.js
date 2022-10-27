import Service from '@ember/service';

export default class ScriptService extends Service {
  /**
   * Dynamically load a script.
   *
   * @param src         URL source for the script.
   * @return {*}
   */
  load(src) {
    const scripts = document.querySelectorAll(`script[src^="${src}"]`);

    if (scripts.length !== 0) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');

      script.src = src;
      script.addEventListener('load', resolve);
      script.addEventListener('error', reject);

      const parent = document.head || document.body;

      if (!parent) {
        throw new Error(
          'The application must have a <head> or <body> element.'
        );
      }

      parent.appendChild(script);
    });
  }
}
