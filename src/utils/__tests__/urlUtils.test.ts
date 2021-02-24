import { shortenUrl, getCommitsUrl, getForksUrl } from '../urlUtils';

test('shorten url to short name', () => {
  expect(shortenUrl('https://github.com/apache/echarts')).toBe(
    'apache/echarts'
  );
});

test('commits url', () => {
  expect(getCommitsUrl('apache/echarts')).toBe(
    'https://api.github.com/repos/apache/echarts/commits'
  );
});

test('forks url', () => {
  expect(getForksUrl('apache/echarts')).toBe(
    'https://api.github.com/repos/apache/echarts/forks'
  );
});
