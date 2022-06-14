import Button from "./component/ui/button";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $translate: () => string;
  }

  export interface GlobalComponents {
    UIButton: typeof Button;
  }
}

export {}; // Important! See note.
