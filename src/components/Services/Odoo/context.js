
// @flow

import { createContext } from "react";
import { Instance } from "../../../models/instance";

export interface DefaultLaunchContextValue extends Instance {
    setContext: (context: Object) => void,
    page: number;
}

export const LaunchContext = createContext<DefaultLaunchContextValue>();

export interface DefaultManagerContextValue {
    setContext: (context: DefaultManagerContextValue) => void,
    selectValue: Instance
}
export const ManagerContext = createContext<DefaultManagerContextValue>();

export interface DefaultEditorContextValue extends Instance {
    setContext: (context: DefaultEditorContextValue) => void;
}

export const EditorContext = createContext<DefaultEditorContextValue>();
