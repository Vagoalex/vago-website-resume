import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import LoadingMarvel from '../components/LoadingMarvel/LoadingMarvel';
import Skeleton from '../components/Skeleton/Skeleton';

const setContent = (process, Component, data) => {
  switch (process) {
    case 'waiting':
      return <Skeleton />;
    case 'loading':
      return <LoadingMarvel />;
    case 'error':
      return <ErrorMessage />;
    case 'confirmed':
      return <Component data={data} />;

    default:
      throw new Error('Unexpected process state!');
  }
};

export default setContent;
