import axios from 'axios';
import { Repo } from 'store/repos/state';

export const PAGE_SIZE = 10;

/** Retrieve repos based on given keyword */
export const getRepos = async (
  keyword: string,
  pageNumber: number = 1
): Promise<Repo[]> => {
  const url =
    `https://api.github.com/search/` +
    `repositories?` +
    `q=${keyword}&` +
    `page=${pageNumber}&per_page=${PAGE_SIZE}&` +
    `sort=stars&order=desc`;

  const { data } = await axios.get(url);

  const repos = data.items.map((item: any) => ({
    name: item.name,
    owner: item.owner.login,
    stars: item.stargazers_count,
    url: item.html_url,
    commitsUrl: item.commits_url,
    forksUrl: item.forks_url,
  }));

  return repos;
};

/** Retrieve commits info based on commits url */
export const getCommits = async (commitsUrl: string): Promise<string[]> => {
  const url = `${commitsUrl}?per_page=3`; // only retrieve last 3 commits

  const { data } = await axios.get(url);
  // use a set because last 3 committers can be the same person
  const set = new Set();

  for (let i = 0; i < 3; i += 1) {
    const author = data[i]?.author?.login;
    if (author) set.add(author);
  }
  return Array.from(set) as string[];
};

/** Retrieve last fork info based on forks url */
export const getLastForkInfo = async (
  forksUrl: string
): Promise<[string | null, string | null]> => {
  const url = `${forksUrl}?per_page=1`; // only retrieve last 1 forks

  const { data } = await axios.get(url);
  // return null to indicate no fork
  if (data.length === 0) return [null, null];

  const lastForkOwner = data[0].owner?.login;
  const lastForkOwnerUrl = data[0].owner?.url;

  const { data: ownerData } = await axios.get(lastForkOwnerUrl);

  return [lastForkOwner, ownerData.bio];
};
