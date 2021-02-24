/** Returns an url short name */
export const shortenUrl = (url: string): string => {
  const GITHUB = 'https://github.com/';
  if (!url.startsWith(GITHUB)) return url;
  // 19 is the length of https://github.com/, assuming all url starts with it
  return url.substring(GITHUB.length);
};

/** Util to return the commits url */
export const getCommitsUrl = (shortName: string) =>
  `https://api.github.com/repos/${shortName}/commits`;

/** Util to return the forks url */
export const getForksUrl = (shortName: string) =>
  `https://api.github.com/repos/${shortName}/forks`;
