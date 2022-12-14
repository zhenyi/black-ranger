// A more reliable way is to check for an api response, e.g. https://domain.name/api/v1/timelines/public?limit=1
// But that's another round trip to the server, so we just do something quick and dirty:

if (document.querySelector('[id*=mastodon]')) {

    // If you only want to open your app from the profile pages and post pages, you can add another if-statement
    // The regex also lets you access the username and post id, in case you want to use a custom url format
    // if (location.pathname.match(/@(.+?)(\/|$)(\d+)?/))
    location.href = `blackranger:${location.host}${location.pathname}${location.search}`;

}
