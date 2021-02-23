import isNil from "lodash-es/isNil";

type TConvert = {
  rem?: number;
  px?: number;
};

export class Calculator {
  convert(
    usePx: boolean,
    fontSize: number,
    rem: number,
    px: number
  ): Promise<TConvert> {
    if (usePx) {
      return this.pxToRem(fontSize, px);
    }

    return this.remToPx(fontSize, rem);
  }

  private remToPx(fontSize: number, rem: number): Promise<TConvert> {
    return new Promise((resolve, reject) => {
      const value = fontSize * rem;

      if (isNil(value)) {
        reject(Error("font size or rem isn't a number"));
      }

      resolve({
        px: value,
        rem: rem,
      });
    });
  }

  private pxToRem(fontSize: number, px: number): Promise<TConvert> {
    return new Promise((resolve, reject) => {
      const value = Math.round((px / fontSize) * 1000) / 1000;

      if (isNil(value)) {
        reject(Error("font size or px isn't a number"));
      }

      resolve({
        rem: value,
        px: px,
      });
    });
  }
}
