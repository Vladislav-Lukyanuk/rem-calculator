import curry from "lodash-es/curry";
import isEqual from "lodash-es/isEqual";

export const isCurryEqual = curry(isEqual);
