type TConvert = {
  rem?: number;
  px?: number;
};

export function calculator() {
  function convert(
    usePx: boolean,
    fontSize: number,
    rem: number,
    px: number
  ): Promise<TConvert> {
    if (usePx) {
      return _pxToRem(fontSize, rem, px);
    }

    return _remToPx(fontSize, rem);
  }

  function _remToPx(fontSize: number, rem: number): Promise<TConvert> {
    return new Promise((resolve, reject) => {
      const value = fontSize * rem;

      if (!value) {
        reject(Error("font size or rem isn't a number"));
      }

      resolve({
        px: value,
        rem: rem,
      });
    });
  }

  function _pxToRem(
    fontSize: number,
    rem: number,
    px: number
  ): Promise<TConvert> {
    return new Promise((resolve, reject) => {
      const value = Math.round((px / fontSize) * 1000) / 1000;

      if (!value) {
        reject(Error("font size or px isn't a number"));
      }

      resolve({
        rem: value,
        px: px,
      });
    });
  }

  return {
    convert,
  };
}
