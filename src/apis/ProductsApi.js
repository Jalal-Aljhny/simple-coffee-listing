export default async function fetchData() {
  const result = await fetch(
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
  );
  const data = await result.json();
  return data;
}
