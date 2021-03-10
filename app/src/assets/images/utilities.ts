import cond from "lodash-es/cond";

import { isCurryEqual } from "utilities";

import { ESize } from "./types";

export const getNumberSize = cond([
  [isCurryEqual(ESize.micro), () => 12],
  [isCurryEqual(ESize.small), () => 16],
  [isCurryEqual(ESize.big), () => 20],
]);
