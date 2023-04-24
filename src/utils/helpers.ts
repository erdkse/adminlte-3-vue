export const calculateWindowSize = (windowWidth: number): string => {
    if (windowWidth >= 1200) {
        return 'lg';
    }
    if (windowWidth >= 992) {
        return 'md';
    }
    if (windowWidth >= 768) {
        return 'sm';
    }
    return 'xs';
};

export const sleep = (time: number) =>
    new Promise((res) => setTimeout(res, time));

export const setWindowClass = (classList: string) => {
    const window: HTMLElement | null =
        document && document.getElementById('root');
    if (window) {
        (window as any).classList = classList;
    }
};
export const addWindowClass = (classList: string) => {
    const window: HTMLElement | null =
        document && document.getElementById('root');
    if (window) {
        window.classList.add(classList);
    }
};

export const removeWindowClass = (classList: string) => {
    const window: HTMLElement | null =
        document && document.getElementById('root');
    if (window) {
        window.classList.remove(classList);
    }
};
