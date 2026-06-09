import { useQuery } from '@tanstack/react-query';

export const MainPage = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json()
      ),
  });
  console.log(data);
  return <div>MainPage</div>;
};
