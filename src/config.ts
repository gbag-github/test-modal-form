// Apply environment configs and defaults
export function getGlobalVar(varName: string): string | undefined {
    return (global as any)?.env?.[varName];
}

const config = {
    /**
     * ENVs are on process on server (Node) and global in browser (DOM),in the case of process you
     * cannot destructure, full path must be called. Fallbacks are for unit tests only
     **/
    brand: getGlobalVar('brand') ?? process.env.brand ?? 'testForm',

};

export default config;
