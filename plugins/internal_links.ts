
export default function () {
    function internalLinks(content: string, memo): string {
        return content.replace(/\[\[(.*?)]]/gm, (match, p1) => {
            if (memo[p1] !== undefined) {
                return `[${p1}](${memo[p1]})`;
            }
            return match;
        });
    }

    return (site: Site) => {
        site.preprocessAll([".md"], (pages) => {
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