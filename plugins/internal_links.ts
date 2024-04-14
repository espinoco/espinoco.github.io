
export default function () {
    function internalLinks(content: string, memo): string {
        return content.replace(/\[\[(.*?)((.*?)\|(.*?))?]]/gm,
            (...args) => {
            const match = args[0];
            const group1 = args[1];
            const group3 = args[3];
            const group4 = args[4];
            if (group1 !== undefined && group1 !== "") {
                if (memo[group1] !== undefined) {
                    return `[${group1}](${memo[group1]})`;
                }
            } else if (group3 !== undefined && group3 !== "" && group4 !== undefined && group4 !== "") {
                if (memo[group3] !== undefined) {
                    return `[${group4}](${memo[group3]})`;
                }
            }
            return match;
        });
    }

    return (site: Site) => {
        site.preprocess([".md"], (pages) => {
            // memoize all pages URLs by page title
            const memo = {};
            pages.forEach(page => {
                memo[page.data.title] = page.data.url;
            });

            pages.forEach(page => {
                page.data.content = internalLinks(page.data.content, memo);
            });
        });
    };
}