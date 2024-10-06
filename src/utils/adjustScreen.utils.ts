export function getWindowScroll() {
        return window.scroll({
            top: 0,
            left: 0,
            behavior: "auto"
        });
    }