module.exports = {
  tralingSlash: true,
  /**
   * NOTE: This setting is Sub-path Routing
   * Refference: https://nextjs.org/docs/advanced-features/i18n-routing#sub-path-routing
   */
  i18n: {
    // localeDetection: false,
    // These are all the locales you want to support in
    // your application
    locales: ["ko-KR", "en-US"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "ko-KR",
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    // domains: [
    //   {
    //     domain: "example.com",
    //     defaultLocale: "ko-KR",
    //   },
    //   {
    //     domain: "example.en",
    //     defaultLocale: "en-US",
    //   },
    // ],
  },
};
