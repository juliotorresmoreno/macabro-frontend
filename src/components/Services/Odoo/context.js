
// @flow

import { createContext } from "react";

interface defaultContextValue {
    plan: Number,
    setContext: (context: Object) => void,
}

export const LaunchContext = createContext<defaultContextValue>();